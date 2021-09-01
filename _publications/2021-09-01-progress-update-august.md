---
# possible values: blog video podcast
category: blog
layout:   blog
# ⚠️ ALWAYS follow this format: "#001 - Some sweet title"
# this has to be consistent for displaying only the episode number or only the title
title: "#014 - Progress Update August"
date: 2021-09-01
author: David
custom_thumbnail_name: progress-update

# Progress Update blogs make a snapshot of the current next page
# and then add a "progress: description" to it.
# -> this is cool for history purposes
# -> UPDATE last_progress_update_on in config.yml

# And in there, describe the progress, challenges, cool moments etc..
# You may always refer to previous blog posts to get an idea.
# if a project gets completed / abandoned, add a finish date

# also set this attribute to true so the website does its magic with it
progress_update: true

# snapshot as of 2021/09/01
cards:
  done:
    - title: "Create \"Get Help\" Page"
      description: "Design and implement a \"Get Help\" section within the Portmaster so users can easily get help with issues or even smoothly report issues directly within the app."
      team:
        - Luke
        - Patrick
      projects:
        - Portmaster
      progress:
        - type: 'h5'
          text: "Live on Beta Release Channel"
        - type: p
          text: "After three deployment attempts this feature finally made it to the Beta release channel. It has been running smoothly so far, so it is highly likely that we will deploy the new improvements to all users next week. For anyone who cannot wait just switch to the Beta Release Channel"
        - type: p
          text: "You can now report issues from within the Portmaster app, even without a GitHub account. We are looking forward to more easily receive edge-cases and to iron out bugs. On that note: Thanks for all your reports and efforts - the Portmaster would not be where it is without all users and contributors!"
        - type: 'h5'
          text: "Help Texts and Bug Fixes Included"
        - type: p
          text: "This release also sees the introduction of a feature we call \"tip-ups\": you can now explore the difficult sections of the Portmaster with the help of pop-ups which should help grasping everything the Portmaster has to offer. Oh yes, and bug fixes, plenty of those got bundled here too."
        - type: a
          text: "Switch RC to \"Beta\" to Get the Update Today"
          href: "https://docs.safing.io/portmaster/settings#core/releaseChannel"
  in_progress:
    - title: Stabilize the Network
      description:
        - After v0.1, focus on stabilizing the typical issues that arise with early software. Fix bugs, improve performance & stability.
        - Detect failures in the network and react accordingly.
        - Deliver to more and more pre-orders as the network matures.
      projects:
        - SPN
      progress:
        - type: 'h5'
          text: "Puzzling Together the Last Pieces"
        - type: p
          text: "After finding a couple more nasty bugs, nearly all SPN components for the v0.3 update are now integrated nicely with the new networking stack. We have already started testing with our internal test network and will be deploying the new version to servers shortly and test some real world scenarios before letting you have a test drive."
      team:
        - Daniel
    - title: Remix the Network Monitor
      description: People report confusion around the network monitor. The dots feel like buttons but actually are not clickable. Rethink this section to make it more user friendly.
      projects:
        - Portmaster
      team:
        - Luke
        - Patrick
      progress:
        - type: 'h5'
          text: "Concept Is Done: Introducing \"Pills\""
        - type: p
          text: "Luke gave this section some really hard thought: What was the expectation a user had when viewing all the different apps? What information do we actually want in this overview? After several different approaches he finally landed at the design with the so called \"connection pills\". Seems strange? Well for now you will have to wait until you see it - but then it will definitely just click. Stay tuned!"
    - title: Cryptocurrency Payments
      description: Enable you to pay for the SPN with cryptocurrencies such as Bitcoin, Ethereum and Monero
      projects:
        - Website
      progress:
        - type: 'h5'
          text: "Review In Progress, End in Sight"
        - type: p
          text: "David and Alex started with the review last month. The bookkeeping requirements are fulfilled and now we are in the process of fine-tuning the code and its tests."
        - type: p
          text: "The end of this monster task seems near - but one can never be 100% sure with such an essential feature. Payments are just too crucial. Anyway, we will keep you posted as always - we cannot wait until people can finally with cryptos!"
      team:
        - Alex
    - title: "Docs: Portmaster Update System"
      description: Describe how the Portmaster updates itself in more detail. What is the purpose of each resource? What insights do we gain through this and how do we protect your privacy in the process?
      projects:
        - Website
      progress:
        - type: 'h5'
          text: "Halted Due to Vacation"
        - type: p
          text: "In the summer progress feels a bit slower than usual, but that is also very natural. Many of us are taking some weeks off to recharge our batteries. Slowing down the current progress, but helping a lot in the long run! This task was paused due to vacation. It will probably get some new attention in September."
      team:
        - David
        - Daniel
    - title: Write End Reports
      description:
        Conclude the current FFG and Netidee grants by submitting the required end reports.
      team:
        - Tabitha
        - Raphael
      projects:
        - Back Office
      progress:
        - type: 'h5'
          text: "End Reports in the Works and Proposals for Further Grants"
        - type: p
          text: "There are two end reports that need to be submitted within the next month, for the FFG and Netidee. However, it does not end there - we already are neck-deep in writing proposals for two more grants. As always, you can check our influences to find out more about our finances."
        - type: a
          text: "View All of Safing's Influences and Fundings"
          href: "https://safing.io/ownership#influences"
  postponed:
    - title: "Tailwind Components"
      description: "A lot of duplication happens in the HTML of our different web projects. Extract the most common components into CSS component classes, such as `btn-primary`, to remove duplication and unify the HTML."
      projects:
        - Website
      progress:
        - type: 'h5'
          text: "Implementation Postponed Due to Low Priority"
        - type: p
          text: "Even though the new tailwind components will make our website HTML much nicer - what visitors see on our homepages will stay pretty much the same. As a result we decided to tackle more pressing matters first."
      team:
        - Luke
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
