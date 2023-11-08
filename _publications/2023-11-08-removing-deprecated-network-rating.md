---
# possible values: blog video podcast
category: blog
layout: blog
title: "Removing Deprecated Network Rating"
date: 2023-11-08
author: Daniel
summary: What? Which Network Rating?
custom_thumbnail_name: removing-network-rating
---

The deprecated feature "Network Rating" will be fully removed beginning of December 2023.

This feature has been deprecated in Portmaster v0.8 (over 1,5 years ago) and has been hidden away in Portmaster since. Most Portmaster users surely never heard about it.  
Back then, [we made the switch to simpler toggles](https://safing.io/blog/2022/03/01/portmaster-0.8-simple-toggles/), because most users were confused by the Network Rating multi-toggles.

### In the way of progress

However, we decided to just mock the changes in the UI until we had a replacement or there was a good reason to remove it. Unfortunately, the time has come that the Network Rating system is a hindrance for our next step: [Sharing Portmaster Settings](https://github.com/Portmaster-Community/apps)  
Together with the community, we are beginning to work on recommended settings that can be shared with all Portmaster users. At some point this will also work automatically - what a huge win for people who want to install-and-forget and still get the best privacy by default!

Where is the problem? Well, when settings are exported, their raw values are shown, and for toggles this often is 0, 4, 6 or 7 - because these values are used for the Network Rating system. This makes it really hard and confusing to work with these settings.

### Something better will come

There is a great silver lining on the horizon: We are currently improving the configuration layering of Portmaster and will add conditional layers in the future. This means that you will be able to change any setting based on a condition.  
Want a setting for gaming mode? Want to change which apps can connect when at home or at work? Want to have especially strict setting when traveling? This is the direction we are going. It is going to be a lot simpler and a hell of a lot more powerful than the current Network Rating system.

We don’t know when we will start working on this replacement, but if you can't wait, you can [make your voice heard here](https://opencollective.com/safing-portmaster/projects/portmaster-modes?slug=portmaster-modes).

We hope this change is not a great inconvenience for you and are looking forward to hear what you think about what we have planned.
