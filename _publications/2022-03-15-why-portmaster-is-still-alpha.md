---
# possible values: blog video podcast
category: blog
layout:   blog
title: "Why Is Portmaster Still \"Alpha\"?"
date: 2022-03-22
author: raphael
custom_thumbnail_name: why-is-portmaster-still-alpha
portmaster_plug: true
---

Software development is a challenge, especially when you are expected to support an abundance of different systems. The thing is, supporting different systems requires a lot of individual development and testing. And if you only have limited resources, you cannot do everything. That is the reason Portmaster only supports Windows and Linux at the moment.

Initially we intended to support macOS faster, but decided our time is better invested in developing the Portmaster to its best first. And only transferring it to macOS after achieving a certain level of maturity. This decision actually has a lot to do with our overall approach to development.

### Others Develop All Features Bare-Bone and then Iterate

Traditional software development goes like this: the software is envisioned with all of its features, then a minimum viable product (MVP) is created for the whole product and then the iteration starts:

![](/assets/img/blog/why-alpha/messaging-app-staging-diagram.png)

For a text messaging app you would need features like sending messages, pictures, videos, and maybe even a call function. It is not important that it performs perfectly on release. It is important that all features are visible and work in theory. That is the basis from where you start all the iteration and bug fixes.

### Portmaster Must Stabilize Each Feature Individually

Usually, this approach makes the most sense but that is not the case for the Portmaster. If a text message cannot be delivered because of a bug, it is annoying, but it is not the end of the world. However, if the Portmaster has a bug, the entire Internet can break. Portmaster bugs have more severe consequences which is why we prioritize functionality over quantity. We make sure that a module works before adding the next thing.

![](/assets/img/blog/why-alpha/portmaster-staging-diagram.png)

Within Portmaster, each component is developed to a certain level of stability and maturity first. Only then we move onto the next one, and so the cycle repeats.

We develop the Portmaster to fully function with every update which means that each component works on launch – from the Privacy Filter, Secure DNS to the SPN. At the point of release, we are long past the prototyping stage where everything only has to work theoretically and only was tested in "lab" conditions. MVPs are typically released as soon as lab testing is concluded.

### "Alpha" for Portmaster Is More About Missing Features than Instability

MVPs are what we all know as typical "Alpha" software. They are launched with the full spectrum of features, but some of those do not always work and there are bugs everywhere. You cannot expect reliable performance and they can be a pain to use.

We use the term "Alpha" for the Portmaster's current stage of development, but generally when people try it out, they are very surprised by how polished the "Alpha" software is. Of course, this makes us happy, but it also shows that we have some additional explaining to do.

The main reason we call it "Alpha" software is because the Portmaster does not yet have all the features we want it to have. It is like having a four-course meal planned where the soup and main course are ready to be served, but the appetizer and dessert are not cooked yet.

Sure one can already enjoy the completed meals, but as a restaurant wanting to offer a four-course dish, half of the menu is still missing. So even though our Secure DNS on its own can be considered final software, other features are still not stable enough. And as the entire package is not "Beta" yet, we call the Portmaster "Alpha".

Developers do not usually work like this because it takes so much time. Releasing the finished product feature by feature, with each going through "Alpha", "Beta" and "Stable" is most common in business to business products, where reliability of the working system is more important than the overall feature set.

This applies for us as well because the nature of our product does not allow for annoying bugs which can be ignored. If a chat bubble in a messaging app turns purple because of a mistake in the code it does not affect the functionality. When the Portmaster fails, users often lose their Internet connection and are sometimes forced to deactivate or uninstall the Portmaster.

As a result we decided to focus on performance and quality, even if the road to wide adoption is longer.

### Every Portmaster Release Is Tested in Three Stages

Our release process has three steps for an update to go through before it becomes available to everyone.

First, we start with a phase called Staging, which is where we do all the lab testing. This is before any public review, and only our developers have a look at the code.

The next step is getting others involved in the review process. This is where the [Release Channel](https://docs.safing.io/portmaster/settings#core/releaseChannel) comes into play. In this phase early adopters receive the pre-release and then report bugs and test performance. We have two intense weeks of fixing everything that comes up, and only when the release is battle tested do we push the update to all our Portmaster users.

### Drawback: People Judge a Book by its Cover

The biggest drawback is probably that users generally compare products on the level of features first. Naturally, the quality is important as well but when looking for something new, one has to start somewhere, and feature lists are easy to compare.

The approach of releasing a fully feature-stacked but barely working prototype makes it easier for customers to stumble upon the software. They can already use the entire product, even if it is buggy and features sometimes do not work. If we look at the gaming industry, we can see this approach. The industry tends to charge people a lot of money for unfinished software.

We are not saying the Portmaster is perfect. Yes, the Portmaster does have bugs, but we try to fix them as we go. We do not push out feature after feature, until all features on our list are complete and start to clean up our mess afterwards. Of course, we are not completely unique in that regard, but this is fairly unusual in the current consumer facing software landscape.

Because people are not used to this approach, they might see the "Alpha" label, expect the Portmaster is garbage, and do not even try it. If they try, they are surprised to see how polished alpha software can be. We prefer under-promising and overdelivering compared to the opposite. We believe this approach is more customer-friendly and is essential to sustainable growth.

### The Missing Features For "Beta"

In the last year Portmaster has progressed really well, especially within technical stability. The application surely is in the final phase of "Alpha". So what is needed for Portmaster to reach "Beta"? Here's a sneak peek:

- Importing & Exporting Portmaster Settings
- Custom Filter Lists
- Cryptographically Signed Updates
- Full-Device Network Monitor

We will continue to move forward, into "Beta" and beyond. And who knows, we might squeeze in other surprises too. Stay sharp until then ;) Thank you for being part of this journey!
