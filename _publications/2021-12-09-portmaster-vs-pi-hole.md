---
# possible values: blog video podcast
category: blog
layout:   blog
title: "What Makes Portmaster A Great Alternative to Pi-hole"
date: 2021-12-09
author: safing
custom_thumbnail_name: portmaster-pi-hole
portmaster_plug: true
summary: Both Portmaster and Pi-hole are free and open source privacy tools. The Portmaster has an easy set up with great privacy defaults, giving you a simple way to fully control your device, wherever you go. The Pi-hole on the other hand needs some initial setup; but for the skilled it is an amazing tool to control and manage your home network.
---

## Overview Chart

<div class="card-table">
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
          <th class="card-table-header-row-cell">Pi-hole</th>
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
                <a class="card-table-body-row-cell-link" href="https://github.com/pi-hole/pi-hole/">
                    <i class="icon-tick text-2xl text-green-500"></i>
                </a>
            </td>
        </tr>
        <tr class="card-table-body-row">
          <td class="card-table-body-row-cell-title">Setup</td>
          <td class="card-table-body-row-cell">
            Easy
          </td>
          <td class="card-table-body-row-cell">
            Advanced
          </td>
        </tr>
        <tr class="card-table-body-row">
          <td class="card-table-body-row-cell-title">Protection Type</td>
          <td class="card-table-body-row-cell">
            Device
          </td>
          <td class="card-table-body-row-cell">
            Network
          </td>
        </tr>
        <tr class="card-table-body-row">
            <td class="card-table-body-row-cell-title">Availabilty</td>
            <td class="card-table-body-row-cell">
                <a class="card-table-body-row-cell-link" href="{{ site.portmaster_url }}#downloads">
                    <div class="md:space-x-2">
                        <i class="icon-windows text-2xl text-safing-blue-500"></i>
                        <i class="icon-linux text-2xl"></i>
                    </div>
                </a>
            </td>
            <td class="card-table-body-row-cell">
            <a class="card-table-body-row-cell-link" href="https://docs.pi-hole.net/main/prerequisites/#supported-operating-systems">
                <div class="md:space-x-2">
                    <i class="icon-linux text-2xl"></i>
                    <i class="icon-docker text-3xl text-safing-blue-500"></i>
                </div>
            </a>
            </td>
        </tr>
        <tr class="card-table-body-row">
            <td class="card-table-body-row-cell-title">Secure DNS</td>
            <td class="card-table-body-row-cell">
                <i class="icon-tick text-2xl text-green-500"></i>
            </td>
            <td class="card-table-body-row-cell">
                <i class="icon-tick text-2xl text-green-500"></i>
            </td>
        </tr>
        <tr class="card-table-body-row">
            <td class="card-table-body-row-cell-title">Individual Apps Settings</td>
            <td class="card-table-body-row-cell">
                <i class="icon-tick text-2xl text-green-500"></i>
            </td>
            <td class="card-table-body-row-cell">
                <i class="icon-cross text-2xl text-red-500"></i>
            </td>
        </tr>
        <tr class="card-table-body-row">
            <td class="card-table-body-row-cell-title">Adaptive Threat Model</td>
            <td class="card-table-body-row-cell">
                <i class="icon-tick text-2xl text-green-500"></i>
            </td>
            <td class="card-table-body-row-cell">
                <i class="icon-cross text-2xl text-red-500"></i>
            </td>
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
Before choosing any tool, especially within privacy, it is important to ask
- What do I want to protect?
- From whom do I want protection?
- How much time can I invest?

We need different solutions for different needs - there simply is no perfect solution for everyone.
You are the only one who knows the value of your diamonds and who is after them.
So only you can decide which solution is best for you.

Understanding your threat model might be difficult at first, but it will save you a lot of time and help you avoiding wrong decisions.
This comparison blog showcases the strengths and weaknesses of the Portmaster and the Pi-hole and hopes to assist you in your decision making.

### Portmaster and Pi-hole Are Free and Open Source

An auditable and open source code builds a high level of trust in the software.
Instead of having to trust a privacy policy of the company, people can check the source code and see what it really does on a technical level.

The beauty with this is, the bigger the community around a software gets, the more secure it becomes, often outperforming proprietary software.
Zero-day exploits and long-forgotten vulnerabilities become rarer since someone from the community usually discovers them.

