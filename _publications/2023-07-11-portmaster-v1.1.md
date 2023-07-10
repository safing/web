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
In this release we re-imagined the SPN map. The focus was on making more information easier to discover and understand.
When you open the map now, you can see that some countries are darker then others, this allows you to see in what countries there already are SPN nodes available.

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

It is also easy to see what nodes you are using and if they are Safing or Community nodes.  
Safing nodes are triangles while community nodes are circles, and when they are used they are colored.

<img src="{{ site.img_url }}blog/release-1.1/02_nodeOnMap.png" alt="Nodes on Portmaster map" style="margin: 0;">

The information box for each node has also been updated.  
You can now get faster into more details on each node.

<img src="{{ site.img_url }}blog/release-1.1/03_nodeDetails.png" alt="Nodes Details" style="margin: 0;">

There are many more views to find so go around and discover new things!

### Other Changes
Of course there have been many under the hood improvements like, optimized traffic management for SPN or added the option for DNS caching. A complete list can always be found here: [GitHub](https://github.com/safing/portmaster/releases)

### Next Steps
Thank you to all the people writing in feature ideas, we know you are exited about new Portmaster features. I am glad to let you all know that for the next update we are focusing again on Firewall features. I can’t share much at this point but stay tuned, there are some much requested features in the pipeline.


