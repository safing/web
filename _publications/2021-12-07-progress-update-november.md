---
# possible values: blog video podcast
category: blog
layout:   blog
# ⚠️ ALWAYS follow this format: "#001 - Some sweet title"
# this has to be consistent for displaying only the episode number or only the title
title: "#016 - Progress Update November"
date: 2021-12-07
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
    - title: Alpha + In-App Account Login
      description:
        - Prepare to get rid of SPN pre-orders by implementing the In-App login into the Portmaster.
      projects:
        - SPN
        - Portmaster
      progress:
        - type: 'h5'
          text: "SPN Reaches Alpha"
        - type: p
          text: "Two things kept the SPN from reaching the Alpha phase. The In-App Login and a way to show customers what the SPN really is doing. Daniel and Patrick spent most of the last month working on this feature and I am happy to say they completed an amazing job."
        - type: p
          text: "Now, as an SPN customer you can log in to your account via the Portmaster and see all connections and servers you are using on a neat map."
        - type: p
          text: "This is a big milestone with a lot more to celebrate and talk about:"
        - type: a
          text: "Dive Into the Announcement Blog Post + See the SPN in Action"
          href: "https://safing.io/blog/2021/12/06/spn-reaches-alpha/"
      team:
        - Daniel
        - Patrick
    - title: Compatibility Assistant
      description:
        - Portmaster users regularly run into different compatibility issues, breaking system integration, DNS or specific apps.
        - Implement self-checks so the Portmaster can notify users about these issues. Improving their understanding of their state might also help in their issue reporting.
      projects:
        - Portmaster
      progress:
        - type: 'h5'
          text: "Portmaster Now Makes Local Self-Checks"
        - type: p
          text: "Daniel also found the time to squeeze this feature into his tight schedule. The Portmaster now checks for Integration, Compatibility and Secure DNS issues. Since technical integration was not too complicated this could move rather swiftly."
        - type: p
          text: "Next to the technical aspect this task also required some brainpower in order to communicate the issue in an easy way; as well as thinking about how to integrate it into the User Interface. With all that done, affected users now get notified whenever an issue occurs. We hope you also feel this is a good step for the Alpha software."
      team:
        - Daniel
    - title: Cryptocurrency Payments
      description:
        Now that the tech is in place, set up the required back office structures in order to activate this feature.
      progress:
        - type: 'h5'
          text: "SPN Payments Now Accept Bitcoin, Ethereum and Monero"
        - type: p
          text: "Last month we talked about how the tech behind crypto payments was ready, but the back office still had a few tasks to do. Well, glad to say that is done and dusted. Raphael spent a good amount of time setting up the various crypto addresses. Tedious, but we think it was worth it."
      team:
        - Raphael
      projects:
        - Back Office
    - title: Credit Card Payments
      description: Enable you to pay for the SPN with credit cards.
      projects:
        - Website
      progress:
        - type: 'h5'
          text: "Third Implementation Attempt Was the Charm"
        - type: p
          text: "A somewhat fun fact: this implementation actually is our third attempt at adding credit card payments. We know many of you asked for this, but previously different obstacles lead us to abort the project. Twice."
        - type: 'h5'
          text: "Basic Setup Sped Things Up"
        - type: p
          text: "This time around we kept things simple. Make it super clear a third party (Stripe) is involved and hence just implement a simple checkout system where a customer top ups their account without automatic recharging. Alex dug into this at the beginning of the month and was done before the month ended. Great job!"
      team:
        - Alex
    - title: Product Feature Videos
      description:
        Show what the Portmaster / the SPN are all about; in video format. Display them on the website where fitting.
      progress:
        - type: 'h5'
          text: "The Last \"Coming Soon\" Lie Has Been Removed"
        - type: p
          text: "What is the biggest lie on the Internet? Yeah: \"Coming Soon\"."
        - type: p
          text: "Mid 2020, after realizing we too often over-promised and under-delivered; we stopped communicating deadlines, introduced the Next Page and started with these progress updates. Today, we feel much more confident in our communication, and I hope you enjoy this way of communication too."
        - type: p
          text: "But with all the positive changes, there still was this nasty element on our website. On the SPN page there was this placeholder image saying a video would be \"coming soon\". We always planned to insert a real video, since early 2020. But other things always turned out to be more important. Lol."
        - type: 'h5'
          text: "SPN Product Video Is Here, Portmaster In the Pipeline"
        - type: p
          text: "Anyway, long story short, that was finally removed. You can now jump into a video on the SPN page where product is showcased, Twitch style. Tabi and David worked on this task, with another video about the Portmaster done as well. It is only waiting for a publishing date. Stay tuned."
        - type: a
          text: "Check Out the Video on the SPN Page"
          href: "https://safing.io/spn/"
      team:
        - David
        - Tabitha
      projects:
        - Marketing
  in_progress:
    - title: Bug Hunting
      description:
        Hunt down bugs that dug up during our feature development focus weeks. Fix as many as you can.
      projects:
        - SPN
        - Portmaster
      progress:
        - type: 'h5'
          text: "The Hunt Has Started"
        - type: p
          text: "Bug fixing normally happens regularly, but with all our attention focusing on the SPN Alpha release, a few bugs piled up and did not get the attention they deserve. The next weeks we will be focusing on tackling some of the bugs backlog."
        - type: p
          text: "On this note, thank you so much to everyone making reports! Only through you can we find bugs and edge cases to further mature the Portmaster. Also, we expect some SPN bugs to come in which we naturally will tackle as soon as possible too."
        - type: p
          text: "Quick sidenote: in case you did not know, you can easily report bugs from within the Portmaster Application. The question mark on the left navbar will lead the way."
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
          text: "Progress Paused Due to Focus on SPN Alpha"
        - type: p
          text: "We already came pretty far with this task in October. The only thing missing was merging all our work into the (currently outdated) packaging repository. We thought we would finish it in November, but the SPN Alpha launch turned out to require all of Patrick's and Daniel's attention hence we paused this. Next chance: December. Fingers crossed."
      team:
        - Patrick
    - title: Simplify Portmaster Settings
      description:
        - Current Portmaster settings are complicated. Especially settings connected to the Network Ratings are hard to grasp for new users. Re-imagine and simplify.
      projects:
        - Portmaster
      progress:
        - type: 'h5'
          text: "Progress Paused Due to Focus on SPN Alpha"
        - type: p
          text: "Same story here, the designs already are ready for this task, but the SPN Alpha launch turned out to require all of Patrick's and Daniel's attention hence we paused this. Next chance: December. Fingers crossed."
      team:
        - Luke
        - Patrick
    - title: Evaluate Custom Filter Lists
      description: Research how custom filter lists could be integrated into the Portmaster. After the evaluation decide whether to move this forward or not.
      projects:
        - Portmaster
      progress:
        - type: 'h5'
          text: "Evaluation Just Started Out"
        - type: p
          text: "We hear you! A lot of people have been asking about custom filter lists recently, so we decided to look into this a bit more. First we will look into the technical feasibility of this feature. We feel pretty confident that there will be a solution to this. Depending on the results and its complexity this might even be done this month. Or later. We shall see - will keep you posted as always."
      team:
        - Daniel
    - title: Comparison Blog Posts
      description: Write blog posts comparing the Portmaster with different alternatives. What does the Portmaster do better? Where are others better? Be honest.
      projects:
        - Website
      progress:
        - type: 'h5'
          text: "Portmaster vs Pi-hole Coming Up"
        - type: p
          text: "A few months ago, Pranav, a freelancer & privacy enthusiast reached out and proposed co-operation. After an evaluation, we saw a great fit with his writing skills. We at Safing have so many planned blogs but only rarely does this area get a lot of attention - next to the update blogs."
        - type: p
          text: "So focusing on the Portmaster comparison blogs for now, I can already tell that the first blog post is wrapping up. Portmaster vs Pi-hole. Simplewall is the next planned post. Looking forward to see what you all thing!"
        - type: a
          text: "Subscribe to the RSS Feed so you do not miss it"
          href: "https://safing.io/blog.xml"
      team:
        - David
        - Pranav
    - title: Internal Tailwind Docs
      description:
        - Create our own docs page where Safing styled tailwind elements are displayed.
        - Make it easy to copy paste HTML when creating new sites or elements.
      projects:
        - Website
      progress:
        - type: 'h5'
          text: "Internal Docs Are Nearing Completion"
        - type: p
          text: "This is a field where you will not see a lot of impact directly, but for us this is becoming a very cool project. If you are a web developer you might know of CSS libraries like Bootstrap, Fomantic, etc... What those have libraries have in common are their docs, where you can easily see what elements exist and then simply copy paste them where needed."
        - type: p
          text: "Luke is basically creating that for our CSS. It is built with tailwind, but will feel like bootstrap. Web developers will know what I mean. The project has come pretty far, it feels like it is nearing completion."
      team:
        - Luke
  postponed:
  discarded:
