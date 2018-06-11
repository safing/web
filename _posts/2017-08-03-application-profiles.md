---
title: Application Firewall - Profiles
tags: tech
---

We think having a application firewall that constantly prompts you whether an app is allowed to access something on the network is pretty lame - and disrupts your focus.  
With Safing, instead of being asked what a program (or a whole group of programs!) is allowed to do, you define its behavior - a profile - once, and let Safing handle the rest.

The most important part about these profiles are the flags you can set - they let you describe the application with just a few clicks, and you can get back to work.  

There are flags for:

- the actor: who is executing that application
- the location: Internet or local network?
- the type: select one or more behavioral profiles

The most interesting, and definitely the most used type will be `Strict`. If a profile with this flag is applied to an application, Safing dynamically checks whether the application and the domain it wants to connect to have any kind of relationship to evaluate if the connection to it shall be allowed or not.

Two nice examples of this are:

- Adobe Acrobat: the only valid connection is to the update servers, everything else, like a malicious PDF loading malware, is blocked.
- Various Apps: mostly the only valid connection is to the app's company, 3rd party tracking and ads are blocked.

Profiles will make it a breeze to keep you safe online.

If you want to know more about how Safing works, check out our [guides](https://github.com/Safing/safing-doc).


{% comment %}

Wir denken, dass eine Application Firewall, die dich ständig fragt, ob eine App auf etwas im Netzwerk zugreifen darf, nicht angenehm zu nutzen ist - und den Fokus extrem stört.
Mit Safing definierst du - anstatt andauernd gefragt zu werden - einmal ein Verhaltensprofil für eine App und lässt Safing den Rest erledigen.

Das beste an diesen Profilen sind die Flags, die du setzen kannst - mit diesen kannst du ganz schnell und unkompliziert für eine App ein bestimmtes Verhalten definieren und wieder an deine Arbeit gehen.

Es gibt Flags für:

- den Akteur: wer führt die App aus?
- den Ort: Internet oder lokales Netzwerk?
- der Typ: um was für eine App handelt es sich?

Eine der interessantesten Flags ist sicherlich `Strict`. Wenn ein Profil mit diesem Flag auf eine App angewendet wird, prüft Safing dynamisch, ob die Anwendung und die Domain, mit der sie eine Verbindung herstellen möchte, irgendeine Art von Beziehung haben, um zu bewerten, ob die Verbindung zu ihr erlaubt ist oder nicht.

Zwei schöne Beispiele dafür sind:

- Adobe Acrobat: Die einzige gültige Verbindung ist zum Update-Server, alles andere, wie das Herunterladen von Malware von einer fremden Domain, wird blockiert.
- Verschiedene Apps: meistens sind die einzigen gültigen Verbindungen zum Unternehmen der App, Tracking und Werbung wird blockiert.

Profile machen es zu einem Kinderspiel, sicher und privat im Internet unterwegs zu sein.

Wenn du mehr darüber wissen willst, wie Safing funktioniert, schau dir unsere [Guides](https://github.com/Safing/safing-doc) an.

Die englische Version dieses Posts findest du [hier](https://safing.me/blog/post/2017/08/application-profiles/).

{% endcomment %}
