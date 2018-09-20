---
title: DNS Resolution
tags: tech
---

DNS is an inherently insecure part of the Internet ecosystem. It was never designed to be secure and any security enhancements are adapted only at a very slow rate. In order to mitigate possible threats that take advantage of the insecurity of DNS, Safing transparently takes over resolving DNS queries.

One thing Safing does, is to use altenative DNS transport protocols, to ensure that DNS packets aren't being tampered with. Currently we have added support for Google's DNS over HTTPS service, and will soon also support T-DNS, whish is DNS over TCP/TLS.

In addition to protecting DNS transport, Safing uses intelligent query routing to get queries directly to the best available server that can answer them. This minimizes exposing queries to servers that could not answer them (securely) anyway.

If you want to know more about how Safing works, check out our [guides](https://github.com/Safing/safing-doc).


{% comment %}

DNS ist ein grundlegender, aber unsicherer Teil des Internet-Ökosystems. Es wurde niemals dafür konzipiert sicher zu sein und jegliche Sicherheitsverbesserungen finden nur sehr langsam Verbreitung. Um mögliche Bedrohungen, die die Unsicherheit von DNS ausnutzen, zu verringern, übernimmt Safing transparent die Beantwortung von DNS-Anfragen.

Etwas was Safing tut, um DNS sicherer zu machen, ist auf alternative DNS-Transportprotokolle zu setzen. So können wir sicherstellen dass die DNS-Pakete nicht manipuliert werden. Derzeit unterstützen wir das "DNS over HTTPS" Service von Google, und bald auch T-DNS (DNS over TCP / TLS).

Zusätzlich zum Schutz des DNS-Transports leitet Safing DNS-Anfragen intelligent an den best-verfügbaren Server, der sie auch beantworten kann. Dadurch geben wir dem Netzwek möglichst wenig Informationen preis.

Wenn du mehr darüber wissen willst, wie Safing funktioniert, schau dir unsere [Guides](https://github.com/Safing/safing-doc) an.

Die englische Version dieses Posts findest du [hier](https://safing.me/blog/post/2017/08/dns-resolution/).

{% endcomment %}
