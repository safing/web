---
# possible values: blog video podcast
category: blog
layout:   blog
# ⚠️ ALWAYS follow this format: "#001 - Some sweet title"
# this has to be consistent for displaying only the episode number or only the title
title: "#007 - Progress Update January"
date: 2021-02-04
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

# snapshot as of 2021/02/04
cards:
  done:
    - title: Portmaster Documentation
      description:
        - You can see our high level concepts & you can inspect our code. But nothing in between.
        - Fill that gap by providing proper documentation of the Portmaster. What does each component do? With what other components does it interact? Where is its code located?
      projects:
        - Portmaster
        - Website
      team:
        - Daniel
        - David
        - Patrick
      progress:
        - type: 'h5'
          text: "First Documentation Batch Has Arrived"
        - type: p
          text: "In January, Daniel and David spent a lot of time to finalize the first batch of the documentation: the architecture overview of the Portmaster and all its details. Code references are included, so if you are technical enough, you can dive even deeper and check out the code for yourself."
        - type: 'h5'
          text: "We Are Happy the First Part Is Done, More to Come"
        - type: p
          text: "Looking back, we actually started working on this project back in July. As time went, we often had to prioritize something else but finally made space to wrap up this first part in January."
        - type: p
          text: "There are a lot of things we would like to add in the future, starting off with some guides and a settings overview. Tell us what you think is missing or take a look into the Backlog to see what we already have planned."
        - type: a
          text: "Discover the Portmaster Documentation"
          href: "https://docs.safing.io/"
    - title: Podcast Revamp
      description:
        - Spice up the podcast with proper structure. Create an introduction and outro with underlined music and improve the overall storytelling.
      projects:
        - Community
      team:
        - Tabitha
        - David
      progress:
        - type: 'h5'
          text: "Season 02 Introduces a New Title, Storytelling and Music"
        - type: p
          text: "Did you know the podcast is already older than a year? Time flies, and we felt it was OK to have an amateurish podcast for a while - but back in November we thought it was time to spice things up. Tabi and David started from scratch and re-evaluated everything from the podcast title to the exact wording in the outro. If you dig podcasts, here is the result:"
        - type: a
          text: "Check Out the First Episode of \"Coding Freedom - The Safing Podcast\""
          href: "https://safing.io/podcast/2021/02/02/the-giants-new-face/"
    - title: Rethink Website Communication
      description:
        - New people visiting our website still have a hard time figuring out what we do at a glance. Instead of explaining everything at once, simplify our entry-level communication and move more complex stuff into according sub pages.
      projects:
        - Marketing
        - Website
      team:
        - David
        - Luke
      progress:
        - type: 'h5'
          text: "Implementation Took Two Focused Weeks"
        - type: p
          text: "After realizing the website still confused people, the concept work started back in December. That part concluded in January and then Luke and David tackled implementation in two very focused weeks. This fast pace was only possible because we did not change any structures of the homepage. Still, it was intense to do in that short period, but it was worth it: We are super happy about the result."
        - type: 'h5'
          text: "Development Focus Still Is SPN"
        - type: p
          text: "It was easier to explain one product instead of trying to communicate everything we do at once. So even though at first glance, the Portmaster seems to get all the attention, be assured development focus remains on the SPN."
        - type: a
          text: "Discover the Restructured Homepage"
          href: "https://safing.io/"
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
          text: "Sub-Goal Completed: Server Metrics"
        - type: p
          text: "In order to properly stabilize, scale and understand the network, it is crucial to have proper tools to analyze the SPN and its status. Implementing metrics was the task Daniel tackled and finished in January."
        - type: 'h5'
          text: "Anomaly Detection Implementation Comes Next"
        - type: p
          text: "With metrics being done, the next step is to implement anomaly detection algorithms and feed them with the data. We will probably use technology from the European Space Agency which we got access through the ESA-Incubation. Stay tuned for that progress."
        - type: 'h5'
          text: "Additional Context for Anomaly Detection"
        - type: p
          text: "Clients navigate through the SPN using advertised links between nodes. In order to scale the network, both the local algorithm creating routes through the network, as well as the server algorithm selecting links it should establish within the network need to be very well understood. The anomaly detection system will help us see where something is going wrong and might also be able to point to the root cause of an unexpected event."
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
          text: "Navbar, Side-Dash & Widgets Are Ready"
        - type: p
          text: "The new UI was a big step sure, but it is still off from the concept design. Luke is spending a good amount of time to tackle and polish each sub-design individually. This month, the navbar, the side-dash and the widgets were given a face-lift. They are ready and will be included in the next Portmaster Release. The next step will be the Network Monitor - stay tuned!"
        - type: a
          text: "Download the Portmaster"
          href: "https://safing.io/download/"
    - title: "Define Next Steps"
      description: Since two vital requirements were completed, (1) re-shifting communication towards the Portmaster and (2) its documentation, now focus on spreading the word again. Define the next steps and keep everyone in the loop.
      team:
        - Raphael
        - David
      projects:
        - Marketing
      progress:
        - type: 'h5'
          text: "Conceptualizing the Next Push"
        - type: p
          text: "With both the restructured website and the docs being published, we feel we have finally created a place where new people feel comfortable when they arrive."
        - type: p
          text: "As a result, we are restarting the marketing engine and are going to set different events to spread the word, both paid and organic. Fleshing out the plans will happen in February, expect an update in this regard next month."
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
          text: "One Week A Month is Dedicated to Content"
        - type: p
          text: "The docs are nice, but far from done. That is why we reserved certain slots to progress content such as the docs or the blog. This month we decided we would like to add some fundamental guides as well as compatibility lists to the documentation. Let's see how far we come."
        - type: p
          text: "We also added some docs tasks to the backlog for you to explore."
        - type: a
          text: "Check Out the Backlog"
          href: "https://safing.io/backlog/#website"
    - title: "Docs: Add Compatibility Lists"
      description: Make it convenient for people to see which operating systems we support, which linux distros are compatible and which VPNs work or do not work. Make it easy for people to share their experiences with others.
      team:
        - Daniel
        - David
      projects:
        - Website
      progress:
        - type: 'h5'
          text: "One Week A Month is Dedicated to Content"
        - type: p
          text: "The docs are nice, but far from done. That is why we reserved certain slots to progress content such as the docs or the blog. This month we decided we would like to add some fundamental guides as well as compatibility lists to the documentation. Let's see how far we come."
        - type: p
          text: "We also added some docs tasks to the backlog for you to explore."
        - type: a
          text: "Check Out the Backlog"
          href: "https://safing.io/backlog/#website"
    - title: Cryptocurrency Payments
      description: Enable you to pay for the SPN with cryptocurrencies such as Bitcoin, Ethereum and Monero
      projects:
        - Website
      team:
        - Alex
      progress:
        - type: 'h5'
          text: "Development Stale Since Focus Lay Elsewhere"
        - type: p
          text: "January was a full month and as a result this projects was not prioritized that much. This is not a surprise and happens regularly. We are a small team and have to prioritize."
  postponed:
  discarded:
---


{% include progress-update-tablecards.html %}