---


<div class="space-y-10">
  {% if page.cards.done.size > 0 %}
    <div class="space-y-10">
      <div class="space-y-3" style="max-width: 750px;">
        <h3>Completed</h3>
        <p>A list of work packages we've fully wrapped up this month. Expand any to find out more about its conclusion.</p>
      </div>
      <div class="space-y-3">
        {% for card in page.cards.done %}
          {% include project_tablecard.html state = 'done' %}
        {% endfor %}
      </div>
    </div>
  {% endif %}
  {% if page.cards.in_progress.size > 0 %}
    <div class="space-y-10">
      <div class="space-y-3" style="max-width: 750px;">
        <h3>In Progress</h3>
        <p>Expand any work package to find out more about its progress, obstacles and sub-achievements.</p>
      </div>
      <div class="space-y-3">
        {% for card in page.cards.in_progress %}
          {% include project_tablecard.html state = 'in_progress' %}
        {% endfor %}
      </div>
    </div>
  {% endif %}
  {% if page.cards.discarded.size > 0 %}
    <div class="space-y-10">
      <div class="space-y-3" style="max-width: 750px;">
        <h3>Discarded</h3>
        <p>Work packages we for one reason or the other decided to discard. Click on a package to find out the exact reasons why.</p>
      </div>
      <div class="space-y-3">
        {% for card in page.cards.discarded %}
          {% include project_tablecard.html state = 'discarded' %}
        {% endfor %}
      </div>
    </div>
  {% endif %}
  {% if page.cards.postponed.size > 0 %}
    <div class="space-y-10">
      <div class="space-y-3" style="max-width: 750px;">
        <h3>Postponed</h3>
        <p>Work packages we for one reason or the other decided to postpone. Click on a package to find out the exact reasons why.</p>
      </div>
      <div class="space-y-3">
        {% for card in page.cards.postponed %}
          {% include project_tablecard.html state = 'postponed' %}
        {% endfor %}
      </div>
    </div>
  {% endif %}
</div>
