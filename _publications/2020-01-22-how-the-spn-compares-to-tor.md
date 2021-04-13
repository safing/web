---
# possible values: blog video podcast
category: blog
layout:   blog
title: How the SPN compares to Tor
date: 2020-01-22
author: David
custom_thumbnail_name: spn-tor
---

## Tor's Mission is Broad, Safing Focuses on Ease of Use

Tor's mission statement (from [https://www.torproject.org/](https://www.torproject.org/) - in the footer), declares:

> To advance human rights and freedoms by creating and deploying free and open source anonymity and privacy technologies, supporting their unrestricted availability and use, and furthering their scientific and popular understanding.

We wholeheartedly agree and appreciate Tor's work and outlined broader mission, but our focus is on a specific sub-area of theirs:

We believe that freedom can only flourish when privacy is the default. And privacy will only be broadly adopted if it is easy to use. So "Easy to use" is our focus: we want my mom and your mom to be able to conveniently withstand mass surveillance without having to venture deep into tech. This is what drives us. This is our mission.

## The SPN Protects Your Whole Computer

The Tor browser has great coverage, supporting all major operating systems. It protects the browser habits of its users and is a breeze to set up. When one additionally wants to safeguard the whole computer via the Tor network one has to use the [operating system tails](https://tails.boum.org/install/index.en.html), which is great at what it does, but hard and technical to set up and use.

This is one key difference to the SPN. With it, it's a simple plug and play. You download the open source app and then it takes care of all your connections, not only those of the browser. Currently, we support Windows and Linux. We are planning on supporting Mac and Mobile in the future too, so everybody can enjoy easy privacy with their preferred operating system.

Another detail is that Tor does not transport everything, notably UDP traffic. The SPN will support TCP and UDP (+ variants) from the get go and we will see if we will need and implement anything else.

## Tor Is Maturer

Tor was released in 2002, while the SPN launched in August 2020. It goes without saying that Tor is the far maturer project of the two. The SPN is still in its early days.

## The SPN Minimizes Travel through the Open Web

Both Tor and the SPN provide privacy by decoupling the person (ip-address) from the destination. This prevents your Internet Service Provider and everyone else from logging your Internet activities. When no other identification is provided you even arrive at the destination anonymously, meaning the visited server cannot know who you are.

This is achieved by routing connections through a circuit. This splits the full route into sub-routes so no single server can both know the person and the destination.

![SPN core](https://safing.io/assets/img/spn/spn-core-web.png)

When the connection arrives at the last server of the circuit it still has to travel to the desired website. With Tor, this may lead to a slower Internet experience. As an example, a person located in Europe loading a European website may receive a circuit exiting in the US. This means the connection has to cross the Atlantic twice (EU -> US -> EU). After a circuit with plain Tor is established all your other connection will use the same route. A circuit change normally occurs every 10 minutes.

With the SPN however, every connection is calculated individually and leaves the network as near to the destination as possible. This means:

1. your connections are spread across the globe, using vast amounts of identities (IP addresses)
2. visibility in the 'open web' is minimized
3. connections are not slowed down by having to go extra miles

![SPN community](https://safing.io/assets/img/spn/spn-community-web.png)

## Minor comments

**The Dark Web Is a Non-Goal for Safing**  
Tor's mission for anonymity also enables people to host content anonymously through onion domains. This is a non-goal for Safing.

**SPN Enforces DoT and Blocks Ads/Trackers**  
As the [open source Portmaster app]({{ site.github_url }}/portmaster/), which hosts the SPN, sits at the kernel, it can add all sorts of amazing privacy features. Current modules (free & optional) include a DNS Resolver which enforces all your DNS queries to use DNS over TLS (DoT) and a Privacy Filter which blocks malicious or unwanted connections.

**The SPN Costs Money**  
Both the SPN and Tor are FOSS. But Tor is free to use while you have to subscribe to the SPN in order to use it. Be aware you are not only paying for the SPN, but also supporting us to develop the free application firewall and enabling us to continue fighting for a brighter future.

## Conclusion: It Depends on Your Threat Model
Tor is a great project which has pioneered privacy technology and is a firm player in the space while the SPN has fresh, innovative solutions which tackle uncharted ground and focuses on ease of use before all. Depending on your threat model, the SPN may be an alternative to Tor. Or it might not.
