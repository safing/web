---
title: "Attributing DNS Requests on Windows"
date: 2021-03-23
author: daniel
custom_thumbnail_name: devlog
category: "Dev Log"
---

For an application firewall it is crucial to know which processes query which domains.
This sounds like an easy thing to achieve, but in practice it turns out to be a rather complicated problem. Especially on Windows.

### Applications Resolve DNS via the DNS-Client Windows Service

When we first looked into how to find this vital piece of information on Windows 10, we found that for some reason, all DNS requests are sent from the "DNS-Client" Windows service.
There were no DNS requests _to_ that service on the wire, just _from_ it. Upon further investigation we found that Windows applications use the `dnsapi.dll` for taking care of DNS requests.

<!-- extend what `dnsapi.dll` is and how it connects to the DNS Client -->
<!-- V2: add image where dnsapi <> App, connects to Windows <> DNS Client -->

These requests are not sent using common DNS packets on the wire, but use a RPC call via an internal IPC mechanism.

After all this research, it became clear that we could not attribute DNS requests to processes out of the box.

### For A Long Time, Deactivating the DNS-Client Had No Real Impact - So We Did It

<!-- what happened when deactivating the DNS-Client? -->

<!-- V2: Showing both Alternatives -->
<!-- Before: Request for DNS -> BLOCK -->

While researching this issue we found that disabling the DNS-Client seemed to be a rather much requested action and quite common for Windows users.

Most often, Windows users asked for this in order to work around bugs or to improve some aspect of their network performance.

So we decided to take the easy route and just disable the DNS-Client upon installation, because it is only a caching stub resolver with no other functionality, right? Right?

No.

Apparently, the DNS-Client is much more than "just" a caching stub resolver.
Maybe it should have been a stronger hint to us that Microsoft removed the ability to stop it directly - we had to change a value in the registry and reboot the system in order to get rid of it.

### Turns Out: Deactivating the DNS-Client Messes Things Up

The first reports we received that made us aware that there is much more to this service, were those of VPN clients not working correctly.
Some of these clients wanted to change the configured DNS server in Windows (which is a good thing - it prevents DNS leaking), but as it turned out, the responsible Windows service for handling these changes is ... the DNS-Client!
With every report of another broken application that we could attribute to the disabled DNS-Client service, we started to realize that we needed a better solution.

### Back to the Start / Searching For Alernatives

All research regarding to finding another way to see the DNS requests without disabling the DNS-Client turned up no viable options - we dismissed the crazy ones:
- Hijacking the `dnsapi.dll` to force the `DNS_QUERY_WIRE_ONLY` flag - we are not malware.
- Directly replacing the DNS-Client service - replicating Windows behavior is a nightmare. Closed source, no Docs, etc... extend why


With no options available to directly get the needed information, we were left with only one option: Working around the problem on our side.

<!-- how? what is the alternative? -->

<!-- Instead of having per-App Settings, ditch per-app settings, ditches requirement of attributing connections to processes, only global settings are left -->

Until now, we were able to directly attribute a DNS request to a process due to our "quick and dirty" solution.
No longer being able to do that means that we loose some information, and that we will have a slightly less tight grip on the system.

We will need to find a good balance between control and configurability

-> da wir eine Connection nicht mehr einem Prozess schnell zuordnen können greifen da nur die Globals und die Attribution im Nachhinein hat eine Fehlerquote

Setting:

### We Will Keep Users in Power As Much as Possible

<!-- V2: Showing new Approach -->
<!-- Alternative 1: Request for DNS -> Resolve -> check response -> BLOCK the http request (more potential for connections slipping through?) -->

The easiest way to keep control is to make previous app-specific settings global only, because then we just don't need to know the origin of a DNS request anymore to apply settings, but we're not ready to give up configurability so easily.

Previously, we made decisions directly when the DNS request arrived at the Portmaster, at which point we had all the necessary information to evaluate a DNS request.

Instead, we now return a valid answer to most DNS requests coming from the DNS-Client - bypass protection being one of the big exceptions here. Just as before, we remember that a process requested a certain domain in order to match it to a connection later. In order to correctly attribute requests that go through the DNS-Client, we now put these remembered requests into a global scope, which all processes can use to match their connections to a DNS request. In addition to that, we now attach various information about the request itself, and DNS server used for it, to that remembered request.

Now, when an app uses the DNS-Client for resolving a domain, it receives a valid answer and the Portmaster can then attribute the domain and other information to a follow-up network connection. The decision making that previously happened directly when the DNS request was handled can now happen when the network connection is initiated instead.

### Short-Term Side Effects

Because remembered DNS requests that go through the DNS-Client are now pooled together, this can lead to a wrong attribution of a domain to a connection.

For example, if two processes use two different domains but both of them point to the same IP address, it could happen that the Portmaster thinks that the first process is connecting to the domain of the second process, _if_ requests are done in parallel, or connections are re-established without querying for the domain again.

This also happened before, when a single process sent its DNS requests directly to the Portmaster, but the impact of wrongly attributing a domain in this case was not so high.

As a remediation to this, we will start looking at HTTP headers and TLS handshakes in the future. With information gathered directly from the connection, the attribution will be more accurate.
But this will not solve all our problems:
- Applications can fake exposed domain information with a method called "Domain Fronting".
- TLS 1.3 introduces Encrypted Client Hello messages, which will (partially) hide this information again.

### This Will Also Benefit Linux Integration Long-Term

Not only Windows has an internal DNS server to take care of DNS requests. Linux distributions are starting to active the DBus interface of systemd-resolved, which in turn also hides DNS requests from us. The workaround presented in this post also successfully works around this.

Similar systems are known to exist and are expected in other operating systems as well, so this change will better brace us for the next systems the Portmaster will be expanded to.

In addition to that we also now have more information available for network connections, which will make future features, such as the connection history, even more powerful.

### Changes to the Portmaster

Here is a full list of changes that this workaround brings:
- Domains may be wrongly attributed to connections a bit more often than before.
- The Portmaster will activate the DNS-Client Windows Service, which it previously disabled during installation.
- The DNS-Client in Windows and Linux' systemd-resolved are now categorized as a special "System DNS Client" app in the Portmaster.
- If you want to disable bypass prevention for an app, you might need to also disable bypass prevention in the "System DNS Client" App in the Portmaster.
