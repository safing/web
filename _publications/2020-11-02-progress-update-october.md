---
# possible values: blog video podcast
category: blog
layout:   blog
# ⚠️ ALWAYS follow this format: "#001 - Some sweet title"
# this has to be consistent for displaying only the episode number or only the title
title: "#004 - Progress Update October"
date: 2020-11-02
author: David
custom_thumbnail_name: progress-update

# Progress Update blogs make a snapshot of the current next page
# and then add a "progress: description" to it.
# -> this is cool for history purposes

# And in there, describe the progress, challenges, cool moments etc..
# You may always refer to previous blog posts to get an idea.
# if a project gets completed / abandoned, add a finish date

# also set this attribute to true so the website does its magic with it
progress_update: true

# snapshot as of 2020/11/02
cards:
  done:
    - title: Safing API Backend
      description:
        - Enable you to sign in to your Safing account on the Portmaster client via the Safing API. Also respond with details regarding your SPN subscription.
        - Implement device management so you can sign out of devices from the Safing website.
      projects:
        - SPN
        - Portmaster
        - Website
      team:
        - David
      progress:
        - type: 'h5'
          text: "Backend Done, Frontend Task Moved to Backlog"
        - type: p
          text: "The server part has been done for a while now, which is great! As a result the task to implement the client side feature will be very straightforward. We intended to push this feature directly with the redesigned UI but decided against it to not slow the release down. So off to the backlog it goes."
        - type: a
          text: "Dive into our Backlog"
          href: "https://safing.io/backlog/"
    - title: "Inception: Reaching Out"
      description:
        - As the SPN saw the light of day, the time has come to spread the word via word of mouth and paid marketing.
        - Reach out to YouTube channels and newsletters in the privacy scene who offer sponsored shout-outs.
        - You are very welcome to give us suggestions in this context.
      link:
        text: "Share your ideas on reddit"
        url: "https://reddit.com/r/safing/"
      projects:
        - Marketing
      team:
        - Raphael
        - Tabitha
      progress:
        - type: 'h5'
          text: "Our Feet Are Wet"
        - type: p
          text: "The last weeks and months we reached out to plenty of people in search for new audiences. We sponsored some content creators and were happy with the results. As such we will continue to do so. For now we'll wrap this card up, but naturally we will keep you in the loop about our marketing activities."
        - type: 'h5'
          text: "We Paid For YouTube Sponsorships"
        - type: p
          text: "Big shout-out to Nick from The Linux Experiment whom it was a pleasure to work with! We had the chance to sponsor two videos in September, and two happened in October. If you are into Linux, this channel is a must!"
        - type: a
          text: "Check out The Linux Experiment on YouTube"
          href: "https://www.youtube.com/c/TheLinuxExperiment/"
    - title: Conclude FFG Funding 19/20
      description:
        - Co-operate with the FFG to wrap up the funding of the past year. Prepare and fine tune our documents so we can promptly respond to any requests as they make spot checks.
      projects:
        - Back Office
      team:
        - Tabitha
        - Raphael
      progress:
        - type: 'h5'
          text: "Fully Wrapped Up"
        - type: p
          text: "Throughout the last year, reports were written, time-sheets were filled out and our company expenses were budgeted. Since the FFG funded a lot of this period we handed in all relevant documents for them to review. They were content and we already received the final part of that funding/loan. We are happy to conclude this and already applied for a follow-up funding/loan. More on that next month."
        - type: a
          text: "View all numbers on how we finance ourselves"
          href: "https://safing.io/ownership/#influences"
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
          text: "Progress Staled As We Focused On the Portmaster Redesign"
        - type: p
          text: With Luke and Patrick steaming ahead with the UI Redesign, they stumbled over some technical limitations which needed to be tackled by Daniel to not block their progress. Focus will be back on the SPN and this project as soon as the redesign is out.
    - title: Full UI Redesign
      description:
        - Completely overhaul the Portmaster user interface to simplify all aspects of it.
        - Easily block connections from the Monitor, easily block all connection of an app, etc...
      projects:
        - Portmaster
      team:
        - Patrick
        - Luke
        - Daniel
      progress:
        - type: 'h5'
          text: "Around 90% Of the First Version Are Done"
        - type: p
          text: In the last weeks Luke, Patrick and Daniel steamed ahead to really make the Portmaster shine. The Portmaster already is powerful, sure, but really not that useable. The upcoming update will make it easy to block domains from the monitor page, set global settings and then overwrite them on a per-app level, as well as change settings based on your current environment. Are you in a coffe shop? Just switch to "Untrusted Mode" and all your settings will adapt to your defined needs. Stay tuned, it will be big.
        - type: 'h5'
          text: "Speed Improvements On Their Way Too"
        - type: p
          text: Since Daniel was focusing on some Portmaster ground work he also tackled some nasty bugs which should help a ton with speed issues many users experienced. While at it he also tackled the next card, the prompts are coming back!
    - title: Connection Prompting
      description:
        - Reintroduce the "Prompt Mode" which asks for your input whether or not to allow a connection. Naturally, make it possible to lock in a decision for the future.
      projects:
        - Portmaster
      team:
        - Daniel
      progress:
        - type: 'h5'
          text: "Prompts Are Coming Back"
        - type: p
          text: "As Daniel had to shift focus from the SPN to the Portmaster, he went on a side-mission: he tackled the underlying issues which forced us to previously disable connection prompting. With that done they are finally coming back! Prompting is already designed and will be released in a bundle with the UI Redesign. Stay tuned!"
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
          text: "Structure Set, Texts Are Being Written"
        - type: p
          text: "The Portmaster is a powerful tool, and hence it is complex. Showing and documenting this in an easy fashion is a challenge, so David put a lot of thought into finding a big-picture structure with which the docs should be easy to understand and navigate. With that being done, now the texts for each part, module and component are being written."
        - type: 'h5'
          text: "Design Is Still Primitive And Needs Work"
        - type: p
          text: "Since Luke is fully invested into the Portmaster Redesign we are just using the very outdated docs design for now. We might release this project in different stages so you get content fast and then make it fancier and more informative as we go."

    - title: Cryptocurrency Payments
      description: Enable you to pay for the SPN with cryptocurrencies such as Bitcoin, Ethereum and Monero
      projects:
        - Website
      team:
        - Alex
      progress:
        - type: 'h5'
          text: "First Stage Is In Review"
        - type: p
          text: "Cryptocurrency payments can become rather complicated, that is why we decided to first implement a manual solution and later add complexity to make things more automatic. Alex has finished development of the this first stage and we are now in the review phase, where we will investigate the code, improve parts and make them ready for deployment."
  postponed:
  discarded:
---


{% include progress-update-tablecards.html %}