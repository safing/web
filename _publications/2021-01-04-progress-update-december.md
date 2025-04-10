---
# possible values: blog video podcast
category: blog
layout:   blog
# ⚠️ ALWAYS follow this format: "#001 - Some sweet title"
# this has to be consistent for displaying only the episode number or only the title
title: "#006 - Progress Update December"
date: 2021-01-04
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

# snapshot as of 2020/12/29
cards:
  done:
    - title: Wrap Up 2020
      description:
        - "As 2020 comes to an end, wrap up the year, plan ahead for what is to come in 2021 and most importantly, let everyone recharge their batteries."
      projects:
        - Back Office
      team:
        - Raphael
      progress:
        - type: 'h5'
          text: "Here's to 2021"
        - type: p
          text: "Despite all the circumstances we will continue to work hard and push forward: for Privacy, for Freedom. Thanks for being part of that journey. May fate treat us all kindly."
        - type: 'h5'
          text: "A lot Was Achieved in 2020"
        - type: p
          text: "Even with all the torments of 2020, for Safing, the year had a lot of highlights:"
        - type: 'ul'
          lis:
            - a successful Kickstarter campaign launched
            - two people joined the team
            - the Portmaster saw the light of day
            - the payment system went live
            - the SPN got into pre-alpha
            - the Portmaster recently received a complete UI overhaul
            - follow-up funding was received for another full year
            - "and most importantly: so many of you got to know us and are joining our forces"
        - type: 'h5'
          text: "The Team is Recharging Their Batteries"
        - type: p
          text: "With all that behind us, and mountains to climb ahead of us - it was only natural for us to take some time off and regain our strength. This was a big focus of December, along with tidying up some things that have been lying around for too long. Like a spring cleaning in December."
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
          text: "Stabilizing Connection Stability"
        - type: p
          text: "The SPN is deeply integrated into the Portmaster. If the Portmaster has slow connection processing, it directly affects the SPN. So fine-tuning this was Daniel's focus on in December. Anyone using the Portmaster will have noticed these improvements."
    - title: Portmaster Documentation
      description:
        - You can see our high level concepts & you can inspect our code. But nothing in between.
        - Fill that gap by providing proper documentation of the Portmaster. What does each component do? With what other components does it interact? Where is its code located?
      projects:
        - Portmaster
        - Website
      team:
        - David
        - Patrick
        - Daniel
      progress:
        - type: 'h5'
          text: "We Adapted Structures to Enable Progress"
        - type: p
          text: "Deep technical knowledge, that can only come from Patrick or Daniel, has been the bottleneck for this project. And with all the recent focus on Portmaster development it was hard to sit together and talk about documentation - there was just always something more important. The solution to this was to adapt our overall structures. Starting in January, certain time slots are booked solely for 'content creation', such as documentation."
    - title: Cryptocurrency Payments
      description: Enable you to pay for the SPN with cryptocurrencies such as Bitcoin, Ethereum and Monero
      projects:
        - Website
      team:
        - Alex
      progress:
        - type: 'h5'
          text: "Review Round II in Progress"
        - type: p
          text: "As this feature is adding a lot of code onto our payment system codebase, some bigger restructures were already implemented. Currently we are taking a look at all of the details and looking how we can improve the smaller things."
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
          text: "Music Licence Got Purchased"
        - type: p
          text: "We are happy to have wrapped up the licencing part for this. Now, we have an amazing artists whose music we can use in our podcast. Looking forward to the results. Publishing the first episode of the new season in January. Stay tuned!"
        - type: a
          text: "Explore Our Podcast"
          href: "https://safing.io/podcast/"
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
          text: "Concept Being Defined"
        - type: p
          text: "This is rather unexpected, but nevertheless very important. We realised people do not understand what we do when visiting our website for the first time. A lot of thought is being put into how we can improve this. Though we have some concepts ready, it is not too fleshed out yet - it is best to just wait and see ;)"
  postponed:
  discarded:
---


{% include progress-update-tablecards.html %}