---
# possible values: blog video podcast
category: blog
layout:   blog
# ⚠️ ALWAYS follow this format: "#001 - Some sweet title"
# this has to be consistent for displaying only the episode number or only the title
title: "#010 - Progress Update April"
date: 2021-05-07
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
          text: "Easy Compatibility Overviews for Linux Distros, VPN & User Applications Have Arrived"
        - type: p
          text: "The big new thing in our docs are compatibility tables where you can see at a glance what works with Portmaster and where things do not work (yet). Thanks for all the reports that are coming in - it really makes the Portmaster better for everyone! This month we also expanded the contribution section, published the macOS status page and also reworked our GitHub labels and removed the deprecated GitHub Portmaster Wiki."
        - type: a
          text: "Check Out VPN Compatibility And Maybe Report If Your VPN Works Or Not"
          href: "https://docs.safing.io/portmaster/install/status/vpn-compatibility"
    - title: "Pitch Safing on National Television"
      description:
        - With our appearance on Puls4 Television airing at the beginning of April, create a blog post explaining our intention with this gig.
        - Handle press requests from journalists reporting on the occasion.
      team:
        - Raphael
        - David
      projects:
        - Marketing
      progress:
        - type: 'h5'
          text: "We Received A Press Request On Friday to Be Completed On Monday"
        - type: p
          text: "This was a fun story - not so much in the moment, but now we can chuckle about it. On Friday before the TV show aired (the following Tuesday) Journalists tasked us to answer a bunch of questions to be completed by Monday morning. They wanted to feature our pitch in their online paper so it served us well. It just meant we could not enjoy our weekend as planned. Oh well, journalists have super busy jobs too, so no hard feelings - and they did a great job!"
        - type: p
          text: "The airing itself was super fun to watch - the whole team got together in a call in order to watch it. It was great fun seeing Raphael on TV as well as seeing how they cut together the sequence."
        - type: a
          text: "Read the Full Story On Pitching Safing And Privacy on TV"
          href: "https://safing.io/blog/2021/04/06/pitching-safing-and-privacy-on-national-television/"
    - title: "Finish FFG Midterm Report"
      description: With the current FFG grant reaching its half time mark we need to hand in the midterm report in order to keep them updated as well as to unlock the next funding batch.
      team:
        - Tabitha
        - Raphael
      projects:
        - Back Office
      progress:
        - type: 'h5'
          text: "We Handed In the Midterm Report"
        - type: p
          text: "One of our biggest funds comes from the FFG, the Austrian Research Promotion Agency. We applied for the \"Basisprogramm\" in June last year and got accepted for a second year. A big requirement is writing reports which reflect our progress and documentation of our research. With April, the midterm report was due and kept the Backoffice busy."
        - type: p
          text: "We are thankful for their support which helps us to develop powerful privacy tools for everyone."
        - type: a
          text: "View All Our Influences"
          href: "https://safing.io/ownership/#influences"
  in_progress:
    - title: Stabilize the Network
      description:
        - After v0.1, focus on stabilizing the typical issues that arise with early software. Fix bugs, improve performance & stability.
        - Detect failures in the network and react accordingly.
        - Deliver to more and more pre-orders as the network matures.
      team:
        - Daniel
      projects:
        - SPN
      progress:
        - type: 'h5'
          text: "Improving the Network Algorithm For Pre-Calculated Paths"
        - type: p
          text: "The SPN provides an adapting set of fixed connections between nodes, which clients know about and use to calculate the best route through the network. Both of these components require lots of optimization: On the one hand the network itself has to figure out which connections are most valuable to clients and the clients need to quickly find the best route within the given privacy and security parameters. This month Daniel focused on optimizing these two algorithms and made them ready for the first version."
    - title: Polish UI Design
      description: From a design perspective, the new User Interface was simply the minimal viable product. Go through each page and element in order to bring it up to speed with the concept design.
      team:
        - Luke
        - Patrick
      projects:
        - Portmaster
      progress:
        - type: 'h5'
          text: "Implemented User Action Confirmations"
        - type: p
          text: "One feedback we often received in regards to using the Portmaster was that people were uncertain whether their actions did something or not. As an example, when you clicked on \"Block Domain\", it did block the domain but there was no visual feedback to indicate that it really happened. Patrick and Luke worked on Action Confirmations and they were already pushed to production. We hope you like them - if you have ideas how to further improve just let us know!"
        - type: 'h5'
          text: "Smoother Installation Process In the Works"
        - type: p
          text: "One thing we are already working on is a cleaner installation process. We want to start up the Core Service, the Notifier and the UI in a cleaner way to avoid confusion whether or not the Portmaster is now properly installed. Stay tuned"
        - type: a
          text: "Suggest Improvements for the Portmaster"
          href: "https://docs.safing.io/portmaster/guides/contribute#report-bugs-suggest-features-and-improvements"
    - title: "Try Content Marketing"
      description: Draft and create content which provides lots of value to the readers. Co-op with others from the scene, participate in the discussion and through that, indirectly spread the awareness of Safing.
      team:
        - David
      projects:
        - Marketing
      progress:
        - type: 'h5'
          text: "A Deep Dive Into Privacy Topics"
        - type: p
          text: "Inspired by other content marketers, we really dig the approach of choosing a relevant topic within privacy and to dive into the topic and talk with others about it. Then create a write-up and publish it. If people find it valuable they will read to the end of the blog post and there, we make a plug for the Portmaster."
        - type: 'h5'
          text: "First Subject: Business Models With TheHatedOne"
        - type: p
          text: "It was a pleasure to host TheHatedOne on our show and have discuss business models with him. A topic I honestly think we talk too little about. Feel free to pitch your ideas what topics we should cover next."
        - type: a
          text: "Listen to the Podcast Episode with TheHatedOne"
          href: "https://safing.io/podcast/2021/05/06/how-weak-business-models-corrupt-privacy-projects/"
    - title: Cryptocurrency Payments
      description: Enable you to pay for the SPN with cryptocurrencies such as Bitcoin, Ethereum and Monero
      team:
        - Alex
      projects:
        - Website
      progress:
        - type: 'h5'
          text: "Second Module For Accounting Is In the Works"
        - type: p
          text: "With the first batch of requirements technically completed, our current challenge lies in adding the second module on top of it, which is required for accounting. So the structure to pay with crypto currencies is already ready, but we have to fulfill accounting requirements on our end. That is Alex' current focus. We will keep you in the loop."
  postponed:
  discarded:
---


<div>
  {% if page.cards.done.size > 0 %}
    <div class="pt-12">
      <div style="max-width: 750px; margin-top: 3rem; margin: auto;">
        <h3 >Completed</h3>
        <p>A list of work packages we've fully wrapped up this month. Expand any to find out more about its conclusion.</p>
      </div>
      <div class="pt-10 blogwrapper">
        {% for card in page.cards.done %}
          {% include project_tablecard.html state = 'done' %}
        {% endfor %}
      </div>
    </div>
  {% endif %}

  {% if page.cards.in_progress.size > 0 %}
    <div class="pt-12">
      <div style="max-width: 750px; margin-top: 3rem; margin: auto;">
        <h3 >In Progress</h3>
        <p>Expand any work package to find out more about its progress, obstacles and sub-achievements.</p>
      </div>
      <div class="pt-10 blogwrapper">
        {% for card in page.cards.in_progress %}
          {% include project_tablecard.html state = 'in_progress' %}
        {% endfor %}
      </div>
    </div>
  {% endif %}

  {% if page.cards.discarded.size > 0 %}
    <div class="pt-12">
      <div style="max-width: 750px; margin-top: 3rem; margin: auto;">
        <h3 >Discarded</h3>
        <p>Work packages we for one reason or the other decided to discard. Click on a package to find out the exact reasons why.</p>
      </div>
      <div class="pt-10 blogwrapper">
        {% for card in page.cards.discarded %}
          {% include project_tablecard.html state = 'discarded' %}
        {% endfor %}
      </div>
    </div>
  {% endif %}

  {% if page.cards.postponed.size > 0 %}
    <div class="pt-12">
      <div style="max-width: 750px; margin-top: 3rem; margin: auto;">
        <h3 >Postponed</h3>
        <p>Work packages we for one reason or the other decided to postpone. Click on a package to find out the exact reasons why.</p>
      </div>
      <div class="pt-10 blogwrapper">
        {% for card in page.cards.postponed %}
          {% include project_tablecard.html state = 'postponed' %}
        {% endfor %}
      </div>
    </div>
  {% endif %}
</div>
