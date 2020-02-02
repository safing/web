---
title: How the SPN compares to VPNs
date: 2020-01-22
author: davegson
---

# How the SPN compares to VPNs

## Introduction into VPN Technology

### What is a VPN here for?
The VPN technology was developed to allow remote workers to securely connect to a corporate network to virtually check into the office and access internal resources. It does this by establishing a secure tunnel between the worker and the company. The VPN shields the whole route from the worker to the office, never entering the "open Internet".

### What do commercial VPNs do?
Naturally, they do something very similar. As an example, let's say you want to connect to "google.com" via a VPN. The VPN client first creates a safe tunnel to the VPN server, which then calls upon "google.com". So a VPN safeguards your connections up until the VPN server, then unpacks their protection and routes it back into the open Internet.

### VPNs do not protect your privacy
There are many legitimate use cases for a VPN, like securely connecting to your corporate network or "beaming" into another country to enjoy different content or cheaper prices. But VPNs do *not* protect your privacy.

## Meta Data Collection

A VPN does protect you from your Internet Service Provider (ISP) to collect and process you browsing activities. But this just delegates the problem: now the VPN that can collect and sell all your data, which many of them do.

![VPNs](https://safing.io/assets/img/spn/vpn-web.png)


The SPN however decouples the person from the destination, resulting in true privacy. And already early in our alpha stage we will welcome community nodes into our network, creating a decentralized network without a single point of trust.

![SPN community](https://safing.io/assets/img/spn/spn-community-web.png)


## Scope of Protection

The VPN technology is widespread and almost every computer and mobile phone supports connecting to a VPN natively.

When launching in June, the SPN will support Windows, with Linux following shortly after. We are planning on supporting Mac and Mobile in the future too, so everybody can enjoy easy privacy with their preferred operating system.

The VPN and SPN both tunnel connections from your whole computer, not only from your browser.

## Open Source
Many commercial VPN providers use bold and misleading marketing claims without any evidence to back it up. The code on their servers and mostly on their clients cannot be investigated. They demand your trust but give little to no proof in return.

The SPN however is open source / FOSS. We do not believe users should simply 'trust' companies when it comes to their privacy. Instead they should be able to inspect vendors and hold them accountable publicly. So feel free to check out [our Github](https://github.com/Safing/).

## Extra Mileage

After a connection arrives at the VPN server it still has to travel to the desired website. Depending on where your VPN is located, this may lead to a slower Internet experience. As an example, a person who is located in Europe may be connected to a US VPN server while loading a European website. This means the connection has to cross the Atlantic twice (EU -> US -> EU).

With the SPN however, every connection is calculated individually and leaves the network as near to the destination as possible. This means:

<br/>

- your connections are spread across the globe
- visibility in the 'open web' is minimized
- connections are not slowed down by having to go extra miles

![SPN community](https://safing.io/assets/img/spn/spn-community-web.png)

## Minor comments

**SPN enforces DoT**  
While the open source SPN app sits at the kernel, it can do all sorts of amazing stuff. It will enforce all your DNS queries to use DNS over TLS (DoT), which also prevents your router from snooping on you. Later, it will also block malicious connections via an integrated Application Firewall.

**VPN - a Very Precarious Narrative**  
There is [a great write up by Dennis Schubert](https://schub.wtf/blog/2019/04/08/very-precarious-narrative.html) showcasing the problem of todays commercial VPNs, both from a privacy and security perspective. Feel free to check it out, it also shows the valid use cases of VPNs.

**Pricing**  
While VPN providers basically rebrand the same basic technologies widely available, we built every aspect of the network from the ground up, by hand. This is a huge investment and will require lots of resources to properly maintain and improve. But this is the only way to achieve real privacy. Thank you for enabling us to continue fighting for a brighter future!

## Conclusion

The VPN technology was built to securely connect two company locations. However, the SPN was developed from the ground up to protect user privacy. As a result the SPN can easily outperform VPNs in every aspect.
