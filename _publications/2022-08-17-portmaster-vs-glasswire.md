---
# possible values: blog video podcast
category: blog
layout:   blog
title: "What Makes Portmaster A Great Alternative to GlassWire"
date: 2022-08-17
author: safing
custom_thumbnail_name: portmaster-vs-glasswire
portmaster_plug: true
summary: Both Portmaster and GlassWire are powerful applications, are well designed and are easy to set up. Portmaster has excellent privacy defaults, which protect you from mass surveillance across the board. With GlassWire you have to build your own defenses from scratch. Another weak point of GlassWire is that it is proprietary. Portmaster on the other hand is free and open source, which is why we believe most people will trust Portmaster more.
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
        <th class="card-table-header-row-cell">GlassWire</th>
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
          <i class="icon-cross text-2xl text-red-500"></i>
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
          <a class="card-table-body-row-cell-link" href="https://www.glasswire.com/download/">
            <div class="md:space-x-2">
                <i class="icon-windows text-2xl text-safing-blue-500"></i>
                <i class="icon-android text-2xl"></i>
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
        <td class="card-table-body-row-cell"><i class="icon-tick text-2xl text-green-500"></i></td>
      </tr>
    </tbody>
  </table>
</div>

## Detailed Comparison

### One Shoe Does Not Fit All — What Is Your Threat Model?

What is the best way to protect diamonds worth a few thousand dollars?

You could leave them in your living room for everyone to see. But that would be careless.
You could build an atomic bomb shelter in the middle of the woods. But that would overdo it.
A safe in your house is probably a better solution.

Welcome to the world of threat modeling. Before choosing any tool, especially within privacy, it is important to ask

- What do I want to protect?
- From whom do I want protection?
- How much time can I invest?

We need different solutions for different needs - there simply is no perfect solution for everyone. You are the only one who knows the value of your diamonds and who is after them. So, only you can decide which solution is best for you.

Understanding your threat model might be difficult at first, but it will save you a lot of time and help you in avoiding wrong decisions. This comparison blog showcases the strengths and weaknesses of Portmaster and GlassWire and hopes to assist you in your decision-making.

### Portmaster is Free and Open Source Software

Open source software allows anyone to look at the code of the software that they are running. An open source code is auditable and thus builds a high level of trust in the software instead of the privacy policy of the company. Anyone can check out the source code, review it or even build the software themselves directly from the source code. It allows you to see what the software is really doing on a technical level.

An open source approach allows people to contribute to the software and make the software better and more secure, often outperforming proprietary software. Zero-day exploits and vulnerabilities become rarer, since someone from the community usually discovers them.

Portmaster is free and open source software with a great community involved. We are also transparent about our funding and business model, which gives you additional insight into our organization and motives.

### GlassWire is Proprietary Software

Proprietary software does not allow people to look at the code of the software that they are running. So, reviewing and inspecting their project is either impossible or difficult. It also implies that vulnerabilities and security bugs are only patched by a small group of people. They may be good at it, but having thousands of people look at the code is far more efficient.

As you cannot access the code or build the software yourself, you cannot verify the software's claims. The only way to verify the software's claims is to use workarounds like running an external analysis tools. In the case of GlassWire, you would need to run an independent analysis software to see what GlassWire might be up to. And there is no way to truly find out how it integrates into the system. Anyway, in our opinion, it is difficult to trust a proprietary software that monitors all your device's connections.

### Portmaster and GlassWire Are Easy to Install and Use

GlassWire is available for Windows and Android, while Portmaster is available for Windows and Linux. The installation process is simple for both, and both start working immediately after installation and a restart. They also enable autostart upon boot by default. GlassWire also has a lite version for slower computers, while Portmaster has a single version for each operating system. Ultimately, both are quick and simple to set up.

### GlassWire Requires User Effort to Achieve Better Privacy

