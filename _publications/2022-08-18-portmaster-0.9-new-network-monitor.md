---
# possible values: blog video podcast
category: blog
layout:   blog
title: "Portmaster 0.9 Available Now: Graphs & Full-Device Monitor"
date: 2022-08-18
author: daniel
custom_thumbnail_name: portmaster-0.9-new-graphs-and-monitor
portmaster_plug: true
portmaster_update: true
---

### You Can Now Search & Monitor Your Full Device - with Beautiful Graphs

Many of you have been asking for this, and finally it is here: The new network monitor with elaborate search, powerful filters and grouping support - with beautiful graphs everywhere! The graphs show the amount of allowed and blocked connections over time.

![image displaying the v0.9 Portmaster user interface - network activity per app](/assets/img/blog/release-0.9/1_1_network_activity_per_app.png)

<style>
/*
  Import before we need it in order to not first render it wrong.
  TODO: Remove when this has been added to the Safing Tailwind lib.
*/
.markdown-container table img {
    border-radius: 0.375rem;
    box-shadow: 0 0 5px 0 rgb(0 0 0 / 0%), 0 0 90px 0 rgb(59 93 199 / 10%);
    display: block;
    height: auto;
    max-width: 100%;
}
</style>

![image displaying the v0.9 Portmaster user interface - network activity per app blocked](/assets/img/blog/release-0.9/1_2_network_activity_per_app_blocked.png)  | ![image displaying the v0.9 Portmaster user interface - network activity search](/assets/img/blog/release-0.9/1_3_network_activity_search.png)
![image displaying the v0.9 Portmaster user interface - network activity per country](/assets/img/blog/release-0.9/1_4_network_activity_per_country.png) | ![image displaying the v0.9 Portmaster user interface - network activity in app](/assets/img/blog/release-0.9/1_5_network_activity_in_app.png)

This update is HUGE - and several months of development went into this feature. When viewing a single application - as previously possible - Portmaster only had to handle hundreds of connections. But with the new, full-device monitor, Portmaster has to handle thousands of connections simultaneously. Because of this new technical challenge we had to restructure a lot of Portmaster's underlying tech stack.

Exciting news, since Portmaster now can handle thousands of connections at once, a lot of the groundwork for a longer history has been completed. In the future, you will be able to save connections not only for 10 minutes, but for days and weeks.

### Portmaster Adds Support for DNS-over-HTTPS

We have supported DNS-over-TLS (DoT) from the beginning. Due to popular request we now additionally support DNS-over-HTTPS (DoH). Just paste your favorite provider into the setting and go! If you do not want to depend on your ISP for resolving the IP of your DoH resolver, you can also add the IP manually for even better security.

<div class="alert-primary">
  <i class="icon-info text-lg mr-4"></i>  
  We still think that DoT is superior due to the fact that it is a lot less overhead that can (and did in the past!) leak identifier data about you.
</div>


![image displaying the v0.9 Portmaster user interface - setting doh](/assets/img/blog/release-0.9/2_setting_doh.png)

### You Can Now Import Custom Filter Lists

An even more requested feature has been the ability to add custom filter lists in addition to the defaults. You can now specify a file that Portmaster automatically imports and monitors for changes. Compile you own list of baddies and block them!

![image displaying the v0.9 Portmaster user interface - custom filter list setting](/assets/img/blog/release-0.9/3_1_custom_filter_list_setting.png)
![image displaying the v0.9 Portmaster user interface - custom filter list imported](/assets/img/blog/release-0.9/3_2_custom_filter_list_imported.png)

### New Place for Version, Tools, and Restarting

Showing the "interesting" bar at the top of the settings page has always been a quick-fix. We finally got to replacing this with a much better solution. You can now find all this information and buttons on the bottom of the navigation bar to the left.

![image displaying the v0.9 Portmaster user interface - tools](/assets/img/blog/release-0.9/4_1_tools.png)
![image displaying the v0.9 Portmaster user interface - shutdown](/assets/img/blog/release-0.9/4_2_shutdown.png)

### An Improved GeoIP Database

We have also been hard at work below the surface. Since MaxMind has switched its free GeoIP database to a more restrictive license, we started building our own GeoIP database by combining data from different sources. This improves many aspects of Portmaster and SPN - for example, we now have a more accurate map of the current network.

For techy people out there, we will likely write an in-depth blog post about how we are building the GeoIP database. Stay tuned!

![image displaying the v0.9 Portmaster user interface - spn geoip](/assets/img/blog/release-0.9/5_spn_geoip.png)

### Explaining the SPN

Another thing we have been continually improving is how we communicate what the SPN is and what it brings to the table. I think we are getting the hang of it, step by step. A recent step was a [revamped SPN page](/spn/) - which you can check out.

### Thank You!

To all our users and customers: Thanks for using Portmaster and the SPN, thanks for reporting bugs and for telling your friends.

If you like these newest updates, you would do us a big favor by sharing this blog post far and wide. Thanks again - all of this is only possible through your support.
