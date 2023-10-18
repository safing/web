---
# possible values: blog video podcast
category: blog
layout:   blog
title: "Portmaster v1.5"
date: 2023-10-18
author: Raphael
summary: Data In and Data Out, and Who Is Doing the Sending. 
custom_thumbnail_name: release_1.5
portmaster_plug: true
portmaster_update: true
---

### Bandwidth Data, Now in Even More Places!

Get a better understanding of which connection is eating up your bandwidth and block it. 
We added more graphs displaying the amount of data sent and received by each application and connection.
Check some of them out in the screen-shots below.

Bandwidth in and out for a single connection:

<img src="{{ site.img_url }}blog/release-1.5/PerConnection.png" alt="Bandwidth in and out for a single connection" style="margin: 0;">

Want to see your data live? Download now and [subscribe today](https://safing.io/pricing/).

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

### Per Application

Bandwidth in and out for a whole application:

<img src="{{ site.img_url }}blog/release-1.5/PerAppScreen.png" alt="Bandwidth in and out for a whole application" style="margin: 0;">

Total bandwidth in and out sorted either the most data sent or received:

<img src="{{ site.img_url }}blog/release-1.5/PerAppSideDash.png" alt="Bandwidth in and out summed up for all applications" style="margin: 0;">

### For the Whole System

Combined system bandwidth, located on the Dashboard:

<img src="{{ site.img_url }}blog/release-1.5/PerSystemDashboard.png" alt="Bandwidth in and out for the whole system" style="margin: 0;">


### Other Changes

The complete list of technical changes can always be found in [Portmaster's GitHub Releases](https://github.com/safing/portmaster/releases).
