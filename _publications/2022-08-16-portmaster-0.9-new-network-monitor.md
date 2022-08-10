---
# possible values: blog video podcast
category: blog
layout:   blog
title: "Portmaster v0.9: New Network Monitor"
date: 2022-08-16
author: daniel
custom_thumbnail_name: placeholder-announcement
portmaster_plug: true
portmaster_update: true
---

### New Network Monitor with Graphs

Many of you have been waiting for this, and finally it is here: The new network monitor with elaborate search, filter and grouping support - with beautiful graphs everywhere!

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


<!--
![image displaying the v0.9 Portmaster user interface - network activity per app blocked](/assets/img/blog/release-0.9/1_2_network_activity_per_app_blocked.png)
![image displaying the v0.9 Portmaster user interface - network activity search](/assets/img/blog/release-0.9/1_3_network_activity_search.png)
![image displaying the v0.9 Portmaster user interface - network activity per country](/assets/img/blog/release-0.9/1_4_network_activity_per_country.png)
![image displaying the v0.9 Portmaster user interface - network activity in app](/assets/img/blog/release-0.9/1_5_network_activity_in_app.png)
-->

### Support for DNS-over-HTTPS

We have support DNS-over-TLS (DoT) from the beginning. Due to popular request we now additioanlly support DNS-over-HTTPS (DoH). Just paste your favourite provider into the setting and go! If you don't want to depend on your ISP for resolving the IP of your DoH resolver, you can also add the IP manually for even better security.

Note: We still think that DoT is superior due to the fact that it is a lot less overhead that can (and did in the past!) leak identifier data about you.

![image displaying the v0.9 Portmaster user interface - setting doh](/assets/img/blog/release-0.9/2_setting_doh.png)

### Custom Filter Lists

An even more requested feature has been to ability to add custom filter lists in addition to the defaults. You can now specify a file that Portmaster import and monitor for changes. Compile you own list of baddies and block them! 

![image displaying the v0.9 Portmaster user interface - custom filter list setting](/assets/img/blog/release-0.9/3_1_custom_filter_list_setting.png)
![image displaying the v0.9 Portmaster user interface - custom filter list imported](/assets/img/blog/release-0.9/3_2_custom_filter_list_imported.png)

### New Place for Version, Tools, and Restarting

The "interesting" bar at the top of the settings page has always been a quick-fix that we finally replaced with a much better solution.
You can now find all this information and buttons on the bottom of the navigation bar to the left. 

![image displaying the v0.9 Portmaster user interface - tools](/assets/img/blog/release-0.9/4_1_tools.png)
![image displaying the v0.9 Portmaster user interface - shutdown](/assets/img/blog/release-0.9/4_2_shutdown.png)

### Improved GeoIP Database

We've also been hard at work below the surface. Since MaxMind has switched its free GeoIP database to a more restrictive license, we started building our own GeoIP database by combining data from different sources. This improves many aspects of Portmaster and SPN - for example, we now have a more accurate map of the current network. 

For techy people out there, we are in the process of writing a blog post about how we are building the GeoIP database. Stay tuned!

![image displaying the v0.9 Portmaster user interface - spn geoip](/assets/img/blog/release-0.9/5_spn_geoip.png)

### Explaining the SPN

Another thing we've been continually improving is how we communicate the SPN in a way that everyone understands. I think we are getting the hang of it:

![image displaying the v0.9 Portmaster user interface - spn page](/assets/img/blog/release-0.9/6_spn_page.png)

### Thank You!

To all our users and customers: Thanks for using Portmaster and the SPN, thanks for reporting bugs and for telling your friends. All of this is only possible through your support.

If you are using Portmaster and SPN and experience problems, we'd love to hear abot them!
