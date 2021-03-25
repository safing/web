---
# possible values: blog video podcast
category: blog
layout:   blog
title: "Attributing DNS Requests on Windows"
date: 2021-03-23
author: daniel
custom_thumbnail_name: devlog
category: "Dev Log"
cover_image_source: https://pixabay.com/photos/code-coding-web-development-944499/
---

For an application firewall it is crucial to know which processes query which domains.
This sounds like an easy thing to achieve, but in practice it turns out to be a rather complicated problem. Especially on Windows.

### Applications Resolve DNS via the DNS-Client Windows Service

When we first looked into how to find this vital piece of information on Windows 10, we found that for some reason all DNS requests are sent from the "DNS-Client" Windows service.
There were no DNS requests _to_ that service on the wire, just _from_ it. Upon further investigation we found that Windows applications use the `dnsapi.dll` for taking care of DNS requests:
So whenever an application needs to resolve a dns query, for example in order to load a website, this `.dll` is loaded into the application and takes care of all the DNS details.
It then communicates directly with the DNS-Client via an internal IPC mechanism and does not even send a common DNS packet on the wire, which the Portmaster or any other firewall could see.

<!-- V2: add image: App(dnsapi.dll) >>> Windows(DNS-Client) -->

As a result, we realized that we would not be able to attribute DNS requests to processes out of the box.

### For A Long Time, Deactivating the DNS-Client Had No Real Impact - So We Did That

Windows provides the option and official documentation on how to deactivate the DNS-Client.
When this is the case, the `dnsapi.dll` falls back to sending DNS requests on the wire, where the Portmaster can pick them up and handle them.

<!-- V2: add image: App(dnsapi.dll) >>> Portmaster -->

While researching this issue we found that disabling the DNS-Client actually seemed to be a rather much requested action and quite common for Windows users. That is why we decided to follow this easy route and just disable the DNS-Client upon installation, because it is only a caching stub resolver with no other functionality, right? Right? No.

As it turns out, the DNS-Client is much more than "just" a caching stub resolver.

In retrospect, maybe it should have been a stronger hint to us that Microsoft removed the ability to directly stop the DNS-Client from the service manager. We had to manually set the registry key `HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\services\Dnscache` -> `Start` from `2` to `4` and then reboot the system.
However, the official Windows docs do not mention anything about there being more to the DNS-Client. They imply that you can stop the DNS-Client from the service manager without side effects, when in reality the DNS-Client has to be disabled manually and has become a critical and central part of Windows not to be tinkered with.

### Turns Out: Deactivating the DNS-Client Causes Lots of Issues For Users

The first reports we received that made us aware that there is much more to this service were those of VPN clients not working correctly.
Some of these clients wanted to change the configured DNS server in Windows, which is a good thing - it prevents DNS leaking. But as it turns out, the responsible Windows service for handling these changes is ... the DNS-Client!
With every report of another broken application that we could trace back to the disabled DNS-Client service, we started to realize that we were on the wrong path and needed a better solution.

### Hijacking dnsapi.dll Was Ditched Because it Is Malware-ish

We went back to researching possibilities to somehow find out which processes query which domains. We found some "interesting" ways:

There actually is a way to force the `dnsapi.dll` to fall back to sending DNS requests over the wire. Applications can specify the flag `DNS_QUERY_WIRE_ONLY` to the `.dll`, but forcing this globally would mean we would have to hijack the `dnsapi.dll`.
While some of you might find that this is a viable solution, hijacking - as the name suggests - is definitely edgy and something that malware commonly does; and the Portmaster is no malware.

### Replicating Windows Functionality Would Be a Nightmare

Something similar would be possible on the other end: We could just replace the full DNS-Client by disabling it and taking its place with a custom built replica.
While this is potentially a cleaner solution than hijacking, we already have had enough headaches from working with _documented_ Windows APIs. Touching _undocumented_ Windows stuff is pretty much nightmare material for engineers at this point.

### No per-App Settings Is Not an Option Either

With no other options available to directly get the needed information, we were only left with one option: embrace the DNS-Client as it is, not deactivating it and accepting we get no process attribution via that route. But how could we then still be an effective Application Firewall?

