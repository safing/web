---
# possible values: blog video podcast
category: blog
layout:   blog
title: "How Safing Selects its Default DNS Providers"
date: 2020-07-07
author: daniel
custom_thumbnail_name: updating-dns-servers
---

### Encrypt Your Core Communication

The domain name system (DNS) sits at the core of almost any communication on the Internet and plays a critical part in regaining privacy on [the Interblag](https://xkcd.com/181/).

If you are not familiar with what DNS is and why you use it practically every time you access the Internet, [read on here](https://www.cloudflare.com/learning/dns/what-is-dns/).

The past few years have brought a welcoming change to the DNS ecosystem: The rise of encrypted connections between clients and recursive resolvers using either DNS-over-TLS or DNS-over-HTTPS. (DNSCrypt already exists a lot longer, but never took off.)

This new trend further restrains abusive third parties from logging and exploiting your personal information simply because it is out there in the open.

Since the Portmaster already takes over the role of the local DNS resolver ("stub"), we of course want to provide all our users with encrypted DNS queries. Since we started working on the Portmaster in 2017, more and more operating systems, but also browsers directly, started encrypting DNS queries. Even if a system provides this natively, we will still take care of this part separately, because managing DNS queries is important to provide all our other privacy features.

### Default DNS Is A Sensitive Subject

One thing that has also sparked controversy with all these new encrypted DNS clients is the selection of the resolver. While Mozilla's Firefox will default to Cloudflare (in the US, for now), Google's Chrome will only encrypt DNS queries if it knows of a secure version to the system's configured resolver. Forcing users onto a different resolver than configured will cause further centralization and Mozilla was rightfully criticized for that.

But now we have the same decision to make. How can we choose a default DNS provider that all our users are at least OK with? How can we do that while abiding to our high standards of privacy and transparency? One of the answers is this blog post. Another is to listen carefully what our users tell us.

### How We Rate DNS Providers

We have identified three basic criteria for selecting DNS providers:

- __Privacy__ to us is the most important factor in choosing a provider. We would love to find someone with the same dedication to privacy and transparency as we have ourselves.
- __Freedom__ is about not interfering with queries. Additional blocking of Ads, trackers and Malware is okay, but there is zero tolerance for censorship.
- __Technical Quality__ is a mixture of query performance, stability and global coverage. The default resolver should work well for everyone, no matter where they live or travel.

### Our Selection

Quite foreseeably, we started by taking a look at the secure resolvers that were already vetted by the PrivacyTools Community: <https://www.privacytools.io/providers/dns/>

Instead of just choosing one or two providers, we chose to select a pool of DNS providers as a working set in order to quickly react to changes in this landscape (sorted alphabetically):

<h4>AdGuard <small>(<a href="https://adguard.com/en/adguard-dns/overview.html">Website</a>)</small></h4>

__4/5 Privacy__
AdGuard is registered in Cyprus, but is developed by Russians. They value privacy and transparency and develop a wide range of ad blocking software, which usually need to be paid for. Their DNS service is free to use.  
➖ For-profit company.

__4/5 Freedom__
AdGuards optionally blocks Ads and Trackers (duh!) and also provides a "Family protection" variant. There are no known (to us) incidents regarding censorship.  
➖ Censorship (mishaps) possible through false positives.

__4/5 Technical Quality__
AdGuard operates about a dozen servers, focusing on North America, Europe and South East Asia. Their coverage can be improved, but their query performance is pretty good.  
➖ Lacking Coverage.

<h4>Foundation for Applied Privacy <small>(<a href="https://applied-privacy.net/">Website</a>)</small></h4>

__5/5 Privacy__
The Foundation for Applied Privacy is a nonprofit privacy infrastructure provider based in Austria (which is also where we are). This is the only selected provider that is fully stationed and operated within the EU.

__5/5 Freedom__
There is no filtering in place at all, which means there is no possibility to screw it up. There are also no known (to us) incidents regarding censorship.

__3/5 Technical Quality__
While their query performance is really good, they are only present in one country and only run one resolver, making them prone to outages.  
➖➖ Lacking Coverage.

<h4>Cloudflare <small>(<a href="https://cloudflare.com/">Website</a>)</small></h4>

__3/5 Privacy__
Cloudflare is one of the biggest traffic handlers on the Internet and is a publicly traded company based in the US. Although one of the goals of their DNS service is to improve online privacy of users, their sheer size creates a centralization that hurts privacy.  
➖ For-profit company.  
➖ Size drives centralization.

__3/5 Freedom__
Cloudflare provides both malware and family filtering options. While, as far as we know, their DNS service has not been subject to censorship, but other services of theirs were: (1) A US court ordered Cloudflare to take down one of their customers for a short period of time. (2) They voluntarily kicked one of their (more controversial) customers off their platform, making it more difficult to argue against censorship in the future, as stated by their CEO Matthew Prince.  
➖ Some censorship incidents.  
➖ Censorship (mishaps) possible through false positives.

__5/5 Technical Quality__
Cloudflare's DNS service easily sets the bar with their unsurpassed query performance and global coverage.

<h4>Quad9 <small>(<a href="https://quad9.net/">Website</a>)</small></h4>

__4/5 Privacy__
Quad9 is a 501(c)(3) nonprofit organization based in the US. Although they value privacy, there is criticism about the influence Quad9 potentially has from its founding organizations.  
➖ Unclear influences.

__4/5 Freedom__
Quad9 blocks malicious domains reported by their partners, which in return are provided with the amount of resulting blocks. They have strict rules which domains may be blocked and there are no known (to us) incidents regarding censorship.  
➖ Censorship (mishaps) possible through false positives.

__4/5 Technical Quality__
While Quad9 is operated in locations where PCH is also present, through which they gain a [remarkable global presence](https://quad9.net/locations/). On the other side, there are reports with their performance, and we have also experienced technical issues with their service. To be fair, one must note that they operate on a shoestring budget and definitely punch above their weight.  
➖ Lacking Query Performance.

_You can find the [exact configuration for each provider here](https://wiki.safing.io/en/Portmaster/App/DNSConfiguration)._

### Our Primary Default

While we use a working set of DNS providers, only one will be active at a time. If we configure multiple providers in the default settings, additional providers will act as a fallback in case the Portmaster has any issues with the primary resolver.

Which provider we selected as the primary depends on the current situation. Each of the selected providers (sorted alphabetically) has a distinct combination of desirable attributes:

- AdGuard: __Privacy__ and __Performance__.
- Applied Privacy: __Privacy__ and __Freedom__.
- Cloudflare: __Performance__ and __Global Coverage__.
- Quad9: __Privacy__ and __Global Coverage__.

Be reminded that this is not the order in which we rate these providers, but each of them fulfills a different role. We will use them according to their strengths in order to provide all Portmaster users with the highest available privacy and quality we can.

Not all changes between providers in the defined working set will be communicated separately. Be assured that we will [thoroughly communicate any changes to this working set of providers]().

We would highly appreciate any feedback you have on this selection of providers. If you want to set the DNS provider yourself, [here is how you do it](https://wiki.safing.io/en/Portmaster/App/DNSConfiguration).
By doing so, the Portmaster will never use anything else until you make changes again (for global DNS queries).

### Conclusion

Selecting a default DNS provider is really hard. There is no provider that fulfills all our wishes, yet we have to choose. We hope to have given you a better understanding of this process with this blog post and ask you to please provide feedback if you either do not understand the conclusions we come to or feel uncomfortable with how we are going about this. We listen to what you have to say.
