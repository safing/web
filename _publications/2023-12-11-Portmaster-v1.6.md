---
# possible values: blog video podcast
category: blog
layout:   blog
title: "Portmaster v1.6"
date: 2023-12-11
author: Raphael
summary: Import and Export Settings and App Profiles 
custom_thumbnail_name: release_1.6
portmaster_plug: true
portmaster_update: true
---

### Backup and Restore - Hit the Ground Running

With Portmaster 1.6 you can now import and export all your configurations. So the next time your windows needs a reinstall or you want to try another linux distro you can easily take your Configurations from one Portmaster to the other. 

<img src="{{ site.img_url }}blog/release-1.6/exportProfile.png" alt="Export App Profile" style="margin: 0;">

<div class="flex space-x-2 max-w-max mx-auto mt-10">
  <div class="flex items-center" style="margin-left: -19px;">
    <div class="flex items-center">
      <span class="block">Portmaster:</span>
      <img src="{{ site.img_shields_io_release_url }}" style="filter: invert(1); width: 80px; height: 38px; margin-left: -8px;">
    </div>
  </div>
</div>
<div class="flex space-x-2 max-w-max mx-auto mt-5 mb-20">
  <div class="flex items-center" style="margin-left: -19px;">
    <div class="flex items-center">
      {% include download_button.html unique_id="1" %}
    </div>
  </div>
</div>

### Share App Profiles, Help the Community!

We also created a new GitHub repository where the community can share profiles: [Portmaster-Community/apps](https://github.com/Portmaster-Community/apps)  
Contributions are super welcome, and some profiles are already there. If this gains a lot of traction we will think about how to integrate this into Portmaster directly - then you won't have to go looking for the profile but Portmaster tells you that you can apply a community profile automatically.

So, if you have a super neat configuration for an application please share it with the community!

<img src="{{ site.img_url }}blog/release-1.6/importProfile.png" alt="Import App Profile" style="margin: 0;">

### Manage Multiple App Profiles

With this update you can merge multiple app profiles into one or remove them.

<img src="{{ site.img_url }}blog/release-1.6/multiEdit.png" alt="Menu and Example of Selection" style="margin: 0;">

### Other Changes

The complete list of technical changes can always be found in [Portmaster's GitHub Releases](https://github.com/safing/portmaster/releases).
