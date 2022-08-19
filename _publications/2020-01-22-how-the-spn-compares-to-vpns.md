---
# possible values: blog video podcast
category: blog
layout:   blog
title: How the SPN Compares to VPNs
date: 2020-01-22
updated: 2022-08-17
author: safing
custom_thumbnail_name: how-the-spn-compares-to-vpns
cover_image_source: https://pixabay.com/vectors/the-globe-globe-the-internet-free-4790044/
portmaster_plug: true
---

{% include spn_vs_vpns_top.html %}

### One Shoe Does Not Fit All - What Is Your Threat Model?

What is the best way to protect diamonds worth a few thousand dollars?

You could leave them in your living room for everyone to see.
But that would be careless.  
You could build an atomic bunker in the middle of the woods.
But that would overdo it.  
A safe in your house is probably a better solution.

Welcome to the world of threat modeling.
Before choosing any tool, especially within privacy, it is important to ask:

- What do I want to protect?
- From whom do I want protection?
- How much time can I invest?

We need different solutions for different needs - there simply is no perfect solution for everyone.
You are the only one who knows the value of your diamonds and who is after them.
So only you can decide which solution is best for you.

Understanding your threat model might be difficult at first, but it will save you a lot of time and help you avoiding wrong decisions.
This comparison blog showcases the strengths and weaknesses of the Portmaster and Simplewall and hopes to assist you in your decision making.

With this mindest, let's dig into the details.

### Multiple Identities

Open any VPN app, and you are presented with your most important choice: Choose the country you want to browse the Internet from. You exchange the identity of being a customer of your ISP with the identity of being a customer of your VPN provider. This is good if you trust your VPN more than your ISP, but it won't fool many trackers.

This is how this looks like:

