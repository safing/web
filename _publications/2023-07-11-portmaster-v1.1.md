---
# possible values: blog video podcast
category: blog
layout:   blog
title: "Portmaster&nbsp;1.1"
date: 2023-07-11
author: Raphael
summary: Updated SPN map and lots of optimizations.
custom_thumbnail_name: release_1.1.png
portmaster_plug: true
portmaster_update: true
---

### All new SPN map

In this release we re-imagined the SPN map. It now focuses on making more information easier to discover and understand.
When you open the map now, you can see that some countries are darker than others - this allows you to easily see which countries already have SPN nodes.

<img src="{{ site.img_url }}blog/release-1.1/01_map.png" alt="New Portmaster map" style="margin: 0;">

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

It is also easy to see which nodes you are currently using and if they are operated by Safing or by the community.
Safing nodes are displayed as triangles while community nodes show as circles, and are colored in blue and green respectively, if in use.

<img src="{{ site.img_url }}blog/release-1.1/02_nodeOnMap.png" alt="Nodes on Portmaster map" style="margin: 0;">

The information boxes for nodes now have a lot more information and you can get to all the details a lot faster.

<img src="{{ site.img_url }}blog/release-1.1/03_nodeDetails.png" alt="Nodes Details" style="margin: 0;">

There are many more views to find so go around and discover all the new things in the map!

### Other Changes

Of course there have been many under the hood improvements like optimized traffic management for SPN or extended DNS caching. A complete list of changes can always be found here: [GitHub](https://github.com/safing/portmaster/releases)

### Next Steps

Thank you to all the people telling us their feature ideas - we know you are exited about many new Portmaster features. I am glad to let you all know that for the next update we are focusing again on firewall features. I can’t share much at this point but stay tuned, there are many requested features in the pipeline.
