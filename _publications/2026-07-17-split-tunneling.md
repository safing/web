---
category: blog
layout:   blog
title: "Split Tunneling arrives in Portmaster 2.2.1"
date: 2026-07-17
author: Viktor
summary:  
custom_thumbnail_name: newPlansSummer23
portmaster_plug: true
portmaster_update: true
---

Portmaster 2.2.1 adds Split Tunneling: the ability to route specific apps or connections through a different network interface, overriding the route your operating system would normally use. If a VPN or SPN is handling your default traffic, Split Tunneling lets you carve out exceptions.

Some use case examples:
- Bypass VPN overhead for latency-critical apps such as games or video calls, sending them over a direct connection instead
- Send a streaming app over your direct ISP connection instead of a VPN exit in another country
- Keep a work app on a dedicated connection while everything else uses your home network

When using Split Tunnel, Portmaster applies the override automatically. Follow these steps:
1. Enable the Split Tunnel module in Portmaster's global settings
2. Turn on Use Split Tunnel for the app you want to redirect

You can set this globally as a default or override it per app, and add rules to include or exclude specific domains for finer control. Portmaster intercepts the app's outgoing connections in the background and re-establishes them over the chosen interface; the app itself needs no configuration.

Worth noting: traffic routed this way bypasses SPN or VPN encryption and exits under your regular IP address, so it only makes sense for apps and destinations where that trade-off is acceptable.

Split Tunneling is available now for Windows and Linux users running Portmaster 2.2.1 or later. Full configuration details, including per-app rules and how Split Tunneling interacts with SPN and VPNs, are documented on the [wiki](https://wiki.safing.io/en/Portmaster/Feature/SplitTunnel). Release notes for 2.2.1 are on [GitHub](https://github.com/safing/portmaster/releases/tag/v2.2.1).

Questions about Split Tunneling? Check the [wiki](https://wiki.safing.io/en/Portmaster/Feature/SplitTunnel) first, or reach out through Safing's [support channels](https://safing.io/support/).
