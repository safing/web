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

## On October 12th, the SPN reached the "Broader Testing"

### Overview Chart

<div class="table">
  <table>
    <colgroup>
      <col>
      <col class="highlight">
      <col>
    </colgroup>
    <thead>
      <tr>
        <th></th>
        <th>Portmaster</th>
        <th>Pi-hole</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Open Source</td>
        <td class="link">
          <a href="{{ site.github_url }}/portmaster" class="exclude-external-icon">
            <div>
              <img src="{{ site.img_url }}icons/tick.svg">
            </div>
            <img src="{{ site.img_url }}icons/external-black.svg">
          </a>
        </td>
        <td class="link">
          <a href="https://github.com/pi-hole/pi-hole/" class="exclude-external-icon">
            <div>
              <img src="{{ site.img_url }}icons/tick.svg">
            </div>
            <img src="{{ site.img_url }}icons/external-black.svg">
          </a>
        </td>
      </tr>
      <tr>
        <td>Setup</td>
        <td><strong>Easy</strong></td>
        <td><strong>Advanced</strong></td>
      </tr>
      <tr>
        <td>Protection Type</td>
        <td><strong>Device</strong></td>
        <td><strong>Network</strong></td>
      </tr>
      <tr>
        <td>Availabilty</td>
        <td class="link">
          <a href="{{ site.portmaster_url }}#downloads">
            <div>
              <img src="{{ site.img_url }}icons/windows.svg">
              <img src="{{ site.img_url }}icons/linux.svg">
            </div>
            <img src="{{ site.img_url }}icons/external-black.svg">
          </a>
        </td>
        <td class="link">
          <a href="https://docs.pi-hole.net/main/prerequisites/#supported-operating-systems" class="exclude-external-icon">
            <div>
              <img src="{{ site.img_url }}icons/linux.svg">
              <img src="{{ site.img_url }}icons/docker.svg">
            </div>
            <img src="{{ site.img_url }}icons/external-black.svg">
          </a>
        </td>
      </tr>
      <tr>
        <td>Secure (DNS DoH/DoT)</td>
        <td><img src="{{ site.img_url }}icons/tick.svg"></td>
        <td><img src="{{ site.img_url }}icons/tick.svg"></td>
      </tr>
      <tr>
        <td>Individual Apps Settings</td>
        <td><img src="{{ site.img_url }}icons/tick.svg"></td>
        <td><img src="{{ site.img_url }}icons/cross.svg"></td>
      </tr>
      <tr>
        <td>Adaptive Threat Model</td>
        <td><img src="{{ site.img_url }}icons/tick.svg"></td>
        <td><img src="{{ site.img_url }}icons/cross.svg"></td>
      </tr>
    </tbody>
  </table>
</div>

### What Does It Cost?

Reaching the "Broader Testing" phase is an important milestone for the SPN. Exciting weeks and months are ahead of us.

However, not all aspects and features of the SPN have been thoroughly tested, confirmed or implemented. As such, access to the SPN during **the "Broader Testing" phase is free of charge**, no credit will be charged from your accounts.

### Who Gets Access?

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

## SPN "Broader Testing" Status and Goals

As we are heavily iterating and improving the SPN, all goals, issues and next steps will change over the next weeks. [Visit the SPN Status Page in our docs](https://docs.safing.io/spn/broader-testing/status) for an up-to-date version.

### Snapshot as of October 11th

#### 0.1 How Can I Activate the SPN "Broader Testing" Phase?

- [read the blog post](https://safing.io/blog/2021/10/01/spn-enters-broader-testing-phase/) to see if you are eligible
- [log in](https://account.safing.io) to your Safing account to receive your access code
- in the Portmaster App
  - switch to the "Beta" [Release Channel](https://docs.safing.io/portmaster/settings#core/releaseChannel)
    - Restart the Portmaster and Reload the UI
    - You should now see a yellow "BETA" in the global settings
  - [Enable](https://docs.safing.io/portmaster/settings#spn/enable) the SPN
  - enter your [Special Access Code](https://docs.safing.io/portmaster/settings#spn/specialAccessCode)
  - configure the [Use SPN](https://docs.safing.io/portmaster/settings#spn/useSPN) setting globally and for different apps, depending on your needs

#### 0.2 How Can I Test that the SPN Is Running?

- Go to <https://duckduckgo.com/?q=what+is+my+ip> to see your current IP address before activating the SPN
- Enable the SPN
- [Reload DuckDuckGo](https://duckduckgo.com/?q=what+is+my+ip) and check if the IP address has changed
- Bonus Step: Visit some of the "what is my IP" websites, your IP address should change frequently (based on the destination server location)

#### 1. Normally Works Well - Report if Broken [](https://github.com/safing/spn/issues)

- Portmaster Client successfully connects to the SPN
- Normal browsing of websites
- Big file downloads
- Video streaming
- Low Bandwidth: up to 5MBit/s

#### 2. Under Investigation - Please Test and Report [](https://github.com/safing/spn/issues)

- Video Conferencing
- UDP based applications
- Medium Bandwidth: targeting 30MBit/s as next step

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
