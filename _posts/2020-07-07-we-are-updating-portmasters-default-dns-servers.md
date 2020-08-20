---
title: "We Are Updating Portmaster's Default DNS Servers"
date: 2020-07-07
author: daniel
custom_thumbnail_name: updating-dns-servers
---

## TLDR

On Monday, the 13th of July 2020, we will be changing the default DNS resolvers of the Portmaster to AdGuard, Applied Privacy, Cloudflare and Quad9 (sorted alphabetically). This will **affect all users who have NOT configured their own DNS servers**. If you have set your own preference the Portmaster will never use something else until you make changes again.

Future provider changes will always be communicated widely & with a heads-up.

Changes of _their order_ will happen from time to time and only be communicated in our Github update logs. We need this flexibility to adapt to ever-changing environments, both in organizational and technical terms.

---

### How the Portmaster Uses DNS Servers

At release of this post the default DNS providers is set to:

1. Quad9
2. Cloudflare

This means the primary resolver is Quad9 (1). Only when issues arise with Quad9, will the Portmaster fall back to Cloudflare (2). The same applies when a third, fourth, etc., provider is configured.

## You Can Set Your Own Preference

A lot of information is shared with DNS providers, which is why trust and empowerment are so important. We know one shoe does not fit all, which is why you can set your own DNS providers of choice, overruling all current and future Portmaster defaults in the process. So the Portmaster will never use anything else until you make changes again (for global DNS queries). We set up a [guide to help you in this process](https://github.com/safing/portmaster/wiki/DNS-Server-Settings).

## The Current Default Impacts Performance

Quad9's performance is in a good range for normal DNS queries, but there are performance problems with our DNS-over-TLS client and their DNS-over-TLS server implementation. We are in contact with Quad9 to troubleshoot and resolve this problem. Unfortunately, this process is taking longer than expected, and we do not want to sacrifice DNS query encryption by falling back to plain old DNS. But because these issues frequently have a serious impact on the functionality of the Portmaster, we will need to do something about it. So we went on to explore more alternatives, and may eventually switch back to Quad9 as our primary (1) default resolver.

But instead just switching to our fallback Cloudflare (2) to solve our problems, we wanted to bring transparency into our selection of DNS providers and make sure you really know where your data flows. We also plan on adding the currently used DNS resolver to the Portmaster dashboard, so you know at a glance who you're sending data to. Because after all, it is you who we want to empower.

### New Resolvers Are Carefully Chosen and Define a "Working Set"

Instead of just choosing one or two new providers, we chose to select a pool of vetted DNS providers as a working set in order to quickly react to future changes in this landscape.

The new set of DNS Providers (sorted alphabetically) will be:

- AdGuard
- Applied Privacy
- Cloudflare
- Quad9

All of these each excel in a different combinations of wanted attributes. [Read this blog post]({{ site.blog_url }}/2020/07/07/how-safing-selects-its-default-dns-providers/) for an in-depth insight into how we select DNS providers.

For the moment, we will be using Cloudflare as our primary default (1), because - quite frankly - its unrivaled speed makes up for some performance issues we have in the Portmaster. Addressing these issues is on our roadmap, but will require lots of time and resources, which we currently lack.

We would highly appreciate any feedback you have on this selection of providers. If you want to set the DNS provider yourself, [here is how you do it](https://github.com/safing/portmaster/wiki/DNS-Server-Settings). If you do this, the Portmaster will never use anything else until you make changes again (for global DNS queries).

### We Thoroughly Communicate New Resolvers

Changing the default DNS provider is a big change of trust and potentially privacy. This is why we want to take the time to communicate this change on all possible channels and gather your feedback in the process.

Future provider changes will always be communicated widely & with a heads-up.

Changes of _their order_ will happen from time to time and only be communicated in our Github update logs. We need this flexibility to adapt to ever-changing environments, both in organizational and technical terms.

### Changes Will Go in Effect next Monday (13.07.2020)

The new working set of DNS providers will go into production with a Portmaster Core update on 13.07.2020.

### Future Improvements

__Near-term__  
Right now, selecting a custom dns provider is a bit cumbersome, as it requires understand a little syntax and/or copying seemingly obscure and long strings into your settings. We will provide a one-click interface to switch between multiple options near-term. We will also show the currently used DNS on the Portmaster dashboard, so you know at a glance who is resolving your DNS queries.

__Mid-term__  
We want all our users to know where their data flows to. We make no assumptions that all Portmaster users will read this blog post. Instead, we will invest in informing our users about important default settings and updates directly in the Portmaster App mid-term.

__Long-term__  
No matter what DNS provider we choose as a default, there will always be the possibility of a provider abusing this trust. There just is no way for a provider to technically guarantee their promises. The only way around this is to mask our users from the provider. We are evaluating options to provide a free [SPN]({{ site.spn_url }}) tier that will provide free access to the SPN for DNS queries only in the long-term. Again, this is _not_ certain and _if_ it comes, will take at least two or three years to arrive.
