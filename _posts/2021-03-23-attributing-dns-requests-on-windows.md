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
There were no DNS requests _to_ that service on the wire, just _from_ it. Upon further investigation we, found that Windows applications use the `dnsapi.dll` for taking care of DNS requests:
Whenever an application needs to resolve a dns query, for example in order to load a website, this `.dll` is loaded into the application and takes care of all the DNS details.
It then communicates directly with the DNS-Client via an internal IPC mechanism and does not even send a common DNS packet on the wire, that the Portmaster could see.

<!-- V2: add image: App(dnsapi.dll) >>> Windows(DNS-Client) -->

We realized that we wouldn't be able to attribute DNS requests to processes out of the box.

### For A Long Time, Deactivating the DNS-Client Had No Real Impact - So We Did It

Windows provides the option and official documentation on how to deactive the DNS-Client.
When this is the case, the `dnsapi.dll` falls back to sending DNS requests on the wire, where the Portmaster can pick them up and handle them.

<!-- V2: add image: App(dnsapi.dll) >>> Portmaster -->

While researching this issue, we found that disabling the DNS-Client actually seemed to be a rather much requested action and quite common for Windows users.
So we decided to take the easy route and just disable the DNS-Client upon installation, because it is only a caching stub resolver with no other functionality, right? Right?

No.

Apparently, the DNS-Client is much more than "just" a caching stub resolver.
Maybe it should have been a stronger hint to us that Microsoft removed the ability to stop it directly - we had to change a value in the registry and reboot the system in order to get rid of it.
The offical docs do not mention anything about that, they still "insist" that it should work directly and there is no mention of how the DNS-Client has actually become a criticial and central part of Windows.

### Turns Out: Deactivating the DNS-Client Messes Things Up

The first reports we received that made us aware that there is much more to this service, were those of VPN clients not working correctly.
Some of these clients wanted to change the configured DNS server in Windows (which is a good thing - it prevents DNS leaking), but as it turned out, the responsible Windows service for handling these changes is ... the DNS-Client!
With every report of another broken application that we could trace back to the disabled DNS-Client service, we started to realize that we needed a better solution.

### Back to the Drawing Board

We went back to researching possibilities to somehow find out which processes query which domains. We found some "interesting" ways:

There actually is a way to force the `dnsapi.dll` to fall back to sending DNS requests over the wire.
Applications can specify the flag `DNS_QUERY_WIRE_ONLY` to the `.dll`, but forcing this globally would mean we'd have to hijack the `dnsapi.dll`.
While some of you might find that this is a viable solution, hijacking - as the name could "maybe" suggest - is definitely in the malware realm, and the Portmaster is no malware.

Something similar would be possible on the other end: We could just replace the full DNS-Client by disabling it and taking its place.
While this is a potential cleaner solution than hijacking something, we've had enough headaches from working with _documented_ Windows APIs, and touching undocumented Windows stuff is pretty much nightmare material for engineers.

With no other options available to directly get the needed information, we were left with only one option: Working around the problem on our side.
The simplest way to achieve that, is accept that we won't have access to the required information and disable per-app settings completely. This would leave users without the ability to change settings for some apps and not for others.

This would mean that we would be able to keep our tight grip on the system, but as you have certainly guessed by now, we are all about emporing our users and this is not a solution we have ever really considered. We continued our research to find a good balance between control and configurability.

### We Will Keep Users in Power As Much as Possible

In order to keep the ability to empower users with per-app settings, we need to know where applications are connecting to as early as possible in order to protect your privacy as good as we can.

The ideal and earliest place would have been the DNS request, which is not possible anymore. Instead, we now return a valid answer to most DNS requests coming from the DNS-Client.

The most notable exception to this is the Portmaster's Bypass Protection, which will continue to also directly block DNS requests if it needs to, no matter where they come from. We think it's okay to be over-protective about protecting you.

The next possible place to intervene is when a process initiates a network connection (think TCP).
At this point, no data has left your device and we only know the IPs, the ports and the originating process.
In most cases, we don't know yet which (Layer 5) protocol will be used over the connection, or which domain is the target.

But we would love to know already!
So, whenever the Portmaster returns a valid DNS answer to a request - even if don't know the real process behind it - we remember which IPs this domain resolved to.
We scope this information into app-specific scopes or a global scope when we don't know which app is really behind a DNS request.
In addition to the information about the DNS request, we also save information about the resolver that resolved the request for us, so we have more information to work with later on.

Now, back to our process that is initiating a new connection.
We can now look up the remote IP address and see which domain we know about that resolves to the remote IP of the connection.
We can now use this domain and all the other information that we attached there to make a decision about the connection.
And this is still before even a single bit of data leaves your device!

We did it!
Well, almost.
I think you might have already guessed that this just a little too good to be true...

<!-- V2: add image: App(dnsapi.dll) >>> Windows(DNS-Client) >>> Portmaster // App:Connection >>> Attribution >>> Decision -->

### Side Effects

Because remembered DNS requests that go through the DNS-Client are now pooled together in a global scope, this can sometimes lead to a wrong attribution of a domain to a connection.

For example, if two processes use two different domains but both of them point to the same IP address, it could happen that the Portmaster thinks that the first process is connecting to the domain of the second process, _if_ requests are done in parallel, or connections are re-established without querying for the domain again.
This also happened before, when a single process sent its DNS requests directly to the Portmaster, but this was less likely.

As a remediation to this, we will start looking at HTTP headers and TLS handshakes in the future. With information gathered directly from the connection, the attribution will be more accurate.
But this will not solve all our problems:
- Applications can fake exposed domain information with a method called "Domain Fronting".
- TLS 1.3 introduces Encrypted Client Hello messages, which will (partially) hide this information again.

These are challenges we are looking forward to solve and also blog about our journey through that process.

### This Will Also Benefit Linux Integration Long-Term

Not only Windows has an internal DNS server to take care of DNS requests. Linux distributions are starting to active the DBus interface of systemd-resolved, which in turn also hides DNS requests from the Portmaster. The workaround presented in this post also successfully works around this.

Similar systems are known to exist and are expected in other operating systems as well, so this change will better brace us for the next systems the Portmaster will be expanded to.

In addition to that we also now have more information available for network connections, which will make future features, such as the connection history, even more powerful.

### Changes to the Portmaster

Here is a full list of changes that this workaround brings:
- Domains may be wrongly attributed to connections a bit more often than before.
- The Portmaster will activate the DNS-Client Windows Service, which it previously disabled during installation.
- The DNS-Client in Windows and Linux' systemd-resolved are now categorized as a special "System DNS Client" app in the Portmaster.
- If you want to disable bypass prevention for an app, you might need to also disable bypass prevention in the "System DNS Client" App in the Portmaster.

These changes are live with [Portmaster v0.6.7](https://github.com/safing/portmaster/releases/tag/v0.6.7).
