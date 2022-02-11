---
# possible values: blog video podcast
category: blog
layout:   blog
# ⚠️ ALWAYS follow this format: "#001 - Some sweet title"
# this has to be consistent for displaying only the episode number or only the title
title: "#017 - Progress Update January"
date: 2022-02-11
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

# snapshot as of 2021/12/07
cards:
  done:
    - title: Simplify Portmaster Settings
      description:
        - Current Portmaster settings are complicated. Especially settings connected to the Network Ratings are hard to grasp for new users. Re-imagine and simplify.
      projects:
        - Portmaster
      team:
        - Luke
        - Patrick
      progress:
        - type: 'h5'
          text: "\"On/Off\" Switches Are Becoming the Default for New Users"
        - type: p
          text: "Ever since the first versions of Portmaster, the learning curve has been steep for new users. The biggest hurdle has always been the Network Rating, where you configure settings not only for the moment, but also for future environment changes. We are happy work on this has been completed and will make things easier for new users next Monday."
        - type: p
          text: "Just to clarify: Current users who have used the Network Rating settings will not auto-switch to the simple toggle, but can do this manually. Likewise, after a new installation you can enable the Network Rating if you want to."
        - type: 'h5'
          text: "Network Rating Is Still a Feature, But Will Be Replaced in the Future"
        - type: p
          text: "Even though we have come far, we already planned to further simplify things for power users who want to have different settings for different scenarios. We believe we will switch to profile based settings instead of having 3 hard-coded environments. This will both make it easier to understand, and make it possible to create custom profile names to whatever your heart desires."
        - type: p
          text: "Just to let you know, this is still not fully fleshed out and will likely take a while - until then we hope the current Network Rating serves you well."
    - title: Evaluate Custom Filter Lists
      description: Research how custom filter lists could be integrated into the Portmaster. After the evaluation decide whether to move this forward or not.
      projects:
        - Portmaster
      team:
        - Daniel
      progress:
        - type: 'h5'
          text: "First Version Has Been Specified"
        - type: p
          text: "We have evaluated the much requested feature of being able to add custom filter lists to the Portmaster. Good news, this is possible!"
        - type: p
          text: "We will approach this locally: users will be able to select a system file with domains in it, which the Portmaster will then use to block its listed items. The implementation task has been added to the backlog and is now waiting for free developer resources for it to be tackled."
        - type: a
          text: "Check Out the Backlog"
          href: "https://safing.io/backlog/"
    - title: Stabilize Network Structure
      description:
        Evaluate why speeds and latency are still below par and bring them up to speed.
      projects:
        - SPN
      team:
        - Daniel
        - Raphael
      progress:
        - type: 'h5'
          text: "Some Servers Moved to Better Hosting Providers"
        - type: p
          text: "Since SPN connections hop over multiple nodes, a connection can only be as fast as the slowest node being used. There were a few bad eggs in our network, which got replaced over the last couple of weeks."
        - type: 'h5'
          text: "SPN Routing Algorithm Improved Too"
        - type: p
          text: "Another big factor to improve speeds was revisiting the algorithm that decides how to build the network and which available paths through the network should exist. Daniel went down that rabbit hole and could improve speeds on that front as well."
        - type: 'h5'
          text: "Speeds Up to 50 MBit/s Should Now Be Normal"
        - type: p
          text: "With both of these improvements speed and latency has made big jumps forward compared to the beginning of December. We are happy about it!"
        - type: a
          href: https://docs.safing.io/spn/alpha/status
          text: "Check out what to expect from current SPN speeds and features"
  in_progress:
    - title: Redesign Application Pages
      description:
        - With "On/Off" switches now available, redesign the settings page and make it easy to switch between monitoring an app and configuring its settings.
      projects:
        - Portmaster
      team:
        - Luke
        - Patrick
      progress:
        - type: 'h5'
          text: "Simplistic Application Page & Settings Nearing Completion"
        - type: p
          text: "Now that Portmaster supports simple \"On/Off\" switches, this opened a lot of possibilities for design improvements. Luke already created visionary design concepts a few months back and these are being implemented by Patrick as we speak. Having seen it in action within the team, I can say how big of a leap forward this is in making privacy accessible for everyday users - so pumped to release this in the coming weeks!"
    - title: Rework Installers & PKGBUILD
      description:
        - The current installation experience is sub-optimal. Prompt users to reboot their system after installation to mitigate issues.
        - Revisit our linux distribution, improve the PKGBUILD and add packaging for RPM and Arch. Also, submit Portmaster to AUR.
      projects:
        - Portmaster
      team:
        - Patrick
      progress:
        - type: 'h5'
          text: "Improvements Waiting for Next Stable Release"
        - type: p
          text: "The linux installers have been improved and are waiting for the next stable release cycle, as we needed to update a dependency, which should be in the stable release channel before the new release installers are based on it."
        - type: p
          text: "There are also some issues we know about within SELinux which we plan to tackle and fix in the coming weeks."
    - title: Portmaster Stabilizing
      description:
        - With our recent months being focused on the SPN, invest more time into investigating Portmaster bugs and make the whole experience more straightforward and stable.
      projects:
        - Portmaster
      team:
        - Patrick
        - Daniel
      progress:
        - type: 'h5'
          text: "Notifier Width Fixed"
        - type: p
          text: "A small but annoying bug was the notifier filling up the entire screen when longer messages were shown. Just a small update here to say that this small nuisance has been fixed."
        - type: 'h5'
          text: "Portmaster Is Getting More Technical Attention"
        - type: p
          text: "Overall, within the recent months the SPN naturally got a lot of attention. But we are looking forward to invest more time to fine-tune the Portmaster experience and make things more stable. Let's squash some bugs!"
        - type: p
          text: "Thanks again for all your reports - even if it sometimes takes a while, we will get to them."
    - title: Select Exit Node
      description:
        Let SPN users select at which server they want to exit for certain apps. Also make it easy to exclude certain apps or websites from using the SPN.
      projects:
        - SPN
      team:
        - Daniel
      progress:
        - type: 'h5'
          text: "SPN Routing Options Are Being Implemented"
        - type: p
        - type: p
          text: We are currently working on some much requested settings that will let users influence how routes are built through the SPN.
        - type: p
          text: Most importantly, you will be able select where an application should exit the network, if you are not satisfied with the destination-aware automatic selection. You will also be able to exclude certain websites or services from using the SPN, if you feel the need to.
        - type: p
          text: The implementation should not be too complex, as we are re-using some of the logic used within Portmaster filter rules. Hope to get this out soon!
    - title: Comparison Blog Posts
      description: Write blog posts comparing the Portmaster with different alternatives. What does the Portmaster do better? Where are others better? Be honest.
      projects:
        - Website
      team:
        - David
        - Pranav
      progress:
        - type: 'h5'
          text: "Portmaster vs Simplewall in the Pipeline"
        - type: p
          text: "The next comparison blog post has already gotten far. Pranav has completed the research as well as written most of the blog post, only leaving out some technical details where Daniel's deep expertise is required to give a complete picture. Since Daniel's schedule often is full we shall see when we get to this. But overall we are excited to get more comparison blog posts out of the door. And as a sneak peek, the third blog in this series is going to be \"vs Glasswire\". Looking forward!"
    - title: Implement Tailwind Components
      description: "A lot of duplication happens in the HTML of our different web projects. Having already built the most common components into CSS component classes, such as `btn-primary`, implement them into the main website to remove duplication and clean up the HTML."
      projects:
        - Website
      team:
        - Luke
      progress:
        - type: 'h5'
          text: "Final Stretch for Complete HTML Revamp"
        - type: p
          text: "Yes, you heard right. We are re-doing all our website's HTML. After Luke created our own Tailwind component library it was time to put it to use by using it for our main website's HTML. Needless to say this required countless hours with many edge cases and bugs to found and fixed. However, this project is nearing its completion and should go out in February. Not much will change for you, but it is a big step to enable further website maintenance."
    - title: Visit Opt Out Podcast
      description:
        - Seth from the amazing Opt Out privacy podcast recently invited us to be part of Opt Out S02, where he chats with different privacy creators. Most definitely!
      projects:
        - Community
      team:
        - Daniel
        - David
      progress:
        - type: 'h5'
          text: "Recording Already Happened, Release Scheduled for 13. Feb"
        - type: p
          text: "It was an honor to be invited by Seth to be part of an Opt Out episode. Daniel and David joined the show and talks focused on Portmaster: How we got into privacy, Why we built the Portmaster, what it can do and what its drawbacks are."
        - type: p
          text: "It really was a pleasant chat! Seth is a great host, with lots of privacy content to dive into if you enjoy enjoy blog posts or podcasts."
        - type: a
          href: https://optoutpod.com/
          text: "Tune into the Opt Out Podcast"
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
