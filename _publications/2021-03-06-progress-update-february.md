---
# possible values: blog video podcast
category: blog
layout:   blog
# ⚠️ ALWAYS follow this format: "#001 - Some sweet title"
# this has to be consistent for displaying only the episode number or only the title
title: "#008 - Progress Update February"
date: 2021-03-06
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

# snapshot as of 2021/03/06
cards:
  done:
    - title: "Create Business Model Page"
      description: Make it easy to understand how we make money. Clarify all details on a dedicated sub-page, which should be accessible both from the About page and the footer.
      team:
        - David
        - Luke
      projects:
        - Website
      progress:
        - type: 'h5'
          text: A Big Pain Point Is Now Resolved
        - type: p
          text: "In the last years, time and time again, people got super confused about our business model. The blame is definitely on us, since we marketed free software while listing \"Pricing\" as one of the main entries in the top navbar. As a result we falsely communicated a paradox: Free but Not Free."
        - type: p
          text: "The first step to resolve this was to restructure our website, which happened in January: We focused on the Portmaster and hid most of the SPN, including the \"Pricing\" in the top navbar. Now the confusion was gone, but we did not cleary show how we make money. With our newest sub-page, this has now been resolved."
        - type: a
          text: "Look at Safing's Business Model Cycle"
          href: "https://safing.io/business-model/"
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
          text: "Anomaly Detection Evaluation Complete"
        - type: p
          text: "In February we evaluated different anomaly detection algorithms, one of them coming from the European Space Agency. We are happy to have completed the evaluation stage and have found that it makes most sense to implement this after the SPN has progressed more. As such, we are wrapping up this aspect and re-shifting our focus on advancing the SPN. Finishing this evaluation also allowed us to conclude our ESA Business Incubation."
        - type: a
          text: "Look at ESA-BIC and our other influences"
          href: "https://safing.io/ownership/#influences"
    - title: Polish UI Design
      description: From a design perspective, the new User Interface was simply the minimal viable product. Go through each page and element in order to bring it up to speed with the concept design.
      team:
        - Luke
        - Patrick
      projects:
        - Portmaster
      progress:
        - type: 'h5'
          text: "Network Monitor Got Polished, Lots of Small Fixes"
        - type: p
          text: "The new UI was a big step sure, but it is still off from the concept design. Luke is spending a good amount of time to tackle and polish each sub-design individually. This month Patrick fixed a lot of smaller UI bugs, and the network monitor got a face-lift from Luke. The new eye-candy is already live for you to enjoy."
        - type: a
          text: "Download the Portmaster"
          href: "https://safing.io/download/"
    - title: "Define Next Marketing Steps"
      description: Since two vital requirements were completed, (1) re-shifting communication towards the Portmaster and (2) its documentation, now focus on spreading the word again. Define the next steps and keep everyone in the loop.
      team:
        - Raphael
        - David
      projects:
        - Marketing
      progress:
        - type: 'h5'
          text: "Main Chunk Snoozed to March"
        - type: p
          text: "Though we had a lot of other stuff going on in February, we did not completely ignore this area. Some talks already happened which might bear fruit in the coming months. But in terms of creating a proper concept for the next steps, the main chunk of that will happen in March. Stay tuned."
    - title: "Docs: Add Fundamental Guides"
      description:
        - "Describe some basics such as (un)installation, operating system compatibility, troubleshooting, how to contribute, etc..."
        - Deprecate the GitHub Wiki. Flesh out the scope and details as you go.
      team:
        - Daniel
        - David
      projects:
        - Website
      progress:
        - type: 'h5'
          text: "Contribution And Installation Guide Have Arrived"
        - type: p
          text: "Our previous installation guide lived on GitHub, but we migrated it over to the docs since we rather want to host our docs independently. Along with the migration we finetuned the guide and also created a contribution guide which describes how to best support us at our current stage."
        - type: 'h5'
          text: "Settings Reference and DNS Configuration Incoming"
        - type: p
          text: "We think the next big feature will be really cool. A Settings Reference where all of Portmaster's configuration options are listed and explained. Similar to something like Mozilla's description of the `about:config`. This is not live just yet, but might see the light of day in March. We shall see. Also, we want to migrate our guide on DNS Configuration over to the docs."
        - type: a
          text: "Check Out the Contribution Guide"
          href: "https://docs.safing.io/portmaster/guides/contribute"
    - title: "Docs: Add Compatibility Lists"
      description: Make it convenient for people to see which operating systems we support, which linux distros are compatible and which VPNs work or do not work. Make it easy for people to share their experiences with others.
      team:
        - Daniel
        - David
      projects:
        - Website
      progress:
        - type: 'h5'
          text: "First Batch Is Live, Second Is Around the Corner"
        - type: p
          text: "The first release in this regard included a Status Page for mobile and guides on both Linux distribution and VPN compatibility. It is all rather rough and simple, but we are iterating from there."
        - type: p
          text: "The next iteration has actually progressed well too, streamlining different pages to all include compatibility tables and making it easy for you to report positivies as well as negatives on GitHub. We are hard at work to bring this out as soon as possible."
        - type: a
          text: "Discover the Documentation"
          href: "https://docs.safing.io/"
    - title: "Docs: Modernize the Design"
      description: Embed the documentation into our overall design by giving it a fresh new look.
      team:
        - Luke
      projects:
        - Website
      progress:
        - type: 'h5'
          text: "Concept Is Done, Implementation Pending"
        - type: p
          text: "Luke started off with conceptualizing how the design of the documentation should be updated. Naturally its design will be similar to the rest of the website to fit into the overall experience. With a rough version completed the next step is to implement the concept into HTML and CSS."
        - type: a
          text: "Check Out the Documentation"
          href: "https://docs.safing.io/"
    - title: Cryptocurrency Payments
      description: Enable you to pay for the SPN with cryptocurrencies such as Bitcoin, Ethereum and Monero
      projects:
        - Website
      team:
        - Alex
      progress:
        - type: 'h5'
          text: "Review Round III Defined Next Steps"
        - type: p
          text: "In February we spent plenty of time to thoroughly review this large module and left no stone unturned. Some refactors and improvements were implemented in the process while others are being developed as we speak."
        - type: p
          text: "A lot has has been achieved and we do see light at the end of the tunnel, still we will take the time it needs to deploy a robust system. Payments are important."
  postponed:
  discarded:
---


{% include progress-update-tablecards.html %}