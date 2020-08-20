---
title: How the SPN Compares to VPNs
date: 2020-01-22
author: davegson
custom_thumbnail_name: how-the-spn-compares-to-vpns
cover_image_source: https://pixabay.com/vectors/the-globe-globe-the-internet-free-4790044/
---

## Overview of VPN Technology

### VPNs Were Built for Security, NOT for Privacy
The VPN technology was developed to allow remote workers to securely connect to a corporate network to virtually check into the office and access internal resources. It does this by establishing a secure tunnel between the worker and the company. The VPN shields the whole route from the worker to the office, never entering the "open Internet".

### Commercial VPNs Are just Proxy Servers
A commercial VPNs does something rather mundane. As an example, let's say you want to connect to "google.com" via a VPN. The VPN client first creates a safe tunnel to the VPN server, which then calls upon "google.com". So a VPN safeguards your connections up until the VPN server, then unpacks their protection and routes it back into the open Internet.

### VPNs do NOT Protect Your Privacy
There are many legitimate use cases for a VPN, like securely connecting to your corporate network or "beaming" into another country to enjoy different content or cheaper prices. But VPNs do *not* protect your privacy.

## The SPN Truly Protects Your Meta Data

Before diving into the SPN, let's recap: A VPN does protect you from your Internet Service Provider (ISP) to collect and process you browsing activities. But in the end this just delegates the problem: now the VPN that can collect and sell all your data, which many of them do.

![VPNs](https://safing.io/assets/img/spn/vpn-web.png)


The SPN however decouples the person from the destination, resulting in true privacy. And already early in our alpha stage we will welcome community nodes into our network, creating a decentralized network without a single point of trust.

![SPN community](https://safing.io/assets/img/spn/spn-community-web.png)


## VPN Technology is More Widespread (for now)

The VPN technology is widespread and almost every computer and mobile phone supports connecting to a VPN natively.

When launching in June, the SPN will support Windows, with Linux following shortly after. We are planning on supporting Mac and Mobile in the future too, so everybody can enjoy easy privacy with their preferred operating system.

The VPN and SPN both tunnel connections from your whole computer, not only from your browser.

## SPN ♥ Open Source - Everybody Can Inspect
Many commercial VPN providers use bold and misleading marketing claims without any evidence to back it up. The code on their servers and mostly on their clients cannot be investigated. They demand your trust but give little to no proof in return.

The [SPN however is open source / FOSS]({{ site.github_url }}/spn/). We do not believe users should simply 'trust' companies when it comes to their privacy. Instead they should be able to inspect vendors and hold them accountable publicly. Feel free to [check out all of our Github](https://github.com/Safing/).

## The SPN Minimizes Travel through the Open Web

After a connection arrives at the VPN server it still has to travel to the desired website. Depending on where your VPN is located, this may lead to a slower Internet experience. As an example, a person who is located in Europe may be connected to a US VPN server while loading a European website. This means the connection has to cross the Atlantic twice (EU -> US -> EU).

With the SPN however, every connection is calculated individually and leaves the network as near to the destination as possible. This means:

1. your connections are spread across the globe, creating vast amounts of identities
2. visibility in the 'open web' is minimized
3. connections are not slowed down by having to go extra miles

![SPN community](https://safing.io/assets/img/spn/spn-community-web.png)

## Minor comments

**SPN Enforces DoT and Blocks Ads/Trackers**  
As the [open source Portmaster app]({{ site.github_url }}/portmaster/), which hosts the SPN, sits at the kernel, it can add all sorts of amazing privacy features. Current modules (free & optional) include a DNS Resolver which enforces all your DNS queries to use DNS over TLS (DoT) and a Privacy Filter which blocks malicious or unwanted connections.

**VPN - a Very Precarious Narrative**  
There is [a great write up by Dennis Schubert](https://schub.wtf/blog/2019/04/08/very-precarious-narrative.html) showcasing the problem of todays commercial VPNs, both from a privacy and security perspective. Feel free to check it out, it also shows the valid use cases of VPNs.

**The SPN Costs more Because it is a New Product**  
While VPN providers basically rebrand the same basic technologies widely available, we built every aspect of the network from the ground up, by hand. This is a huge investment and will require lots of resources to properly maintain and improve. But this is the only way to achieve real privacy. Thank you for enabling us to continue fighting for a brighter future!

## Conclusion: SPN > VPN

The VPN technology was built to securely connect two company locations. However, the SPN was developed from the ground up to protect user privacy. As a result the SPN can easily outperform VPNs in every aspect.
