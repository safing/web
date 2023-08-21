---
# possible values: blog video podcast
category: blog
layout:   blog
title: "Portmaster v1.4"
date: 2023-08-21
author: Raphael
summary: Mirror, mirror on the wall, unveil trends, both big and small. 
custom_thumbnail_name: release_1.4
portmaster_plug: true
portmaster_update: true
---

### The Dashboard is the new front door to Portmaster

From the start we knew that a control center type view will be important in the future. The network monitor is super exciting but when the best tutorials for Portmaster out there tell new users to basically ignore it for the beginning, we know, that this is not the best start into Portmaster.

The goal with the dashboard is to bring a quick overview to help new users understand what is going on in Portmaster and veteran users what is happening on their machines. I feel like this update is a great start into this direction.


<img src="{{ site.img_url }}blog/release-1.4/dashboard.png" alt="Portmaster Dashboard" style="margin: 0;">

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

### Feature Overview and Toggles

Portmaster is packed with different features, and more are to come! An overview of which features are active was needed. For now it's mostly the Network History and SPN toggle, but it will come in handy in the future. 

### Beta Features on the Dashboard

We included some beta features into this stable release. Beta because there can still be bugs, we included them anyway because those features can't break anything. We wanted to give everyone a more complete vision of where we see the dashboard going. Feedback is always welcome! 


### Other Changes

The complete list of technical changes can always be found in [Portmaster's GitHub Releases](https://github.com/safing/portmaster/releases).
