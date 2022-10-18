---
# possible values: blog video podcast
category: blog
layout:   blog
title: "What Makes Portmaster A Great Alternative to Simplewall"
date: 2022-04-11
author: safing
custom_thumbnail_name: portmaster-vs-simplewall
portmaster_plug: true
summary: Both the Portmaster and Simplewall are great open source solutions which are easy to setup. The Portmaster has a sleek UI with excellent privacy defaults, protecting you from mass surveillance across the board. Simplewall's defaults on the other hand only focus on removing Microsoft Telemetry, forcing you to build your own defenses against other surveillance from scratch. Therefore we believe most people will prefer Portmaster.
---

## Overview Chart

<div class="card-table darkmode">
  <table>
    <colgroup class="card-table-colgroup">
      <col class="card-table-colgroup-col">
      <col class="card-table-colgroup-col-highlight">
      <col class="card-table-colgroup-col">
    </colgroup>
    <thead class="card-table-header">
      <tr class="card-table-header-row">
        <th class="card-table-header-row-cell"></th>
        <th class="card-table-header-row-cell">Portmaster</th>
        <th class="card-table-header-row-cell">Simplewall</th>
      </tr>
    </thead>
    <tbody class="card-table-body">
      <tr class="card-table-body-row">
        <td class="card-table-body-row-cell-title">Open Source</td>
        <td class="card-table-body-row-cell">
          <a class="card-table-body-row-cell-link" href="{{ site.github_url }}/portmaster">
            <i class="icon-tick text-2xl text-green-500"></i>
          </a>
        </td>
        <td class="card-table-body-row-cell">
          <a class="card-table-body-row-cell-link" href="https://github.com/henrypp/simplewall/">
            <i class="icon-tick text-2xl text-green-500"></i>
          </a>
        </td>
      </tr>
      <tr class="card-table-body-row">
        <td class="card-table-body-row-cell-title">Setup</td>
        <td class="card-table-body-row-cell"><strong>Easy</strong></td>
        <td class="card-table-body-row-cell"><strong>Easy</strong></td>
      </tr>
      <tr class="card-table-body-row">
        <td class="card-table-body-row-cell-title">Protection Type</td>
        <td class="card-table-body-row-cell"><strong>Device</strong></td>
        <td class="card-table-body-row-cell"><strong>Device</strong></td>
      </tr>
      <tr class="card-table-body-row">
        <td class="card-table-body-row-cell-title">System Integration</td>
        <td class="card-table-body-row-cell"><strong>Kernel Extension</strong></td>
        <td class="card-table-body-row-cell"><strong>Windows Filtering Platform</strong></td>
      </tr>
      <tr class="card-table-body-row">
        <td class="card-table-body-row-cell-title">Availabilty</td>
        <td class="card-table-body-row-cell">
          <a class="card-table-body-row-cell-link" href="{{ site.download_url }}">
            <div class="md:space-x-2">
                <i class="icon-windows text-2xl text-safing-blue-500"></i>
                <i class="icon-linux text-2xl"></i>
            </div>
          </a>
        </td>
        <td class="card-table-body-row-cell">
          <a class="card-table-body-row-cell-link" href="https://www.henrypp.org/product/simplewall#download">
            <div class="md:space-x-2">
                <i class="icon-windows text-2xl text-safing-blue-500"></i>
            </div>
          </a>
        </td>
      </tr>
      <tr class="card-table-body-row">
        <td class="card-table-body-row-cell-title">Secure DNS</td>
        <td class="card-table-body-row-cell"><i class="icon-tick text-2xl text-green-500"></i></td>
        <td class="card-table-body-row-cell"><i class="icon-cross text-2xl text-red-500"></i></td>
      </tr>
      <tr class="card-table-body-row">
        <td class="card-table-body-row-cell-title">Individual Apps Settings</td>
        <td class="card-table-body-row-cell"><i class="icon-tick text-2xl text-green-500"></i></td>
        <td class="card-table-body-row-cell"><i class="icon-tick text-2xl text-green-500"></i></td>
      </tr>
      <tr class="card-table-body-row">
        <td class="card-table-body-row-cell-title">Adaptive Threat Model</td>
        <td class="card-table-body-row-cell"><i class="icon-tick text-2xl text-green-500"></i></td>
        <td class="card-table-body-row-cell"><i class="icon-cross text-2xl text-red-500"></i></td>
      </tr>
    </tbody>
  </table>
</div>

## Detailed Comparison

### One Shoe Does Not Fit All - What Is Your Threat Model?

What is the best way to protect diamonds worth a few thousand dollars?

You could leave them in your living room for everyone to see.
But that would be careless.  
You could build an atomic bomb shelter in the middle of the woods.
But that would overdo it.  
A safe in your house is probably a better solution.

Welcome to the world of threat modeling.
Before choosing any tool, especially within privacy, it is important to ask:

- What do I want to protect?
- From whom do I want protection?
- How much time can I invest?