The Portmaster[](https://github.com/safing/portmaster/) and Pi-hole[](https://github.com/pi-hole/pi-hole/) are both free and open source, with great communities involved. They are also both transparent about their funding which gives additional insight into their organization and motives. ([Portmaster](https://safing.io/ownership/) / [Pi-hole](https://discourse.pi-hole.net/t/results-of-the-pi-hole-user-survey/8958))

### Portmaster Is Beginner Friendly

Protecting your privacy should not require a high level of technical expertise,
which is why the Portmaster is designed to be simple for beginners.
It is easy to setup and the default settings improve your privacy right out of the box.

However, experts can spend hours upon hours to configure every aspect to their needs, as mentioned in later passages.

### Portmaster Protects Your Device, Pi-hole Your Network

The Pi-hole's scope of protection is very different from the Portmaster's.
Since the Portmaster is an on-device network blocker, it will stop unwanted connections from leaving your computer even before the DNS.

The Pi-hole on the other hand will act as a DNS server, allowing many devices to connect to it and filtering traffic for all those devices.
The Pi-hole can be used on the client-side with some additional setup, but because of its technical architecture, it is best used as a network service.

In comparison to the Portmaster, Pi-hole often involves the usage of extra hardware, such as a Raspberry Pi or a Virtual Private Server (VPS) as the server.
This could result in additional costs and maintenance.

More setup and technical knowledge is required to access it outside the local network and keep the server secure. In the end, it may well be worth the extra efforts if your threat model demands it.

The documentation for the [Pi-hole](https://docs.pi-hole.net/) and [Portmaster](https://docs.safing.io/portmaster/architecture/overview) will provide more details if you wish to dig into the technical details.

### Portmaster Allows You to Configure Settings System-Wide and Per-App

The Portmaster has global settings which define behavior for the whole device.
But sometimes, an application may break due to a blocked connection.
Allowing that connection system-wide might hurt your privacy.
With the Portmaster, you can easily solve this problem by creating an exception for a specific application, leaving other apps unaffected.

You can even block risky connection types system-wide, such as p2p or incoming, and then create exceptions for trusted apps.

### Pi-hole Can Manage All Your Devices

Many aspects of the Pi-hole are comparable to those of the Portmaster, such as content blocking, filter lists, query logs, etc.
However, since the Pi-hole is a server it also has advantages over the Portmaster.
It can be used to secure your whole local network, as well as any other device that can connect to the Pi-hole over the Internet.

Smart TVs, smart devices and printers in your network may send telemetry data or display advertisements.
In such situations a Pi-hole is extremely useful, as many hardware and software limitations prevent the installation of client-side blockers like the Portmaster.
The Pi-hole will prevent advertisements, trackers, and other intrusions at the network DNS level.

Any changes you make to the Pi-hole settings will be applied to all devices that use it to route their connections.
It is not possible to change and save settings for a device or app individually.

Additional capabilities of the Pi-hole includes [Gravity script](https://docs.pi-hole.net/core/pihole-command/#gravity), [the Pi-hole command](https://docs.pi-hole.net/core/pihole-command/), [Telnet API](https://docs.pi-hole.net/ftldns/telnet-api/), [customized logs](https://docs.pi-hole.net/ftldns/privacylevels/) and [DHCP management](https://discourse.pi-hole.net/t/how-do-i-use-pi-holes-built-in-dhcp-server-and-why-would-i-want-to/3026/1), all of which will help you better manage your devices.

### Portmaster and Pi-hole Both Provide a Simple Dashboard for Detecting and Responding to Privacy Threats

The interfaces of Portmaster and Pi-hole are both sleek and provide a pleasant user experience.
Because of the significant technical variations between them, they have quite the distinct tweaking possibilities:
The Pi-hole can display metrics from all devices on the network and can prevent devices from accessing the Internet at the network DNS level.

The Portmaster enables you to see connections made from specific apps on your device.
This allows you to fully block Internet access for individual applications or block specific, unwanted connections.
For even stricter settings, you can block Internet access on the device level and then create individual exceptions for applications.

### Both Safeguard Your DNS queries From ISPs to Enhance Your Privacy

The Pi-hole needs some setup to encrypt DNS queries, while the Portmaster does this by default.
With encrypted DNS, your DNS provider is the only one who can keep track of your DNS requests while Internet Service Providers (ISPs) and eavesdroppers can no longer easily determine the websites you browse or the apps you use.
You also enjoy enhanced security by preventing threats like DNS based man-in-the-middle (MITM) attacks.

Even if your ISP is uninformed of the websites you visit, they can monitor the IP addresses you connect to.
Since many services employ dedicated static IPs for their infrastructure, ISPs can still track your queries using conditional logic.
So even though DNS encryption improves your privacy, it cannot safeguard all your connections.

We recommend using [Tor](https://www.torproject.org/), a trusted VPN or [the SPN](/spn/), which will provide additional privacy from your ISP.

### The Portmaster Adapts to Your Threat Model

Different places have different threats. Your home network is more trustworthy than a WiFi at a coffee shop.

With the Portmaster, you can configure settings to be active in one situation but not in the other, like allowing sensitive connections at home but not at the public library.

This enables you to configure settings for different situations:
as soon as your situation changes, all you need to do is flip a switch and all settings will immediately adapt to your configured threat model.

Portmaster also has a Simple/Advanced switch that shows or hides settings, allowing you to get even more control over your threat model.

### Both Solutions Can Be Used Alongside an Existing VPN Connection

The Portmaster and the Pi-hole support running alongside a VPN. Some VPNs require additional setup, so it is always good if you check the compatibility of your VPN in the latest docs of the [Portmaster](https://docs.safing.io/portmaster/install/status/vpn-compatibility) and the [Pi-hole](https://docs.pi-hole.net/guides/vpn/openvpn/overview/).

### Portmaster Makes It Easy to Auto-Block Domains By Category

The Portmaster allows you to easily block ads, trackers, malware and NSFW sites via integrated domain filter lists.
You can manage these lists for your full device or configure them for individual applications.

These lists are created and [maintained by privacy and security communities](https://github.com/safing/intel-data) and are also used by browser extensions, the Pi-hole, etc.

Additionally, you can block all subdomains of entries in selected filter lists to further tighten your privacy.

## Conclusion

### We Recommend: Start With Portmaster; Use the Pi-hole When Managing Your Home Network

Both the Portmaster and Pi-hole are open source solutions which greatly improve your privacy. The Portmaster is easily set up and has great privacy defaults. This gives you a simple way to fully control your device, wherever you go. The Pi-hole on the other hand needs some initial setup; but for the skilled it is a great tool for controlling and managing your home network.
