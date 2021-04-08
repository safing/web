---
# possible values: blog video podcast
category: blog
layout:   blog
# ⚠️ ALWAYS follow this format: "#001 - Some sweet title"
# this has to be consistent for displaying only the episode number or only the title
title: "#009 - Progress Update March"
date: 2021-04-08
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
    - title: "New DNS Attribution on Windows"
      description: After plenty of reports it became evident that deactivating the Windows DNS-Client caused a lot of issues. Find and implement a solution to attribute DNS requests to processes without deactivating the DNS-Client
      team:
        - Daniel
      projects:
        - Portmaster
      progress:
        - type: 'h3'
          text: "We Revamped DNS Attribution On Windows"
        - type: p
          text: "Ever since the release of the Portmaster, we deactivated the Windows DNS-Client since it had no documented negative impacts. But as numerous reports came about side-effects, we looked for ways how to approach this differently. Happy to have released this in March and there is a long blog post on the full journey."
        - type: a
          text: "Dive into the full story with all the technical details"
          href: "https://safing.io/blog/2021/03/23/attributing-dns-requests-on-windows/"
    - title: "Docs: Modernize the Design"
      description: Embed the documentation into our overall design by giving it a fresh new look.
      team:
        - Luke
      projects:
        - Website
      progress:
        - type: 'h3'
          text: "Wrapped Up The Final Blocks In A Focused Week"
        - type: p
          text: "During March Luke already spent a good deal on bringing the design up to speed with the rest of the website. In March's last week David and Daniel also focused on Documentation. That was the time where we could ping-pong the last adjustments of this project to then push everything out. We are happy finally having a unified design for every part of the website."
        - type: 'h3'
          text: "All Our Sites Now Support NoJS"
        - type: p
          text: "Oh, another cool thing happened in this regard. Finally the day arrived where no JavaScript is required to use any of our websites. It might add a few small features here and there - if you choose to enable it anyway - but everything is fully functional without it. CSS and HTML do the job just fine."
        - type: a
          text: "Check Out the Redesigned Docs"
          href: "https://docs.safing.io/"
    - title: "Docs: Add Compatibility Lists"
      description: Make it convenient for people to see which operating systems we support, which linux distros are compatible and which VPNs work or do not work. Make it easy for people to share their experiences with others.
      team:
        - Daniel
        - David
      projects:
        - Website
      progress:
        - type: 'h3'
          text: "VPN Compatibility Table Arrived"
        - type: p
          text: "David and Daniel's final week in March was dedicated to documentation. Next to the redesign, the Settings Handbook and the DNS Configuration Guide, we also added a table for VPN Compatibility. It is not too full yet, but with your help more reports will follow."
        - type: 'h3'
          text: "It Is Now Easier Than Ever To Contribute"
        - type: p
          text: "Thanks for all your reports and ideas so far! As our project spans over multiple projects we knew it was not very convenient to know where to report what. That is why we completely revamped the Contribution Guide with easy overviews and links where and how to participate."
        - type: a
          text: "Look At the New Contribution Guide"
          href: "https://docs.safing.io/portmaster/guides/contribute"
    - title: "Define Next Marketing Steps"
      description: Since two vital requirements were completed, (1) re-shifting communication towards the Portmaster and (2) its documentation, now focus on spreading the word again. Define the next steps and keep everyone in the loop.
      team:
        - Raphael
        - David
      projects:
        - Marketing
      progress:
        - type: 'h3'
          text: "We Will Focus On Value Content"
        - type: p
          text: "David spent a good amount on our concept for the next marketing steps. With a few different available approaches, we want to decide our main energy towards \"Value Content\". Meaning we will produce blogs which do not mainly talk about us, but about a relevant privacy or technology topic. Going in-depth and providing value to the reader we will then share the article on different platforms and only have a small plug for Safing - probably at the end of the post."
        - type: 'h3'
          text: "Sponsorships, Pitches & Events Will Happen From Time to Time Too"
        - type: p
          text: "Last month we sponsored another video of The Linux Experiment, big shout-out to all the lovely people joining from there. Events in this fashion, or smaller out-reaches online where we pitch our software in a more direct fashion will happen from time to time too. But the main focus will be to create some juicy, relevant content. On that note we also plan to cooperate with other creators - stay tuned!"
        - type: a
          text: "Head Over to The Linux Experiment's YouTube Channel"
          href: "https://www.youtube.com/channel/UC5UAwBUum7CPN5buc-_N1Fw"
    - title: "Conclude ESA Business Incubation"
      description: With the ESA-BIC coming to its end, wrap it up with the book-keeping, final reports, etc.
      team:
        - Raphael
        - Tabitha
      projects:
        - Back Office
      progress:
        - type: 'h3'
          text: "Final Meeting Held In March"
        - type: p
          text: "The past two and a half years flew past rather quick. In such moments it is always encouraging to look back and see how far we have come since. Anyway, in March we ultimately concluded the ESA Business Incubation, handing in our end-report and having our final meeting."
        - type: a
          text: "Explore All Our Influences"
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
        - type: 'h3'
          text: "Broad SPN Access Postponed to Q3 - Here Is Why"
        - type: p
          text: "A short Update on the SPN: Different factors made us prioritize Portmaster before SPN development in the second half of 2020. Since the start of 2021 we are focusing on SPN development again - by Summer a lot will have happened and you will notice all of the impact. We are sorry for this delay."
        - type: a
          text: "Dive Into the Full Blog Announcement"
          href: "https://safing.io/blog/2021/03/24/broad-spn-access-postponed-to-q3-here-is-why/"
    - title: Polish UI Design
      description: From a design perspective, the new User Interface was simply the minimal viable product. Go through each page and element in order to bring it up to speed with the concept design.
      team:
        - Luke
        - Patrick
      projects:
        - Portmaster
      progress:
        - type: 'h3'
          text: "Cleaner Buttons & New Monitor Page"
        - type: p
          text: "Patrick and Luke finished the new monitor page - now you can see all connection individually, ordered by most recent. You can also filter to only show blocked connections. We also repositioned a few buttons to make the navigation clearer."
        - type: 'h3'
          text: "Turning Off Animations Increased Performance"
        - type: p
          text: "And a strange one: the big green shield animation as well as other smaller ones was the cause for a big performance hit. Even though this is purely done with CSS, this weighed in on the CPU. Oh Electron... Nevertheless, we are happy we could speed up the UI now."
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
        - type: 'h3'
          text: "Contribution Guide & Settings Handbook"
        - type: p
          text: "David and Daniel's final week in March was dedicated to documentation. Next to the redesign, the Settings Handbook and the DNS Configuration Guide, we also added a table for VPN Compatibility and revamped our Contribution Guide."
        - type: p
          text: "Thanks for all your reports and ideas so far! As our project spans over multiple projects we knew it was not very convenient to know where to report what. That is why we completely revamped the Contribution Guide with easy overviews and links where and how to participate."
        - type: 'h3'
          text: "Next Steps: Software Compatibility and Mac Status Page"
        - type: p
          text: "There are still a few smaller tasks we need to tackle, such as the Mac Status page and fully deprecating the GitHub Wiki. But step by step, we are getting there."
        - type: a
          text: "Look At the New Contribution Guide"
          href: "https://docs.safing.io/portmaster/guides/contribute"
    - title: Cryptocurrency Payments
      description: Enable you to pay for the SPN with cryptocurrencies such as Bitcoin, Ethereum and Monero
      projects:
        - Website
      team:
        - Alex
      progress:
        - type: 'h3'
          text: "Technical Backend Feature Complete"
        - type: p
          text: "This month saw great progress. Alex and David went through the first crypto module and from a technical perspective everything is in place now. The remaining part is to polish the front end of the website so the user experience becomes smooth when paying with crypto. Not too lang to go until you all can pay with crypto currencies too."
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
