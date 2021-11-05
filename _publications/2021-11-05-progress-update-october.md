---
# possible values: blog video podcast
category: blog
layout:   blog
# ⚠️ ALWAYS follow this format: "#001 - Some sweet title"
# this has to be consistent for displaying only the episode number or only the title
title: "#015 - Progress Update October"
date: 2021-11-05
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
    - title: Migrate into "Broader Testing"
      description:
        - After v0.1, focus on stabilizing the typical issues that arise with early software. Fix bugs, improve performance & stability.
        - Detect failures in the network and react accordingly.
        - Deliver to more and more pre-orders as the network matures.
      projects:
        - SPN
      progress:
        - type: 'h5'
          text: "Safing Privacy Network Reached Its Next Stage"
        - type: p
          text: "As of October 12th, the SPN entered the \"Broader Testing\" phase. This is an exciting step for us and takes Safing \"full circle\", meaning all our planned products are live. Of course we have a lot of work ahead of us, but the nature of our work is now different. Instead of building huge projects from scratch, we can now iterate and improve on what is already here. Expect a lot of progress in the next months, both for the Portmaster and the SPN."
        - type: a
          text: "Read the SPN Status Page for the latest info on the network"
          href: "https://docs.safing.io/spn/broader-testing/status"
      team:
        - Daniel
    - title: Remix the Network Monitor
      description: People report confusion around the network monitor. The dots feel like buttons but actually are not clickable. Rethink this section to make it more user friendly.
      projects:
        - Portmaster
      progress:
        - type: 'h5'
          text: "Reworked View Simplifies Monitoring All Network Activity"
        - type: p
          text: "After Luke finished the designs for this feature back in August Patrick went ahead and tackled its implementation. Only a few obstacles got in the way, and we also added some attached explainer pop-ups."
        - type: p
          text: "We are happy this is now live. You now get a super simple overview of how many connections every app makes, giving you insight how many of them are allowed or blocked. This is such a welcome improvement that we will be updating our product screenshots on the homepage to display them. Until then, you have the chance to compare how it previously looked with how it is now."
      team:
        - Luke
        - Patrick
    - title: Cryptocurrency Payments (Tech)
      description: Enable you to pay for the SPN with cryptocurrencies such as Bitcoin, Ethereum and Monero
      projects:
        - Website
      progress:
        - type: 'h5'
          text: "Development Focused Weeks Pushed the Tech Over the Mountain"
        - type: p
          text: "The last few weeks David joined Alex to push this feature over the finish line - from a technical perspective. (this is also why I, David, skipped last month's progress update ;). Anyway, progress was good and after the finishing touches we deployed everything to the Safing Account server."
        - type: 'h5'
          text: "Back Office Needs to Prepare Stuff Before Activating This for Users"
        - type: p
          text: "Even though we achieved this great milestone, you cannot just yet pay the SPN with crypto currencies. For that to happen, the Back Office needs to set up some structures and then enable this. Like setting up the crypto addresses you will pay to, double check the accounting requirements, etc. You can follow the progress in the new Crypto Card."
      team:
        - Alex
    - title: Write End Reports
      description:
        Conclude the current FFG and Netidee grants by submitting the required end reports.
      progress:
        - type: 'h5'
          text: "End Reports Wrapped Up"
        - type: p
          text: "As noted in the last update, the back office already came very far with these tasks. Final touches were made to the end reports and off they went. Some additional applications also were sent. An update to our numbers on our finances page is scheduled to come out in the next weeks."
        - type: a
          text: "Check Out Our Ownership & Finances"
          href: "https://safing.io/ownership"
      team:
        - Tabitha
        - Raphael
      projects:
        - Back Office
  in_progress:
    - title: Implement In-App Account Login
      description:
        - Prepare to get rid of SPN pre-orders by implementing the In-App login into the Portmaster.
      projects:
        - SPN
      progress:
        - type: 'h5'
          text: "Specification Done, Implementation In Progress"
        - type: p
          text: "Currently, people who want to use the SPN have to (1) pre-order & wait and (2) log in via a special access code. Both is not so convenient, which is why we are working on the In-App Login to improve all of this. A lot of brain muscle went into specifying this feature in order to keep user privacy fully present. We will document how all of this works, but getting it out of the door is the current focus. Daniel is already fully working on the implementation - stay tuned."
      team:
        - Daniel
    - title: Rework Installers & PKGBUILD
      description:
        - The current installation experience is sub-optimal. Prompt users to reboot their system after installation to mitigate issues.
        - Revisit our linux distribution, improve the PKGBUILD and add packaging for RPM and Arch. Also, submit Portmaster to AUR.
      projects:
        - Portmaster
      progress:
        - type: 'h5'
          text: "Install Is Getting Easier"
        - type: p
          text: "The install process of the Portmaster is already pretty old. It is not super horrible, but since then, a lot of things have changed and this process just needed some cleaning up. As an example, we re-added the mention that a reboot is required after install, after wrongly thinking this was no longer the case. In the end we were left dumbfound when many reports came in that were fixed by rebooting the system. Totally on us! Anyway, in terms of progress this already got far. Will likely get out mid November."
        - type: 'h5'
          text: "RPM, Arch and AUR Are On Their Way"
        - type: p
          text: "We hear all you Linux lovers! A much requested feature was packaging for RPM as well as submitting to the Arch User Repository. Since Patrick dived into the whole install experience he also reworked and improved these areas. Coming up is an improved PKGBUILD, AUR submission as well as an RPM package."
      team:
        - Patrick
    - title: Compatibility Assistant
      description:
        - Portmaster users regularly run into different compatibility issues, breaking system integration, DNS or specific apps.
        - Implement self-checks so the Portmaster can notify users about these issues. Improving their understanding of their state might also help in their issue reporting.
      projects:
        - Portmaster
      progress:
        - type: 'h5'
          text: "Portmaster Will Report on Integration & Compatibility Failures"
        - type: p
          text: "This is a big one: so many reports come in where the Portmaster is in one weird state or the other. Either system integration failed, or its operations were interfered, or DNS just completely failed. All of this is understood by us after some research, but why not let the Portmaster do self-checks in order to inform the user of what is going on? "
        - type: p
          text: "Daniel went into this task and fully wrote its specification: what can the Portmaster self-check? When does it make sense to inform the user? Where would this be displayed at first? All of this is clear now and is now awaiting implementation."
      team:
        - Daniel
    - title: Simplify Portmaster Settings
      description:
        - Current Portmaster settings are complicated. Especially settings connected to the Network Ratings are hard to grasp for new users. Re-imagine and simplify.
      projects:
        - Portmaster
      progress:
        - type: 'h5'
          text: "Network Ratings Will Likely Need to Be Unlocked in the Future"
        - type: p
          text: "The Portmaster has a high learning curve - we know. But what is the biggest learning difficulty for new users? Most definitely the Network Ratings with their complicated settings. That is why we tasked Luke to completely re-imagine the Portmaster settings without this feature requirement."
        - type: p
          text: "Off he went, and the results are amazing! Simple On/Off switches anyone? Yes, they are coming. But of course we do not want to remove one of our most unique feature, especially when many of you have invested time in learning and configuring it. So what we will probably start off with is to hide it away by default where advanced users can unlock it again."
      team:
        - Luke
        - Patrick
    - title: Cryptocurrency Payments
      description:
        Now that the tech is in place, set up the required back office structures in order to activate this feature.
      progress:
        - type: 'h5'
          text: "Just Starting Off"
        - type: p
          text: "It has not been too long since the tech is on the server, so now the Back Office has to align time to tackle this task in the near future. We definitely want to bring you cryptos sooner than later, we just are evaluating where to squeeze in the time for this to happen."
      team:
        - Raphael
      projects:
        - Back Office
  postponed:
    - title: "Docs: Portmaster Update System"
      description: Describe how the Portmaster updates itself in more detail. What is the purpose of each resource? How do we protect your privacy in the process?
      projects:
        - Website
      progress:
        - type: 'h5'
          text: "Got Lost Among Other Priorities"
        - type: p
          text: "If you read this far, you know a lot is happening at the moment. This task just did not make the cut at the moment, hence we are postponing it. We still plan to add these docs in the future, we just have to wait and see when we will wear our writing sweaters again."
      team:
        - David
        - Daniel
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
