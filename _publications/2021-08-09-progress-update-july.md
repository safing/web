---
# possible values: blog video podcast
category: blog
layout:   blog
# ⚠️ ALWAYS follow this format: "#001 - Some sweet title"
# this has to be consistent for displaying only the episode number or only the title
title: "#013 - Progress Update July"
date: 2021-08-09
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

# snapshot as of 2021/05/07
cards:
  done:
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
          text: "Climbed Over An Unexpected Obstacle"
        - type: p
          text: "As we were about to complete the improved internal networking stack of the SPN - including the new session management - the tests of the full stack showed another flow control requirement. While this was a setback, the work on this update has been completed and makes the SPN network stack even more stable than before. The new flow control requirement will ensure that uploads via the SPN will not clog the channels and slow down other connections sharing some of the same path through the network. We cannot wait to ship it and have you test it!"
      team:
        - Daniel
    - title: "Create \"Get Help\" Page"
      description: "Design and implement a \"Get Help\" section within the Portmaster so users can easily get help with issues or even smoothly report issues directly within the app."
      team:
        - Luke
        - Patrick
      projects:
        - Portmaster
      progress:
        - type: 'h5'
          text: "Feature Nearing Its Release"
        - type: p
          text: "Both the designs and the implementation have been completed by Luke and Patrick. A lot of work went into this, making it easy to report bugs from within the Portmaster, even without a GitHub account. Now we just need to iron things out such as wording and then this feature will get out to the beta release channel. Looking forward to this!"
    - title: Cryptocurrency Payments
      description: Enable you to pay for the SPN with cryptocurrencies such as Bitcoin, Ethereum and Monero
      projects:
        - Website
      progress:
        - type: 'h5'
          text: "Export Module Done, Feature Set In Review"
        - type: p
          text: "Alex continued to develop this feature and achieved full circle. Every part is working, but now the review cycle is starting. The code will be inspected and improved where needed. Let us see how far we get in August."
      team:
        - Alex
    - title: "Tailwind Components"
      description: "A lot of duplication happens in the HTML of our different web projects. Extract the most common components into CSS component classes, such as `btn-primary`, to remove duplication and unify the HTML."
      projects:
        - Website
      progress:
        - type: 'h5'
          text: "Components Are Built, Review Process Starts"
        - type: p
          text: "Luke did an amazing job at building these slick tailwind components with which we can completely swap our site HTML. Even as this comes out, which might still take a while, you will not notice a difference: the website(s) will still look exactly the same. But adding new sections and pages will be so much easier, as the HTML will just be elegant and easy to work with. Anyway, the next step is reviewing everything, fine-tuning naming of components and classes and then making a plan how to best implement the new system throughout our three different web projects: website, docs and account site."
      team:
        - Luke
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
