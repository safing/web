---
# possible values: blog video podcast
category: blog
layout:   blog
# ⚠️ ALWAYS follow this format: "#001 - Some sweet title"
# this has to be consistent for displaying only the episode number or only the title
title: "#019 - Progress Update June"
date: 2022-06-23
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
    - title: On-Boarding Screens
      description:
        - Introduce new users to the core concepts and features of Portmaster. Make onboarding easier.
      projects:
        - Portmaster
      team:
        - Patrick
        - David
        - Luke
      progress:
        - type: 'h5'
          text: "New Users Were Sometimes Caught Off-Guard"
        - type: p
          text: "One thing Portmaster did not do at all was introducing new users to the software. After several reports of people being caught off-guard about some of Portmaster's features, we decided it was time to improve on-boarding."
        - type: 'h5'
          text: Fresh Installs Now Get Introduction Screens
        - type: p
          text: "After the decision Luke drafted some concepts and we landed on the introduction screens. The next question naturally was: \"What should be on there? And how many slides should we have?\""
        - type: p
          text: "We want to inform users, but we do not want to overwhelm them - finding that balance can be tricky. In the end, we decided to inform about the powerful defaults, the filter lists and the DNS. And then wrap things up by showing how a user can learn even more. We feel that hit the balance quite well."
        - type: p
          text: "Another tricky question in the process was whether or not to show the introduction screen to current users. Some of them have been using the Portmaster for over a year, for others it will be their first week using it. After some discussions we decided it was best to inform everyone, making some experts think \"I already know this.\" instead of having beginners left in the dark just because they installed the software a week before the on-boarding got better."
    - title: Installer Checksums
      description:
        - Host an official list of checksums for all our installers so users can verify their downloads.
      projects:
        - Portmaster
      team:
        - Daniel
      progress:
        - type: 'h5'
          text: "Created Dedicated GitHub Repo for Checksums"
        - type: p
          text: "Many people have asked for checksums, and we are happy to have found the time to tackle this. As a first step, all released installers and assets now have their respective checksums in our new GitHub checksums repository."
        - type: p
          text: "In the future, we will also sign Portmaster updates. This will happen before Beta, so it should not be too far off."
        - type: a
          text: Check out the /checksums repository
          href: "https://github.com/safing/checksums/"
    - title: SPN Server Upgrades
      description:
        - Improve our server infrastructure so SPN users get better stability and higher speeds.
      projects:
        - SPN
      team:
        - Daniel
      progress:
        - type: 'h5'
          text: "More Stability, UDP Support & Better Speeds"
        - type: p
          text: "The SPN has received many vital stability fixes. We added more server in the US for better coverage. As a result bandwidth should now be able to go up to 100MBit/s."
        - type: p
          text: "Support for UDP connections via the SPN has been tested and the remaining bugs in that regard were fixed."
        - type: p
          text: "Re-using of nodes is now correctly limited in Portmaster in order to reduce interference between connections. Additionally, Portmaster now recovers the connection to the SPN when coming from sleep, suspend or other unusual network states. Hope you enjoy all of this!"
    - title: Per-App SPN Settings
      description:
        - Let SPN users select at which server they want to exit for certain apps. Also make it easy to exclude certain apps or websites from using the SPN, per-app and globally.
      projects:
        - SPN
      team:
        - Daniel
      progress:
        - type: 'h5'
          text: "The User Interface Did Not Surface All of SPN's Features"
        - type: p
          text: "The vision for the SPN, just as with the Portmaster, is user control. The technology of the SPN is already built for granular control, but the SPN User Interface does not yet surface all of its features. The recent addition was the next step in an iterative process."
        - type: 'h5'
          text: "You Can Now Control SPN Rules Per-App"
        - type: p
          text: "There are plenty of new SPN rules for you to configure. A few examples include: (*) exclude domains from SPN use, (*) configure different apps to always exit in certain locations or (*) never exit your traffic in certain countries."
        - type: 'h5'
          text: "Configure the Routing Algorithm For Each App Too"
        - type: p
          text: "For all the ones who want to dive even deeper into the SPN, you can now configure settings to customize the routing algorithm, which is used to calculate the route through the SPN. So now you can prioritize speed for some apps but privacy for others. Give it a go!"
        - type: a
          text: Check Out the SPN Routing Algorithm Setting
          href: "https://docs.safing.io/portmaster/settings#spn/routingAlgorithm"
    - title: Gift Card Support
      description: Enable SPN gift cards so users can receive SPN credit through gift card codes.
      projects:
        - Website
      team:
        - Alex
      progress:
        - type: 'h5'
          text: "Gift Cards Are Now Supported, Unlocking Lots of Possibilities"
        - type: p
          text: "Last year we got approached by some of you, asking if we would sell gift cards. Happy to announce that now we do! We had to tweak our backend a bit to make this possible but that was no real challenge for Alex. This feature unlocks a lot of possibilities - and might even include a giveaway at some point ;)"
        - type: 'h5'
          text: "User Experience Still Needs to Improve"
        - type: p
          text: "Although the technical implementation went smooth, we realized that the Account and Payment System is far from ideal. We went with a quick fix solution for now, but we do know that a lot of things need to change in order to streamline the payment process and make it easy to use."
        - type: 'h5'
          text: "First SPN Reseller: ProxyStore"
        - type: p
          text: "One thing that is great about gift cards is that we can now sell them to resellers. And no better way to start off than with ProxyStore, an initiative from Lepizig, Germany. They advocate for and enable more private purchases, both online and on site. So if you live nearby, you could even drop by and purchase the SPN with cash in person. The ProxyStore gives you another option of buying the SPN in a privacy respecting way."
        - type: a
          text: Check Out the Proxy Store
          href: "https://proxysto.re/en/index.html"
    - title: OGP for blog posts etc
      description: Make sharing blog posts, podcasts or Safing pages prettier by adding OGP info so that the external site can easily display an image and relevant text.
      projects:
        - Website
      team:
        - Luke
      progress:
        - type: 'h5'
          text: "Prettier Social Sharing Is Here"
        - type: p
          text: "In case you do not know what OGP tags are, they are tags used by social websites to nicely display shared content. Like when you share a blog post on Twitter, you want it to show the blog's image. Twitter visits the site and checks what the OGP tag says where to get the image."
        - type: p
          text: "At Safing we did not have these extra tags for a long time, hence when sites or blog posts were shared online, it only was very basic and sites could not display anything fancy at all. This finally changed!"
        - type: 'h5'
          text: "Testing Was A Bit Tricky"
        - type: p
          text: "Luke spent some time to research all about the OGP tags and then implemented them locally. The only tricky part is, you cannot really test how things turn out before it goes live. Because you cannot tell a social media bot to crawl your local website version - so we just had to publish the changes in good faith. Happy to say all went well."
  in_progress:
    - title: Full-Device Network Activity
      description:
        - Enable users to view connections across all applications. Make it easy to filter based on individual needs.
      projects:
        - Portmaster
      team:
        - Patrick
        - Luke
      progress:
        - type: 'h5'
          text: "Concept Done, Implementation Is in the Final Stretch"
        - type: p
          text: "On our quest to bring you all the information about your devices network activity, we had to do a bigger rework for this project. As you might know, the current network overview only allows to view one app at a time. But we want you to see EVERYTHING at once. And then be able to sort and filter as your heart desires."
        - type: p
          text: "Naturally, that means the Portmaster has to show and handle a lot more connections at once. For this to work, we had to evaluate how to approach this from a technical perspective. This got completed. After that, Luke had to design concepts for the User Interface, which also is done. And finally, Patrick had to implement the concept into reality in the Portmaster UI. This is where we are at - in the final stretch."
        - type: 'h5'
          text: "Many Challenges, But Worth it Since It Will Enable the History Module"
        - type: p
          text: "Through the whole process there were a lot of challenges that came up, especially the technical questions of how to handle the mass of connections at once. We had to re-structure our database system in order to enable this feature. Even though this meant a lot of work, we are super excited for this is setting the stage for future features. History Module to view more than 10 minutes? Yes, that will be possible to develop after this project is done. Looking forward!"
        - type: p
          text: "For the curious: our recent Live Stream showed a sneak peek of the Network Activity - so go check that out!"
        - type: a
          text: Get a sneak peek of the Network Activity in the latest live stream
          href: "https://youtu.be/CDZCj9861w8?t=1428"
    - title: SPN Interface in PM
      description:
        - The SPN interface in the Portmaster was a quick first implementation. Now that the SPN has been out a few months, re-imagine the interface and make it easy to see and configure the SPN in action.
      projects:
        - SPN
      team:
        - Luke
      progress:
        - type: 'h5'
          text: "Current SPN User Interface Was A Rough Solution"
        - type: p
          text: "The current SPN UI brought together some technical ideas with a very rudimentary design concept from Luke, as we did not have too much time to get out the first version."
        - type: p
          text: "Now that we have more experience with how we use the SPN and what elements you and I expect, the goal for this task is to make the UI a lot easier. Easier to find information, easier to understand information and easier to interact with the UI."
        - type: 'h5'
          text: "There Are Challenges Within the Concept Phase"
        - type: p
          text: "As we are currently in the concept and design phase, there are some hard questions we need to answer: What information should we show? What information is not that important? How do we show the information so it is easy to understand? Can we simplify things? When is it too much information?"
        - type: p
          text: "All of these questions are being worked on. We know we will not have the perfect solution, but we do want to make some big steps forward. We have some cool ideas in the pipes, but you will have to see whether or not they make the final cut. Stay tuned!"

    - title: Comparison Blog Posts
      description: Write blog posts comparing the Portmaster with different alternatives. What does the Portmaster do better? Where are others better? Be honest.
      projects:
        - Website
      team:
        - David
        - Pranav
      progress:
        - type: 'h5'
          text: "Portmaster vs Simplewall Is Out"
        - type: p
          text: "A good while back, the next comparison blog post Portmaster vs Simplewall got published. Pranav researched a lot for this one, and his write-up is really worth checking out! And if you are a lazy reader, there is an overview chart to give you an idea in less than a minute ;)"
        - type: 'h5'
          text: "Portmaster vs GlassWire in the Pipeline"
        - type: p
          text: "Next in the pipeline, Glasswire. And good news, Pranav already completed the blog post. Now it just needs some mastering and a technical accuracy check from Daniel and off it will go. Just got to find some time in a rather full schedule first. But we will try to get this out of the door in the near future, which will wrap up the first series."
        - type: a
          text: Check Out the Simplewall Comparison Blog Post
          href: "https://safing.io/blog/2022/04/11/portmaster-vs-simplewall/"
    - title: Two-Factor Authentication (2FA)
      description: Enable customers to secure their accounts with different methods of 2FA.
      projects:
        - Website
      team:
        - Alex
      progress:
        - type: 'h5'
          text: "2FA Are in the Works"
        - type: p
          text: "We at Safing endorse the use of multi factor logins, but have not yet implemented them for your Safing accounts. That is currently being developed."
        - type: p
          text: "Plenty of research was done on this front, and as a first step we will support time-based one-time passwords. You will be able to use this with apps such as Aegis Authenticator. Later down the road we will probably add more Multi-Factor-Authentication options. We will keep you up to date!"
    - title: SPN Page Revamp
      description: Now that the SPN has been out a few months, redesign the SPN product page to bring it up to speed. Re-think the presented features and include screenshots.
      projects:
        - Website
      team:
        - Luke
        - Raphael
      progress:
        - type: 'h5'
          text: "Working On Clearer Communication"
        - type: p
          text: "Before the SPN was publicly available, we already had a page on the website explaining what it was. Looking back, talking about a product before it is out is kind of like selling hot air: it is just really hard to grasp."
        - type: p
          text: "Now that the SPN has been out for a while, it is much easier to communicate what it is all about. We just did not have time to bring the SPN page up to date. This is the goal and is currently being worked on."
        - type: 'h5'
          text: "Multi-Step Process Has Been Specified"
        - type: p
          text: "There are a lot of areas which need improvement, but doing them all at once would take a long time. That is why Luke - when conceptualizing this project - split things up into multiple steps. That way you will see the improvements faster. First up: a new header displaying the pricing up-front, which also means the video gets moved down a bit. It will _really_ look much better!"
  postponed:
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
          text: "Work Postponed Due to Priorities"
        - type: p
          text: "We did complete a lot of this package, but some of the last steps got pushed back due to priorities lying elsewhere; specifically the Full-Device Network Activity."
        - type: p
          text: "We hope to continue with this work package as resources free up again - but we shall see. Of course we will keep you posted."
  discarded:
---

{% include progress-update-tablecards.html %}
