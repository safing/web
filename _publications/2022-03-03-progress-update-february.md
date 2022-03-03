---
# possible values: blog video podcast
category: blog
layout:   blog
# ⚠️ ALWAYS follow this format: "#001 - Some sweet title"
# this has to be consistent for displaying only the episode number or only the title
title: "#018 - Progress Update February"
date: 2022-03-03
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

# snapshot as of 2021/03/03
cards:
  done:
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
          text: "Redesign Out For Everyone"
        - type: p
          text: "Happy to say that redesign was completed in February and is now out for you to to enjoy and explore! More beautiful settings, application pages, and the biggest one:"
        - type: 'h5'
          text: "Simple \"On/Off\" Toggles Replace Complexity"
        - type: p
          text: "The biggest learning curve for new users has always been the Network Rating, where you configure settings not only for the moment, but also for future environment changes. With Portmaster version 0.8+ new users now get simple toggles switches per default."
        - type: img
          src: "/assets/img/blog/release-0.8/network-scope-before-after.png"
        - type: p
          text: "This approach makes things much simpler for most people, hence they are the default for all new installs. We are super pumped these changes are out and feel this is a big changer for the whole Portmaster experience!"
        - type: a
          text: Read the full blog post to read about all the new changes
          href: "https://safing.io/blog/2022/03/01/portmaster-0.8-simple-toggles/"
    - title: Implement Tailwind Components
      description: "A lot of duplication happens in the HTML of our different web projects. Having already built the most common components into CSS component classes, such as `btn-primary`, implement them into the main website to remove duplication and clean up the HTML."
      projects:
        - Website
      team:
        - Luke
      progress:
        - type: 'h5'
          text: "Website Is Completely New... Technically"
        - type: p
          text: "Did you notice that the Website got a complete overhaul in February? Probably not, because everything still looks the same. But that was the goal."
        - type: p
          text: "For the developers out there, the HTML was completely redone in order to make future maintenance and page creations easier. A lot of hours were spent to find and tweak all the small details which needed re-adjusting; which is a natural effect with such a big structural change. So happy this is out of the door now."
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
          text: "Episode Got Published"
        - type: p
          text: "The episode got out on 13th of February - it was a super fun experience where Seth talked with Daniel and David about things like: How we got into privacy, Why we built the Portmaster, what it can do and what its drawbacks are. It is a great place to get to know us a bit better!"
        - type: a
          href: https://optoutpod.com/episodes/s2e07-portmaster/
          text: "Tune into the Episode"
  in_progress:
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
          text: "Work Can Continue After Stable Release"
        - type: p
          text: "As mentioned last time progression within this task got halted since we had to wait for a dependency update. The 0.8 Portmaster release happened at the end of February so work can now continue."      
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
          text: "Lots of Small Fixes Here and There, But Hard to Write About It"
        - type: "p"
          text: "There have been a lot of bug fixes in the last weeks - and these are spread across the board. In the UI, the main application or within installers."
        - type: p
          text: "So even though work is being invested into bug fixes, it is hard to properly communicate about all these small tweaks. Hence this card will not have a follow up next month. We will naturally continue to communicate about all bigger changes. Also, if you are interested in the small things happening, check out the activity on GitHub."
        - type: a
          text: View Closed Issues on GitHub
          href: "https://github.com/safing/portmaster/issues?q=is%3Aissue+is%3Aclosed"
    - title: Full-Device Network Monitor
      description:
        - Enable users to view connections across all applications. Make it easy to filter based on individual needs.
      projects:
        - Portmaster
      team:
        - Patrick
        - Luke
      progress:
        - type: 'h5'
          text: "Evaluating How to Filter ALL Connections Across Your Device"
        - type: p
          text: "We hear you - a lot of people report that they would like to troubleshoot or filter all connections instead of doing this per-app. If it were easy this would already be a feature, but there are some big technical challenges attached to this. Hundreds of connections are at play and we do not want to eat up all your memory."
        - type: 'h5'
          text: "Technical Specification Is Being Worked On"
        - type: p
          text: "Nevertheless, we think this challenge is worth it - which is why our team is already working on evaluating different approaches in order to find the best solution. Also the design and user interaction has to be fleshed out. Work in progress."
    - title: Select Exit Node
      description:
        Let SPN users select at which server they want to exit for certain apps. Also make it easy to exclude certain apps or websites from using the SPN.
      projects:
        - SPN
      team:
        - Daniel
      progress:
        - type: 'h5'
          text: "Many New SPN Settings Are Out in Beta"
        - type: p
          text: "A lot of SPN settings are coming up - and have already been released to the Beta Release Channel. These new rules are powerful: whether you want to exclude domains from the SPN, configure its routing algorithm or exclude countries from being an exit node, so many opened possibilities."
        - type: 'h5'
          text: "We Already Got Plans to Make Things Even Better"
        - type: p
          text: "Even with these new settings out, we already thought of ways to make the configuration of them easier. I cannot tell much more at this point, but it will get even better!"
    - title: Comparison Blog Posts
      description: Write blog posts comparing the Portmaster with different alternatives. What does the Portmaster do better? Where are others better? Be honest.
      projects:
        - Website
      team:
        - David
        - Pranav
      progress:
        - type: 'h5'
          text: "Paused A Bit During February"
        - type: p
          text: "Even though \"Portmaster vs Simplewall\" has already gotten far and Pranav continues to work on the next post - the step for publishing did not get any progress since Daniel's resources were needed elsewhere. We shall see how this progresses in March."
  postponed:
  discarded:
---

{% include progress-update-tablecards.html %}
