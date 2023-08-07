---
# possible values: blog video podcast
category: blog
layout:   blog
title: "Portmaster v1.2 & v1.3"
date: 2023-08-08
author: Daniel
summary: The most exciting updates since v1.0
custom_thumbnail_name: release_1.3
portmaster_plug: true
portmaster_update: true
---

### Network History has Arrived!

Many of you have requested this for ages and I am glad to announce that we are finally delivering. Record the network activity of any app for as long as your hardware can manage! 

The Network History is tied into our Portmaster Plus and Pro packages. 

<img src="{{ site.img_url }}blog/release-1.3/network-monitor-top.png" alt="Network Monitor with history running since August 1st" style="margin: 0;">

<div class="flex space-x-2 max-w-max mx-auto" style="margin-top: 10px;">
  <div class="flex items-center" style="margin-left: -19px;">
    <div class="flex items-center">
      <span class="block">Portmaster:</span>
      <img src="{{ site.img_shields_io_release_url }}" style="filter: invert(1); width: 80px; height: 38px; margin-left: -8px;">
    </div>
  </div>
</div>
<div class="flex space-x-2 max-w-max mx-auto" style="margin-top: 10px; margin-bottom: 4rem;">
  <div class="flex items-center" style="margin-left: -19px;">
    <div class="flex items-center">
      {% include download_button.html unique_id="1" %}
    </div>
  </div>
</div>

### Better Process Detection

Portmaster used to regularly have "Other Connections". These were connections Portmaster was not able to attribute to a process. We improved the system integration on both Linux (via eBPF) and Windows (via our kernel driver) in order to get higher quality data about the connections. This means that you normally should not see any connections in the "Other Connections" app anymore. In our tests, every single connection was attributed correctly!

This is not to be confused with the "Network Noise", where connections from other devices on the network are pooled, but your device is not listening to them.

### Portmaster is easy privacy and pice of mind

Wit Portmaster we set out to create an application that makes privacy as easy as installing an application. Unfortunately, Privacy is quite the battle at the moment, and it gets reduced on multiple angles. Portmaster is built to be a good start in your privacy journey. With Portmaster Plus we added the next step. With the free version you gain great privacy out of the box, and the upgrade helps you understand your device better. 

### Portmaster Plus: Investigate Everything

The motto for the Plus upgrade is "investigate everything". Because Portmaster sits inside the network chain it can give you super interesting information about what is going on on your device and in your network. While Portmaster Free is focused on privacy and blocking unwanted connections, Portmaster Plus gives you the insights and information about your device and network you didn't have before. Recording the network activity of any app is only the start and you can expect more features designed to increase your investigative powers in the coming months.

### Portmaster Pro: Protection Everywhere

We strongly believe that VPNs are an absolutely outdated technology to try to get more privacy online. The whole protocol has been designed for security, which it delivers beautifully, but privacy is and never has been the goal of the protocol. A somewhat fitting anecdote could be, using a VPN for Privacy is like using a knife as a hammer: in the end the knife is super dull and can't do its job very well, and during the process you need to be super careful not to hurt yourself or others. There is the right place for the right tool, and SPN is built for the ground up for privacy. Which in turn also means that it is not super well suited for some things VPNs are good in - because of their different background. This is sort of the point, it is a different tool for a different thing. For the sake of privacy we had to make tradeoffs, SPN is slower than a VPN and has fewer and bigger servers to mix the traffic more.  

### Focus on Portmaster

As you can tell by the recent changes we've made, we are shifting our focus to Portmaster for a while. Read all about this in our blog post [Portmaster Free \| Plus \| Pro = ?](/blog/2023/08/08/new-plans/).

### Other Changes

The complete list of technical changes can always be found in [Portmaster's GitHub Relases](https://github.com/safing/portmaster/releases).
