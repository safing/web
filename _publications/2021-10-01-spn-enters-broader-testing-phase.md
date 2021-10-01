---
# possible values: blog video podcast
category: blog
layout:   blog
title: "SPN Enters \"Broader Testing\" Phase"
date: 2021-10-01
author: david
custom_thumbnail_name: spn-enters-broader-testing-phase
portmaster_plug: true
---

## On October 12th, the "Broader Testing" Phase Starts

### What Will It Cost?

Reaching the "Broader Testing" phase is an important milestone for the SPN. Exciting weeks and months are ahead of us.

However, not all aspects and features of the SPN have been thoroughly tested, confirmed or implemented. As such, access to the SPN during **the "Broader Testing" phase is free of charge**, no credit will be charged from your accounts.

### Who Will Get Access?

Everybody who fulfills **both** these requirements is eligible for the "Broader Testing" phase:

1. You have pre-ordered the SPN before September 30th, 2021
2. You have an email attached to your account

#### What Happens If I Pre-Order the SPN After September 30th?

You will not be able to purchase your way into the "Broader Testing" phase retrospectively. However, you will be enqueued in the group right after - where you will be able to activate your SPN subscription as soon as the SPN reaches the "Alpha" phase.

#### Why Do I Need An Email to Participate?

In the "Broader Testing" phase, communication with all SPN testers is critical in order to find bugs and to mature the SPN into "Alpha" and beyond. Having users join the incomplete network without any means of communication would not help the SPN progress in any meaningful way.

We know many of you do not want to add an email address to your account due to privacy and we totally respect that. We thank you so much for your trust and are doing our best to progress the SPN into "Alpha" where everybody will be able to enjoy their SPN subscription.

#### What Will You Contact Me About?

During the "Broader Testing" phase we would reach out once ore twice per month to ask question like:

- What is working in the SPN?
- What is not working?
- Where should we add more servers?
- etc...

Your contributions and answers will shape the stability and future of the SPN. Thanks in advance!

#### Can I Add An Email Retrospectively?

Yes. If you pre-ordered the SPN before September 30th, 2021 you can add an email to your account retrospectively and still get access to the "Broader Testing" phase.

### Thanks to Everyone Who Is Part of the Journey

We are super glad the SPN finally achieved this milestone and are hard at work pushing it forward into "Alpha" and beyond. Thank you for your support, your patience and your trust.

## SPN "Broader Testing" Goals

As we are heavily iterating and improving the SPN, all goals, issues and next steps will change over the next weeks. [Visit the SPN Status Page in our docs](https://docs.safing.io/spn/broader-testing/status) for an up-to-date version.

### Snapshot as of October 1st

#### 1. Normally Works Well
- Portmaster Client successfully connects to the SPN
- Normal browsing of websites

#### 2. Under Investigation

##### 2.1 Linux Works Better Than Windows

We know that Windows is less stable than Linux. Reasons for this likely come from the Windows Kernel Extension. Investigations have already started and upgrades are scheduled.

##### 2.2 Other

- Big file downloads
- Video streaming
- UDP based applications

#### 3. Under Construction

- Connecting to the SPN via Portmaster is currently very basic, new views _showing_ what the SPN is currently doing are being designed and developed
- we will add instructions for how to test that the SPN is working on your device to the docs before October 12th

#### 4. Known Issues

- The SPN re-uses connections to nodes. Due to missing route evaluation during routing calculation we currently cannot guarantee the minimum three hops.
- Speeds might vary greatly as we do not know the resource profile of the SPN yet.
- The SPN seems to be failing after sleep/suspend. Investigating. Disable/Enable SPN as a workaround.
- We're leaking open file descriptors somewhere, which also affects Portmaster after some time. Restart Portmaster as a workaround.
- For stability, the client is artificially more sequential in order to provide more stability. This might lead to lag when lots of connections are initiated at the same time. Eg. when browsing to "big" websites.

### How To Report Bugs

Bugs can be reported on the [SPN repository on GitHub](https://github.com/safing/spn/issues)