We need different solutions for different needs - there simply is no perfect solution for everyone.
You are the only one who knows the value of your diamonds and who is after them.
So only you can decide which solution is best for you.

Understanding your threat model might be difficult at first, but it will save you a lot of time and help you avoiding wrong decisions.
This comparison blog showcases the strengths and weaknesses of the Portmaster and Simplewall and hopes to assist you in your decision making.

### Portmaster and Simplewall Are Free and Open Source

An auditable and open source code builds a high level of trust in the software. Instead of having to trust a privacy policy of the company, people can check the source code and see what it really does on a technical level.

The beauty with this is, the bigger the community around a software gets, the more secure it becomes, often outperforming proprietary software. Zero-day exploits and long-forgotten vulnerabilities become rarer since someone from the community usually discovers them.

The Portmaster [](https://github.com/safing/portmaster/) and Simplewall [](https://github.com/henrypp/simplewall) are both free and open source, with great communities involved. They are also both transparent about their funding. Simplewall is donation based [](https://www.henrypp.org/donate) while Portmaster has a [clear business model](https://safing.io/business-model/).

### Portmaster and Simplewall Are Easy to Install

The installation process for both Simplewall and Portmaster is straightforward. You simply download an executable which will handle the installation for you. Both provide the option to automatically start on boot to assist you in maintaining your established connection rules.

The Portmaster runs in the background by default to protect your privacy, but when you start Simplewall, it will automatically block all programs and ask you for permission for each one that tries to connect to the Internet.

### By Default Portmaster Gives You More Privacy Than Simplewall

By default, Portmaster protects you from mass surveillance, while Simplewall protects you from Microsoft telemetry.

One of the most effective strategies for blocking unwanted connections is to maintain and keep track of filter lists, which Portmaster does for you. Thousands of ads, trackers and malware domains are already blocked by default. These lists are [gathered from open source intelligence](https://github.com/safing/intel-data/blob/master/lists/sources.yml) and are also used by browser extensions, the Pi-hole, etc.

The Portmaster's settings allow you to easily customize the filter list by selecting categories such as malware, NSFW, ad networks, trackers, etc. These lists are frequently updated, allowing the Portmaster to block a growing number of unwanted domains.

The defaults of Simplewall will disable Internet access for all of your apps and will disable auto-updates for your operating system, which is a debated topic. Simplewall's biggest strength is its blocking of Microsoft telemetry using different [IP addresses](https://github.com/crazy-max/WindowsSpyBlocker/blob/master/data/simplewall/spy/blocklist.xml). However, a weak point with this approach is that whenever Microsoft changes one of their IPs, it will take a while until Simplewall catches up with that change. In order to create a more robust setup, a lot of extra work has to be done.

Also, if you want to block other trackers, there is no simple way to import IPs or domains into Simplewall.

Generally speaking, you can observe that Portmaster and Simplewall view a connection in different ways. Simplewall filters traffic based on individual apps or IP addresses, while the Portmaster filters connections based on domains, IPs or apps.

Since Portmaster can also block by domain, Portmaster can block connections from all the domain's traffic-serving servers. Major CDNs may have hundreds of IPs serving thousands of websites, plus many prominent services like Google and Facebook have hundreds of IPs that are continuously changing. Even self-hosted servers use DDNS to keep their dynamic IPs updated against their domains. So we feel Simplewall's approach to keep track of all those IP addresses is rather cumbersome.

### Simplewall Does Not Give You A Balance Between Usability And Privacy

Whenever an application tries to connect to the Internet, Simplewall will display a notification asking you to allow or deny that app's Internet connection. As you might expect, the first time you use Simplewall will result in a slew of pop-ups requesting permission to connect. Simplewall's understanding of your preferences may lead to fewer pop-ups over time, but it is still unwelcoming. Simplewall allows you to create custom rules and has a tab for apps that use the Universal Windows Platform API, but it does not allow the import of any filter lists, whether of IP addresses or domains, which can be restrictive in a number of ways.

Nonetheless, there are some useful features, such as dragging and dropping an executable to disable its Internet access. Simplewall is effective at its job, but requires a lot of manual configuration to achieve privacy.

### Portmaster Provides a Simple Dashboard for Detecting and Responding to Privacy Threats

The Portmaster's interface is sleek and provides a pleasant user experience. The Portmaster displays connections made by specific apps on your device along with detailed metrics. This will provide you with a general picture of your Internet usage and the connections you are making.

As a result, you will be able to make better decisions to protect your privacy. The Portmaster's dashboard categorizes all connections and displays them per app. This is a useful addition because you can now see which apps are connecting where. If you click on a connection, it also displays additional information such as the IP address, the server's country, the number of concurrent connections, and whether your connection was encrypted.

There are numerous other options available in the Portmaster's configuration, such as identifying and filtering on the basis of domains, IP addresses, local connections, P2P, and protocols (like SSH, RDP, HTTP, FTP, etc.). You can also adjust the settings per-app. So if you wish, you can watch YouTube videos on Chrome but not on Firefox. Overall, Portmaster achieves a good balance between privacy and usability.

Simplewall's dashboard takes a different approach, with different tabs that allow you to manage your filtering process. We cannot say for sure, but its design appears to have been influenced by previous versions of Windows settings.

The tabs "Apps", "Services", and "UWP Apps" (Universal Windows Platform) allow you to view and customize the filters for installed, built-in, or system apps. "UWP Apps" are apps that use the UWP API, and displaying them separately can be useful in some cases. "System" and "user rules" allow you to configure protocols like DNS, DHCP, mDNS, NetBIOS, HTTP, FTP, Telnet, and so on. Simplewall also allows you to customize some Windows-specific settings, such as Windows updates or connections to the Microsoft account.

### Simplewall Is Basically A Graphical User Interface for the Windows Filtering Platform

Simplewall uses the Windows Filtering Platform (WFP) in user-space mode, creating rules for applications essentially exactly like the Windows Firewall does itself. Simplewall is notified of new network activity through events. This means that Simplewall is limited to the data that Windows provides it with. Simplewall can see metadata about the packets, but it cannot see the data in the network packets itself.

Every rule created or activated within Simplewall results in multiple rules added to the WFP.

In the "Connections" tab, Simplewall does not show the data from these events, but only shows currently active connections, making it hard to catch very short lived connections.

### Portmaster Integrates Into the System Using the Kernel Extension

Portmaster on the other hand uses the Windows Filtering Platform (WFP) in kernel-space mode. This means that it has its own [kernel extension with custom logic](https://docs.safing.io/portmaster/architecture/os-integration). This kernel extension sees every network packet that goes in or out of the device. The Portmaster can analyze the packet data to extract information from it, such as domain names and encryption settings of HTTPS connections. As a result it can make a lot of smart decisions.

In order to give you an overview of what is happening on your device, the Portmaster directly feeds the raw network data into its Network monitor, showing you what your network has been up to within the last 10 minutes.

### Portmaster and Simplewall Allow You to Block Incoming Connections

Your personal computer is not a server. There is no need for anyone to connect to your computer unless you know exactly what you are doing and how to do it. In general it is a good security practice to block all incoming connections and then allow pinhole traffic to connect as needed. This is possible both with Portmaster and Simplewall. You can block all incoming connections globally and then allow specific connections to pass through as required. This option can also be applied per app. This is valuable for self-hosted services or while using the distributed Internet.

### Portmaster Safeguards Your DNS queries From ISPs to Enhance Your Privacy

With encrypted DNS, only your DNS provider can keep track of your DNS requests, while Internet Service Providers (ISPs) and eavesdroppers cannot easily determine the websites you visit or the apps you use. You also benefit from increased security by preventing threats such as DNS-based man-in-the-middle (MITM) attacks.

Even if your ISP is unaware of the websites you visit, they can monitor the IP addresses you connect to. If services use dedicated static IPs for their infrastructure, ISPs can still use conditional logic to track your queries. Remember that only your queries are encrypted; any data you exchange with the websites is encrypted only if you see a padlock next to the domain. DNS encryption enhances your privacy, but it cannot protect all of your connections.

Depending on your threat model, we recommend using [Tor](https://www.torproject.org/), a trusted VPN or [the SPN](/spn/) (Portmaster Add-On) to gain additional privacy from your ISP. To enable DoH/DoT system-wide with Simplewall, you may need to install additional apps such as yogaDNS or stubby. The Portmaster on the other hand, saves you time and effort by supporting and enabling secure DNS system-wide by default, allowing you to configure your preferred DNS provider. Furthermore, the Portmaster prevents other apps from using secure DNS to connect to a different DNS provider in order to stop DNS leaks from apps. However, there may be times when you need other apps to connect to a different DNS provider, and the Portmaster can assist you with that as well.

### The Portmaster Adapts to Your Threat Model

Your home network is probably more trustworthy than a WiFi at a coffee shop. With the Portmaster, you can configure settings to be active in one situation but not in the other, like allowing sensitive connections at home but not at the public library.

This enables you to configure settings for different situations: as soon as your situation changes, all you need to do is flip a switch and all settings will immediately adapt to your configured threat model.

Portmaster also has a Simple/Advanced switch that shows or hides settings, allowing you to get even more control over your threat model.

## Conclusion

### We Recommend: Use Portmaster to Protect Your Privacy; Use Simplewall if You Are Only Concerned About Microsoft

Both the Portmaster and Simplewall are great open source solutions which are easy to setup. The Portmaster has a sleek UI with excellent privacy defaults, protecting you from mass surveillance across the board. Simplewall's defaults on the other hand only focus on removing Microsoft Telemetry, forcing you to build your own defenses against other surveillance from scratch. Therefore we believe most people will prefer Portmaster.