GlassWire bills itself as a network security tool that visualizes your past and present network activity on a simple graph. The majority of GlassWire's features, such as 'Discreet Alerts,' 'RDP Connection Detection,' or 'Multiple Server Monitoring,' are geared toward monitoring logging and alerting the user of new connections, new devices, or possible malware. These metrics are useful to IT/security professionals as logging is an important part of their work.

The GlassWire software includes an Evil twin detector to find bad Wi-Fi access points. For those who do not know, an evil twin is a network attack that uses a Wi-Fi access point that your device will connect to. These access points usually have names that are the same as legitimate access points. If you connect to one of these evil twins, they will try to snoop on your traffic.

GlassWire has another feature called "Who’s on your Wi-Fi or Network?" which allows your device to constantly scan for devices on the network and notify you when a new device connects to the same network as yours.

Apart from this, GlassWire also allows you to give network ratings to different networks. Like, you can set your Home Wi-Fi as a trusted network and all others as untrusted networks. This allows you to keep different settings for different networks.

From the perspective of protecting your privacy, GlassWire does not automatically block or give you the option to block ads, trackers, NSFW, etc. GlassWire is more concerned about logging possible trackers, threats, etc. and notifying the user about them. It expects the user to detect and block bad apps/connections, rather than using a predefined technique to stop them automatically. To use GlassWire as a privacy tool, you are required to invest a lot of time into configuring its settings & to block bad domains/IP addresses. It seems GlassWire has no approach to block bad domains by default - so is it worth the time to find and block hundreds of thousands of bad domains yourself?

### Portmaster Focuses on Privacy And Protects You By Default

Portmaster is a privacy tool with features built to protect your privacy by default. Portmaster enables secure DNS for all your connections while blocking a wide variety of trackers and ad networks lurking in your apps. This has two advantages. First, the secure DNS allows you to limit the tracking from your ISP and second, your apps are stopped from sending usage data to trackers or connecting to malware domains.

To detect trackers and bad domains, Portmaster uses filter lists. These lists are similar to lists used by tracker blockers for browsers like uBlock Origin. These lists contain domains discovered to track users and are auto-updated on a regular basis by open source communities around the world. Within Portmaster these filter lists can be customized to your needs by de/selecting different categories such as ads, trackers, malware, NSFW, etc.

Just like GlassWire, Portmaster allows you to configure different settings for different network environments. This way you can easily switch from your trusted Home Wi-Fi to an untrusted network, like in a coffee shop.

Portmaster also allows you to log and display different metrics about different apps. Like which domains, IP addresses they are connecting to and in which country the servers are located, along with the time a connection started and ended.

Another useful feature of Portmaster is the ability to block incoming connections by default. This prevents devices from your local network or devices from the Internet to connect to your computer unless you specifically allow them to.

Most of these privacy protections are enabled and handled by Portmaster automatically, but for everyone who loves configuring the details, there are tons of settings you can tweak: outgoing rules, incoming rules, block p2p connection and much more.

### Both Applications Are Open About Their Business Models

Software development and maintenance requires funds, so Portmaster and the GlassWire are supported by a business model. Many of the features mentioned by GlassWire, such as remote connection monitoring, Wi-Fi network monitor, Virus total scanning, and longer connection history, will cost you $39, $69, or $99 depending on your needs.

Portmaster, on the other hand, is both free in terms of freedom and free in terms of price. Safing makes money by charging a monthly fee for additional privacy features. In case you enjoy the Portmaster and want to support its development, an upgrade is the best way.

Having a business models and openly communicating this is an important thing for privacy tools. Because without a business model, a project might die or be bought out by Venture Capital, which have a tendency to be quick on monetizing intimate user data.

### Portmaster and GlassWire Provide a Simple Dashboard for Detecting and Responding to Privacy Threats

As far as network monitoring is concerned, the dashboard is an important part that will allow you to understand the network activity of your device. You would want to know which domains/websites were allowed to connect and which were blocked while you enjoyed your memes. In this case, Portmaster and GlassWire take a similar approach. They display all connections on a simple and easy to understand dashboard. GlassWire uses graphs, while Portmaster uses numbers. These connections are also sorted per app to help you differentiate connections made by your browser from the connections made by your chat app.

