---
# possible values: blog video podcast
category: blog
layout:   blog
# ⚠️ ALWAYS follow this format: "#001 - Some sweet title"
# this has to be consistent for displaying only the episode number or only the title
title: "#012 - Progress Update June"
date: 2021-07-02
author: David
custom_thumbnail_name: progress-update

# Progress Update blogs make a snapshot of the current next page
# and then add a "progress: description" to it.
# -> this is cool for history purposes
# -> UPDATE DATES for backlog and next page

# And in there, describe the progress, challenges, cool moments etc..
# You may always refer to previous blog posts to get an idea.
# if a project gets completed / abandoned, add a finish date

# also set this attribute to true so the website does its magic with it
progress_update: true

# snapshot as of 2021/05/07
cards:
  done:
    - title: Apply for COVID Grant
      description: Lower Austria currently has an open grant which provides funds to companies who are making positive efforts within the COVID pandemic. With so much of our lives moving online, online privacy is becoming more important than ever. Apply for this grant.
      team:
        - Tabitha
        - Raphael
      projects:
        - Back Office
      progress:
        - type: 'h5'
          text: "We Got Accepted, Wrapping Things Up"
        - type: p
          text: "I (David) misunderstood things a bit in the last update, in fact we already got accepted to this grant a while back. The current work for this grant was to finalize some reports to unlock the last payments. The final report has already been handed in and we are awaiting approval. Expect us to update our funding numbers in the next two months."
        - type: a
          text: "View All of Safing's Influences and Fundings"
          href: "https://safing.io/ownership#influences"
  in_progress:
    - title: Stabilize the Network
      description:
        - After v0.1, focus on stabilizing the typical issues that arise with early software. Fix bugs, improve performance & stability.
        - Detect failures in the network and react accordingly.
        - Deliver to more and more pre-orders as the network matures.
      projects:
        - SPN
      team:
        - Daniel
      progress:
        - type: 'h5'
          text: "Next Version Almost Achieved"
        - type: p
          text: "The network flow management improvements are finished and tested. As this also changed the session management on the SPN nodes, Daniel is now working on integrating the improved system with the rest of the SPN components. When this is finished, we will finally have removed the identified weaknesses and instabilities of the v0.2 test phase."
    - title: "Create \"Get Help\" Page"
      description: "Design and implement a \"Get Help\" section within the Portmaster so users can easily get help with issues or even smoothly report issues directly within the app."
      team:
        - Luke
        - Patrick
      projects:
        - Portmaster
      progress:
        - type: 'h5'
          text: "Technical Implementation Nearing Completion"
        - type: p
          text: "Patrick and Luke have both been busy implementing the design for this powerful new feature. You will be able to send us bug reports with just a few clicks, with no GitHub account required. The technical parts are nearing completion, but there are a few other things that will need to happen for this to go live."
        - type: 'h5'
          text: "Privacy Policy Update & Clarifications in the Works"
        - type: p
          text: "As you report a bug or give feedback via the \"Get Help\" system, the Portmaster will send this data to our servers. As a result, we need to update our Privacy Policy to mention this. As we are already touching the Privacy Policy, we also wanted to simplify and clarify some section about our web services. This improved version is ready from our side, but we still need to ping pong this with our lawyer to finalize the details."
        - type: 'h5'
          text: "Infrastructure Update Also Required"
        - type: p
          text: "In order to keep everything as secure as possible, we compartmentalize services we host as far as possible. This has reached a level where it has become increasingly difficult to manage these services. Patrick is currently finishing up an improvement to our server management that we will use to set up the backend servers that power the \"Get Help\" page in the Portmaster."
    - title: Cryptocurrency Payments
      description: Enable you to pay for the SPN with cryptocurrencies such as Bitcoin, Ethereum and Monero
      projects:
        - Website
      team:
        - Alex
      progress:
        - type: 'h5'
          text: "Transfer Module Implemented, Export Module In the Works"
        - type: p
          text: "As Alex started with the implementation of this feature, it can be further split into two modules: Transferring the crypto currencies from A to B, with a clear track for accounting. And second, the export function, also something used for accounting. The first has had great progress this month, so now the implementation of the latter sub-module could be started."
    - title: "Tailwind Components"
      description: "A lot of duplication happens in the HTML of our different web projects. Extract the most common components into CSS component classes, such as `btn-primary`, to remove duplication and unify the HTML."
      projects:
        - Website
      team:
        - Luke
      progress:
        - type: 'h5'
          text: "Cleaning Up the HTML"
        - type: p
          text: "If you know a few things about web development you might have heard of Tailwind CSS, with which we create all our web sites. But if you have a look at the HTML, you might find a lot of duplication. Additionally, for us the HTML code has not always been the easiest to maintain. Adapt one button here, and then copy past the changes to all other buttons. This is why Luke has been working on Tailwind Components. It basically is an additional wrapper where we can kind of create our 'own Bootstrap', with classes such as `btn-primary` where we can adapt the CSS once, and everywhere the button will adapt. Much easier than hunting down all the tailwind classes in the HTML."
        - type: p
          text: "Luke already made great progress and has completed basic components. Further details and components are in the pipeline, we will keep you posted."
    - title: "Docs: Portmaster Update System"
      description: Describe how the Portmaster updates itself in more detail. What is the purpose of each resource? What insights do we gain through this and how do we protect your privacy in the process?
      projects:
        - Website
      team:
        - David
        - Daniel
      progress:
        - type: 'h5'
          text: "First Iteration Written, But Not Done Yet"
        - type: p
          text: "Daniel and David regularly get together to write docs. This months focus was explaining the Portmaster Update System in detail. How does it work in detail? What assets are updated? What are the different index files? We already came pretty far with this, but are not done yet, so this will sadly have to wait for the next documentation week - scheduled to happen in August."
  postponed:
    - title: Polish UI Design
      description: From a design perspective, the new User Interface was simply the minimal viable product. Go through each page and element in order to bring it up to speed with the concept design.
      team:
        - Luke
        - Patrick
      projects:
        - Portmaster
      progress:
        - type: 'h5'
          text: "Scope of Project No Longer Helpful"
        - type: p
          text: "As we are still adding plenty of features to the Portmaster, the job of \"polishing\" the User Interface would constantly be reset to zero. As new elements join, everything would have to be re-inspected and potentially changed. This is why we are postponing this card for now. After the basic set of features are out, we will re-tackle the User Interface with a more wholesome approach."
  discarded:
---


{% include progress-update-tablecards.html %}