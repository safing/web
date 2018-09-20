---
title: TLS Enforcement
tags: tech
---

Sadly, the current state-of-the-art for security software is to intercept and break (man-in-the-middle) TLS connections to scan the content they carry. Sometimes this has even been done by big manufacturers to inject ads into encrypted web traffic. What makes matters even worse, is that a lot of times, the intercepting software does not correctly verify TLS connections and made the user vulnerable to real attacks.

Safing goes the exact opposite way. Instead of breaking TLS, Safing enforces valid TLS connections, by inspecting traffic and verifying certificates, checking revocation and Certificate Transparency. With Safing you do not longer need to trust your OS or applications alone, because Safing acts as an additional security check for TLS.

If you want to know more about how Safing works, check out our [guides](https://github.com/Safing/safing-doc).


{% comment %}

Traurigerweise ist der aktuelle "Stand der Technik", dass Sicherheitssoftware TLS-Verbindungen aufbricht um den Inhalt darin zu scannen. Es ist auch vorgekommen, dass große Hersteller TLS-Verbindungen aufgebrochen haben, um zum Beispiel auf den von ihnen verkauften Geräten Werbung anzuzeigen. Was die ganze Sache dann eigentlich zur großen Gefahr gemacht hat, ist dass die TLS-aufbrechende Software in so einigen Fällen die TLS-Verbindungen nicht korrekt geprüft hat, und Nutzer somit anfällig für echte Angriffe waren.

Safing geht den genau umgekehrten Weg. Anstatt TLS aufzubrechen, erzwingt Safing gültige und gute TLS-Verbindungen, indem Verbindungen und Zertifikate gründlich geprüft werden. Mit Safing musst du also nicht länger nur deinem Betriebssystem oder Apps vertrauen, denn Safing macht einen zusätzlichen Sicherheitscheck für TLS.

Wenn du mehr darüber wissen willst, wie Safing funktioniert, schau dir unsere [Guides](https://github.com/Safing/safing-doc) an.

Die englische Version dieses Posts findest du [hier](https://safing.me/blog/post/2017/08/tls-enforcement/).

{% endcomment %}