![Illustration showing a typical VPN connection](https://safing.io/assets/img/spn/vpn-web.png)

When you first open the SPN, it won't ask you from which country you want to browse the Internet. Why limit yourself to one?  
The SPN does not just use one server in one country, but uses many servers in many countries - at the same time. This results in having many identities, not just one.

This is how this looks like:

![Illustration showing the SPN connecting via multiple exit nodes](https://safing.io/assets/img/spn/spn-community-web.png)

Instead of just "beaming" yourself to another place, you can now be everywhere at once. Connections are individually routed through the network in order to make sure you have the best possible privacy and speeds.

### Automatic Geo-Unblocking

The longer your connections stay within the SPN, the more private they are. This is why the SPN selects the final server as close as possible to the destination server that you are trying to connect to in order to open a website.

This does not only provide vastly improved privacy, but automatically unblocks geo-restricted content, as you will be accessing the content in the country it originates from.

In case you have special requirements, you can of course instruct the SPN to use a specific country for a website. _This feature is still in progress._

Needless to say, VPNs cannot do this automatically, as they can only use one "exit" server at once, even if they are "multi-hop".

### Individual App Settings

While there are some VPNs that are able to exclude the local network (LAN) or certain apps from the VPN, the SPN takes this to a new level.

Similar to firewall rules, you can very easily exclude any combination of connections from being routed through the SPN. By default, it excludes local network resources, as well as any captive portal. You don't need to turn it off to log into the WiFi when traveling!

### Easy Setup

The SPN is part of Portmaster, which seamlessly integrates into your system and is installed with a single click.

Most VPNs provide a custom app that is easy to install - some require you to manually configure a client, though.

### SPN is Open Source

An auditable and open source code builds a high level of trust in the software. Instead of having to trust a privacy policy of the company, people can check the source code and see what it really does on a technical level.

The beauty with this is, the bigger the community around a software gets, the more secure it becomes, often outperforming proprietary software. Zero-day exploits and long-forgotten vulnerabilities become rarer since someone from the community usually discovers them.

The SPN is fully open source. Everyone can inspect the code and make sure it does what we say. While there are some VPN providers that open source their clients, most of them do not publish their source code, requiring even more trust in how they handle modern privacy threats on the basis of ancient technology built for another purpose.

### SPN is Built for Privacy

VPNs use a technology first created over 20 years ago with the intent to securely connect two distant private networks. It was never meant to protect a single device from the network, but to enable even more connectivity through a separate channel. The term "Private" in "Virtual Private Network" does not stand for "private as in secret", but for "private as in property".

Only later companies started to offer a "VPN" as an online privacy solution for individual users. In order to that, they had to "twist" the VPN technology into a direction it was not created for: protecting a device from the network itself. This is why VPN providers have problems with IP leaks and DNS leaks and try to circumvent the negative side effects with "Kill Switches" and "No Log Policies".

The SPN technology, on the other hand, was created from scratch with a single purpose in mind: Protecting your privacy on the Internet. Every single part of the SPN is geared towards this goal. There are no dirty fixes or bandages. Everything is carefully engineered to protect you.

The SPN does not have IP or DNS leaks, because it is part of Portmaster, the privacy firewall that is in control of all your connections.

The SPN does not need a kill switch and it does not need "No Log Policies", because all traffic goes through multiple servers and is encrypted in layers. This means that no server ever knows both who you are (ie. your IP address) and where you are going to (ie. the website you are visiting). 

![Illustration showing the SPN connecting via multiple exit nodes](https://safing.io/assets/img/spn/spn-community-web.png)

The SPN does one thing and it's very good at it: Protecting your privacy.

### Conclusion: SPN is a better fit for most threat models

Going back to the threat modeling we started with, we believe that many VPN users actually want a level of privacy that VPNs simply cannot offer. The SPN is built from the ground up to be superior to VPNs in every aspect - in regards to privacy.

<br>
<br>

---

<br>
<br>

Want to know more? Let's dive even deeper...

{% include spn_vs_vpns_tech.html %}

### Cryptographic Identity Protection

VPNs - Virtual Private Networks - are, well, networks that carry data packets through a tunnel from one point to the next. They are a more or less seamless part of the network. Packets destined for the Internet go into the VPN and out again without change. This means that packets are just relayed somewhere else and do not receive any advanced protection. Multi-Hop VPNs just relay your packets via one more server, but the problem remains: The packets do not receive any extra protection. Every server in that Multi-Hop chain can see all your traffic. Yes, the last server can't your IP address, but the previous servers can see all your traffic unencrypted and log everything you do. Oh, and just hope that your VPN client does not log into the last server in the chain too, then it even might have your VPN login data and again know who you are.

Instead of just doing some tricks with packet routing, the SPN protects your traffic and identity with proper cryptography. Every packet is end-to-end encrypted to every single server along the chain of servers the connection uses. This was originally invented for Tor and was called [Onion Routing](https://en.wikipedia.org/wiki/Onion_routing). This way, every server in the chain only knows the previous and the next hop. No server ever knows who you are _and_ where you are going to.

![Illustration showing the SPN connecting via multiple exit nodes](https://safing.io/assets/img/spn/spn-community-web.png)

But the SPN goes even one step further. Instead of using your username and password - which makes you identifyable - to log into the SPN, Portmaster authenticates itself not against the network itself, but against the SPN Account Service, which verifies you are allowed to access the network. It then give you special cryptographically blinded tokens, which prove your access permission, but are not linked to your account anymore. This way, no server in the SPN will ever know your username.

### Node Ownership and Logging

As VPNs are centralized, all their servers are operated by only one entity - the VPN provider itself. They can, therefore, monitor all you traffic and see what you are up to. This is why they tout their "No Logging" policies so loudly, because they know they can see everything.

The SPN, on the other hand, invites the community to join the network and strengthen it by adding diversity to the operators of the network. This way - in addition to the cryptographic protections - it is made almost impossible that anyone will ever be able to track you through the SPN.

Side note: There will be some form of compensation for community nodes in the future.

### No Kill Switch Needed

VPNs came up with the idea of kill switches, because they need to change the "default route", which is more or less what tells your device where to send all it's traffic to.
If you install a VPN, it will add a "virtual network" to your device and will update the default route to point to that network. If your device sends network packets to that virtual network, they will be encrypted and sent to your VPN provider, who will then release these packets to the Internet to do their thing. So far so good.

But when (not if) the connection to your VPN provider breaks - for whatever reason - your operating system will disable the virtual network and automatically change the default route to point to your ISP. This happens in a blink of an eye - your VPN software won't even notice.

The SPN is part of Portmaster, which tightly controls all the network connections of your device. It always knows what is going on and can stop any leaks in its tracks.

### Private Account and Payments

For a truly private experience, it is not only important to protect connections, but also your identity when signing up and making a payment.

While there are VPN providers that offer very good options in this area, many of them require payment methods that identify you to 100%.

When you sign up for the SPN, you can just go with the pre-filled random generated username and choose a password. You need to fill out a country with a matching phone prefix for tax and legal reasons - just to make everything legal and well on our side. While we can't verify what you fill in these fields - we do not look at your IP address - we trust that our users are well-meaning and trustworthy.

Payments can be done using Bitcoin, Ethereum and Monero as well as sending us cash (Euros) in a letter.  
If you do not need to protect your privacy in that regard, we offer credict card payments and PayPal for your convenience.
