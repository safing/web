---
# possible values: blog video podcast
category: blog
layout:   blog
# ⚠️ ALWAYS follow this format: "#001 - Some sweet title"
# this has to be consistent for displaying only the episode number or only the title
title: "#011 - Progress Update May"
date: 2021-06-02
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
    - title: 'Create RSS Feeds'
      description:
        - Revisit the RSS feeds for the blog, the podcast and maybe even the newsletter. We'll see. Make them work.
      team:
        - David
      projects:
        - Website
      progress:
        - type: 'h5'
          text: "Safing Blog RSS Finally Arrived"
        - type: p
          text: "This has been a request for over a year. And to be honest, the reason we never added this was kinda silly: Since progress update posts (like the one you are reading now) heavily rely on CSS tricks in order to support noJS, a RSS reader cannot properly format the progress update. Instead it displays a rather broken blog post. With no easy solution in sight, the RSS feed just got postponed indefinitely. But after finally revisiting this topic we came up with a simple solution. Just add a disclaimer to progress update posts that they are only viewable in the web-view. Problem solved. Proper communication, and finally a RSS feed everyone can subscribe to."
        - type: a
          text: Subscribe to the RSS blog feed
          href: "https://safing.io/blog.xml/"
    - title: "Techlore Review"
      description: Reach out to Techlore and take up the offer for a Portmaster/Safing review. Prepare everything as best as we can so the experience is smooth to increase the chances of a positive verdict.
      team:
        - David
      projects:
        - Marketing
      progress:
        - type: 'h5'
          text: "First Contact With Techlore Was in February"
        - type: p
          text: "Earlier in 2021 David had a call with Henry where the offer of an external review came up. Henry was very clear: there was no way we could influence anything they researched, said, or what the overall \"verdict\" they would give of Safing and the products. Given the state of the Portmaster at that time, we did not feel confident our product was ready to be tested and investigated. We asked if we could follow up at a later point, which was fine with them."
        - type: 'h5'
          text: "After Maturing the Portmaster Further We Followed Up In Late April"
        - type: p
          text: "As the months went by, in which we were able to fix the Portmaster's rough bugs and issues with our earliest adopters, we slowly came to a point where we felt satisfied enough for a review. David contacted Henry and said we would be ready in May. After some back and forth Henry communicated Techlore's timeline on the matter, video scheduled to be released on May the 21st. Now this was really going to happen. We were both excited and nervous: Techlore is a known voice in the privacy community, which is 100% our target group. What would they think? Would they like what they saw?"
        - type: 'h5'
          text: "Video Shoot with David Happened A Few Days Before Release"
        - type: p
          text: "With these questions in the back of our heads we knew we could not do more than just wait and see - and it does not get boring at Safing anyway, our work-stack is always piled high. The week before the release Henry reached out and asked if one of us would feel comfortable to be on camera and answer some questions. David agreed and scheduled the recording for Monday before the video dropped. Questions were sent beforehand and after the shot Techlore cut and edited parts into the video as they saw fit."
        - type: 'h5'
          text: "Excited to Welcome So Many Techlore Followers"
        - type: p
          text: "On Friday evening we eagerly watched the video as it dropped and were thrilled seeing the Techlore team liked what they found at Safing. And so many viewers came by and gave the Portmaster a shot. We are super thankful for all the reports and feedback we have received through this channel! It was an intense weekend, but that was a nice problem to have. Thanks Techlore For the Review - continue doing you!"
        - type: a
          text: "Watch the Techlore Review of Portmaster and Safing"
          href: "https://safing.io/video/2021/05/27/techlore-reviews-portmaster-safing/"
    - title: "Try Content Marketing"
      description: Draft and create content which provides lots of value to the readers. Co-op with others from the scene, participate in the discussion and through that, indirectly spread the awareness of Safing.
      team:
        - David
      projects:
        - Marketing
      progress:
        - type: 'h5'
          text: "Topic Dive on Business Models With TheHatedOne Was Fun"
        - type: p
          text: "We are still new with content marketing. But our verdict on the matter is that it is fun to do. The research on the matter and the discussion with TheHatedOne was really valuable to us, and we hope for our readers and listeners too. We definitely want to make more of these. With whom? Well, you will have to wait and see - and feel free to reach out, we always enjoy connecting with other advocates from the scene who might want to join a talk."
        - type: 'h5'
          text: "Next Blog Posts Might Get A Bit Shorter"
        - type: p
          text: "Both the podcast and the resulting blog post on business models got really long. And while I (David) have no issue with a longer podcast episode, I want to experiment a bit more with shorter blog posts. Deliver the point with fewer words. We will see what happens, but for now this trial is completed. We will keep you posted - oh, and you can always just subscribe to the RSS feed now ;)"
        - type: a
          text: "Listen to the Podcast Episode with TheHatedOne"
          href: "https://safing.io/podcast/2021/05/06/how-weak-business-models-corrupt-privacy-projects/"
    - title: Netidee Midterm Report
      description: Update the Netidee of our current progress and status. Also write blog posts for the netidee platform.
      team:
        - Tabitha
        - Raphael
      projects:
        - Back Office
      progress:
        - type: 'h5'
          text: "Tireless Reports By the Back Office"
        - type: p
          text: "What would we do without our invaluable workers in the back office? This month we submitted the midterm report of the current grant period with Netidee. Short side-story, Netidee was our first ever granter. Only with them were we able to kick things off. Super thankful for their grants who cover some of the research costs to this day!"
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
          text: "Network Flow Management Improvements"
        - type: p
          text: "As the SPN tunnels connections on OSI layer 5, it has to take care of network flow and congestion management itself. Taking this further, as the SPN allows the creation of multi-hop tunnels that split mid-way in a tree like fashion, the network flow management has to keep tabs on all these buffers in order to guarantee smooth passage through the network at all times. Daniel found some flaws in an earlier design and started improving this vital aspect of the SPN this month."
    - title: "Create \"Get Help\" Page"
      description: "Design and implement a \"Get Help\" section within the Portmaster so users can easily get help with issues or even smoothly report issues directly within the app."
      team:
        - Luke
        - Patrick
      projects:
        - Portmaster
      progress:
        - type: 'h5'
          text: "Get Help and Report Issues Directly Within Portmaster"
        - type: p
          text: "With more and more people downloading and using the Portmaster, it became clear that not too many users give feedback via GitHub or mail. This is totally fine, since not everybody is geeky enough to join and understand GitHub. But we do want to include as many views as possible. That is why we Luke and Patrick are working on a feature where it is not only possible to easily get help from within the Portmaster, but also send us bug reports and suggestions with a few clicks. No account required."
        - type: 'h5'
          text: "Concept Came Very Far, Implementation Started"
        - type: p
          text: "When you would see the designs, you would likely get just as excited as we are. We cannot describe everything this big feature will include, as it is best shown. But so much be told already: the designs are 🔥 and Patrick already started implementing parts of it. Stay tuned!"
    - title: Polish UI Design
      description: From a design perspective, the new User Interface was simply the minimal viable product. Go through each page and element in order to bring it up to speed with the concept design.
      team:
        - Luke
        - Patrick
      projects:
        - Portmaster
      progress:
        - type: 'h5'
          text: "Bigger Revamps Halted In Favor of \"Get Help\" Page"
        - type: p
          text: "We are constantly tweaking small issues here and there, but bigger revamps in the UI will have to wait until the \"Get Help\" page is launched."
    - title: Cryptocurrency Payments
      description: Enable you to pay for the SPN with cryptocurrencies such as Bitcoin, Ethereum and Monero
      projects:
        - Website
      team:
        - Alex
      progress:
        - type: 'h5'
          text: "Accounting Module Still In the Works"
        - type: p
          text: "The challenge of fulfilling all accounting requirements for crypto payments is still in the works. Alex already completed an extensive specification of the feature and is currently working on implementation. We will keep you in the loop."
    - title: Apply for COVID Grant
      description: Lower Austria currently has an open grant which provides funds to companies who are making positive efforts within the COVID pandemic. With so much of our lives moving online, online privacy is becoming more important than ever. Apply for this grant.
      team:
        - Tabitha
        - Raphael
      projects:
        - Back Office
      progress:
        - type: 'h5'
          text: "Application Almost Sent"
        - type: p
          text: "The Lower Austria, the state in which Safing is located, opened up a grant for companies who work on positive efforts within the COVID pandemic. With so much of our lives going digital, online privacy has become more important than ever. Tabi and Raphael worked on applying and it is to be seen whether they accept us or not. If we receive money from them, we will naturally update our influences section."
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