The simplest way around the problem would be to ditch DNS request to process attribution altogether. So instead of caring which process sent the query and acting upon the per-app setting, one can solely act upon global settings. The drawback is obvious: no more per-app settings. So you could not browse facebook.com on your browser while blocking their nasty trackers everywhere else. The world becomes pretty binary.

Even though we would be able to keep our tight grip on the system, we want to empower users with all their nuanced needs. This was not a solution we ever really considered. Instead, we continued our research to find a better balance between system control and per-app configurability.

### The Solution: Intervene Later - When Network Connections Are Initiated

In order to best protect user privacy, we need to know where applications are connecting to as early as possible.

The ideal and earliest place would have been the DNS request, which turned out not to be feasible anymore. We now return a valid answer to most DNS requests coming from the DNS-Client.

The most notable exception to this is the Portmaster's Bypass Protection, which will continue to directly block DNS requests if it needs to, no matter where they come from. We think it is good to be strict in this case.

The next possible place to intervene is when a process initiates a network connection (think TCP).
At this point, no data has left your device and we only know about the IPs, the ports and the originating process. In most cases, we do not yet know which (Layer 5) protocol will be used over the connection, or which domain is the target.

But what we can do here, is collect more information. So whenever the Portmaster returns a valid DNS answer to a request - even if we do not know the real process behind it - we remember which IPs this domain resolved to.
We scope this information into app-specific scopes or, when we do not know which app is really behind a DNS request, into a global scope.
In addition we also remember which resolver handled the request for us, so we have more information to work with later on.

### The Application Firewall Still Acts Before Any Data Leaves Your Device

Now, back to our process that is initiating a new connection:
We can now look up the remote IP address and see which domain we know of that resolves to the remote IP of the connection.
With this and all other attached information we can now attribute the connection to the domain and make an accurate decision about it.
And this all happens before even a single bit of data leaves your device - we did it! Well, almost... As it turns out, there are some edge cases which might lead to side effects. Always expect to deal with side effects, especially on Windows.

<!-- V2: add image: App(dnsapi.dll) >>> Windows(DNS-Client) >>> Portmaster // App:Connection >>> Attribution >>> Decision -->

### Side Effect: Wrong Attribution Is A Little More Likely

Since remembered DNS requests which go through the DNS-Client are now pooled together in a global scope, this can sometimes lead to a wrong attribution of a domain to a connection.

For example, if two processes use two different domains but both of them point to the same IP address, it could happen that the Portmaster thinks that the first process is connecting to the domain of the second process and vice-versa. Especially _if_ requests are done in parallel or connections are re-established without querying for the domain again.
This could also have happened before, when a single process sent its DNS requests directly to the Portmaster, but was less likely.

As a remediation to this, we will start looking at HTTP headers and TLS handshakes in the future. With information gathered directly from the connection, the attribution will be more accurate.

But even that will not solve all our problems:
- Applications can fake exposed domain information with a method called "Domain Fronting".
- TLS 1.3 introduces Encrypted Client Hello messages, which will partially hide this information again.

As you see, the rabbit hole is endless, for now we are cutting it here. But no worries - we are looking forward to solving these challenges in the future.

### The Solution Also Benefits Linux Integration

Not only Windows has an internal DNS server to take care of DNS requests. Linux distributions are starting to activate the DBus interface of `systemd-resolved`, which in turn also hides DNS requests from the Portmaster. The workaround presented in this post also successfully deals with this.

Similar systems are known to exist and are expected in other operating systems as well, so this change will better brace us for the next systems we plan to support as well.

In addition to that, we now also have more information available on network connections, which will make future features, such as the connection history, even more powerful.

### Portmaster Changelog Summary

Here is a full list of changes that this workaround brings:
- Domains may be wrongly attributed to connections a bit more often than before.
- The Portmaster will activate the DNS-Client Windows Service, which it previously disabled during installation.
- The DNS-Client in Windows and Linux' systemd-resolved are now categorized as a special "System DNS Client" app in the Portmaster.
- If you want to disable bypass prevention for a specific app, you might also need to disable bypass prevention in the "System DNS Client" App in the Portmaster.

These changes are [live with Portmaster v0.6.7](https://github.com/safing/portmaster/releases/tag/v0.6.7).