When it comes to connection details, both Portmaster and GlassWire show the type of traffic, the IP address and country of the connected servers, as well as the time a connection started and ended.

GlassWire as well as Portmaster allow you to better understand your network activity by displaying the past and present connections of apps on the dashboard. GlassWire can display past network activity for up to a month on the free plan. Portmaster currently cannot show a long connection history, but it is on Portmaster's roadmap.

### Portmaster and GlassWire Allow You to Configure Settings System-Wide and Per-App

Portmaster has global settings which define behavior for the whole device. But sometimes, an application may break due to a blocked connection. Allowing that connection system-wide might hurt your privacy. With Portmaster, you can easily solve this problem by creating an exception for a specific application, leaving other apps unaffected.

You can even block risky connection types system-wide, such as p2p or incoming, and then create exceptions for trusted apps.

### GlassWire Seems to Be A Proxy for the Windows Filtering Platform

We do not claim to have the full picture on how GlassWire integrates into the operating system, since GlassWire is closed-source. Therefore we had to analyze their software in a blackbox test. We do not have the full picture on how GlassWire integrates into the operating system.

What we did find out is that GlassWire uses the Windows Filtering Platform (WFP) in user-space mode, creating rules for applications essentially exactly like the Windows Firewall does itself. This is a similar approach to that of [Simplewall]({{ site.simplewall_comparison_url }}). When Windows Firewall is disabled, this also makes GlassWire blind and incapable of blocking anything.

GlassWire also uses a background service to collect additional data about connections.

Finally, an oddity we came across was that GlassWire provides a tray icon with the "Exit" option. But pressing that button makes GlassWire stop blocking connections, but it does not end GlassWire or the service as expected - instead it continues to run and monitor connections. We feel that this is unfavorable wording and might not align with user expectation.

### Portmaster Integrates Into the System Using the Kernel Extension

On the other hand, Portmaster uses the Windows Filtering Platform (WFP) in kernel-space mode. This means that it has its own kernel extension with custom logic. This kernel extension sees every network packet that goes in or out of the device. The Portmaster can analyze the packet data to extract information from it, such as domain names and encryption settings of HTTPS connections. As a result it can make a lot of smart decisions.

In order to give you an overview of what is happening on your device, the Portmaster directly feeds the raw network data into its Network monitor, showing you what your network has been up to within the last 10 minutes.

Contrary to GlassWire, Portmaster's system integration is both [documented](https://docs.safing.io/portmaster/architecture/os-integration#windows) and [open source](https://github.com/safing/portmaster-windows-kext/), so you can verify our claims.

### Portmaster Safeguards Your DNS queries From ISPs to Enhance Your Privacy

Encrypted DNS queries allow you to bypass Internet Service Providers (ISPs) and eavesdroppers and directly resolve your requests at the DNS provider. With Secure DNS, you get to enjoy enhanced security by preventing threats like DNS based Man-in-the-Middle (MitM) attacks and additional privacy from middleware. GlassWire needs extra software/setup to encrypt DNS queries, while Portmaster encrypts your DNS queries by default.

That being said, even if your ISP is uninformed of the websites you visit, they can monitor the IP addresses you connect to. Since many services employ dedicated static IPs for their infrastructure, ISPs can try to track your queries using conditional logic. So even though DNS encryption improves your privacy, it cannot safeguard all of your connections.

To fully protect your connections, we recommend using [Tor](https://www.torproject.org/), a trusted VPN or [the SPN](/spn/) (Portmaster Add-On), which will provide additional privacy from your ISP.

### Conclusion

Both Portmaster and GlassWire are powerful applications, are well designed and are easy to set up. Portmaster has excellent privacy defaults, which protect you from mass surveillance across the board. With GlassWire you have to build your own defenses from scratch. Another weak point of GlassWire is that it is proprietary. Portmaster on the other hand is free and open source, which is why we believe most people will trust Portmaster more.
