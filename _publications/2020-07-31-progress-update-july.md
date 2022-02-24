---
# possible values: blog video podcast
category: blog
layout:   blog
# ⚠️ ALWAYS follow this format: "#001 - Some sweet title"
# this has to be consistent for displaying only the episode number or only the title
title: "#001 - Progress Update July"
date: 2020-07-31
author: David
custom_thumbnail_name: progress-update

# Progress Update blogs make a snapshot of the current next page
# and then add a "progress: description" to it.
# -> this is cool for history purposes

# And in there, describe the progress, challenges, cool moments etc..
# You may always refer to previous blog posts to get an idea.
# if a project gets completed / abandoned, add a finish date

# also set this attribute to true so the website does its magic with it
progress_update: true

# snapshot as of 2020/07/31
cards:
  done:
    - title: Improve Installation Process
      description:
        - Instead of downloading individual components on first start-up, download them during the installation process.
      projects:
        - Portmaster
      team:
        - Patrick
      progress:
        - type: 'h5'
          text: Smoother Installation Is Here
        - type: p
          text: "It was slightly confusing to install a software which did the \"proper\" installation at its first start up. Next to correctly moving this process into the real installation, while at it, Patrick decided to refactor a lot of related code to further smoothen the process. We're happy with the results."
    - title: CI & Arch Installer
      description:
        - Package the Portmaster for Arch Linux.
        - While at it implement Continuous Integration via Github Actions to automatically test all future installs on Windows, Debian & Arch.
      projects:
        - Portmaster
      team:
        - Patrick
      progress:
        - type: 'h5'
          text: All Went Well
        - type: p
          text: Through this project Patrick got to tinker around with Github Actions for the first time, which he really enjoyed. Having completed this task not only helps distributing to Arch users, but will also help the stability of all future Portmaster builds.
        - type: 'h5'
          text: More Security As A Side Effect
        - type: p
          text: While tackling the installer for the second Linux distribution Arch, Patrick pointed out the opt-in security of their service files. Without defining restrictions, an app like the Portmaster gets root access, so when a malicious actor takes over the Portmaster it would give him the tools to take over the whole system. As a result we defined strict rules so the Portmaster only gets read access for most of the system.
        - type: a
          href: https://github.com/safing/portmaster-packaging/blob/master/linux/portmaster.service
          text: Look at the service config
    - title: Funding Proposals
      description:
        - Request different grants to help us out financially with all the research & development still ahead of us.
        - Apply follow up fundings both from the Netidee and the FFG.
      link:
        text: "More on Transparent Funding..."
        url: "/ownership/#finances"
      projects:
        - Back Office
      team:
        - Tabitha
        - Raphael
      progress:
        - type: 'h5'
          text: FFG Proposal Was 32 Pages Long
        - type: p
          text: Applying for grants takes a lot of work. We defined 14 R&D goals for the coming year. This time the proposal was extra tricky since we decided to write it in German. Most of our previous applications were written in English, so this time translating texts was also part of the work load. But we are happy we could wrap this up. Result coming in September.
        - type: 'h5'
          text: Netidee Application Submitted Too
        - type: p
          text: Safing started out with a funding from Netidee four years ago, so applying for another grant felt special. The extent of the defined work packages are smaller compared to the FFG, so it did not take as long.
  in_progress:
    - title: SPN Pre-Alpha
      description:
        - Deploy the SPN in v0.1. Give access to Marvin and Visionary Kickstarter backers.
        - Communicate that this is only the first step and that it will take a few weeks or months until the network is stable enough to support hundreds/thousands of users.
      projects:
        - SPN
      team:
        - Daniel
        - Patrick
      progress:
        - type: 'h5'
          text: Three Major Refactors Made Us Slower But More Secure
        - type: p
          text: "Since our SPN proof of concept back in 2018, three major events resulted in making the final product more secure and stable, but also increased our workload:"
        - type: ol
          lis:
            - the external code audit of our cryptographic library Jess by Cure53 gave valuable technical advice how to further tighten this aspect
            - the decision to split the gossiping between network nodes into two levels of communication
            - the Portmaster has matured a lot since its release back in April, resulting in a lot of code-refactors on the client side
        - type: 'h5'
          text: Code Audit By Cure53
        - type: p
          text: "Back in January we paid some of the best in the field to audit our cryptographic library. Their insight and expertise challenged us, in a very good way. The foundation was solid, but it was clear we could improve things here and there. During these months, we could progress our cryptography library into what it is now. This module is complete, but also added workload to the timeline."
        - type: a
          text: View Cure53's audit report
          href: https://cure53.de/pentest-report_safing-jess.pdf
        - type: br
        - type: a
          text: Inspect the code of Jess, our cryptography library
          href: https://github.com/Safing/jess
        - type: 'h5'
          text: Refactoring The Gossiping
        - type: p
          text: "Instead of sending all data from servers to clients, we decided to split the messages into a \"big message\" and a \"small message\". The big message is sent on setup and contains the servers public key and lots of meta-data. The small message contains the servers active links to other nodes and its most current ephemeral keys (for 0-RTT perfect forward & backward secrecy connections). The small message will communicate with clients regularly while the big message will be sent less frequent to prevent unnecessary communication. Naturally, this resulted in a big refactor and a delay in timeline."
        - type: p
          text: This module is nearly done as well, just a few polishes here and there as well as some more integration tests are needed to wrap this up.
        - type: a
          text: View the Pull Request of this refactor
          href: https://github.com/safing/spn/pull/1
        - type: 'h5'
          text: "Last Piece of the Puzzle: Client Side Integration"
        - type: p
          text: "The Portmaster has matured a lot in the last few months, hence this also changed a few components which intercept and resolve network connections. This is the final module we are currently working on until the first testers can join the network. We are so close, but sadly not there yet. Expect the full SPN engine to start very shortly."
    - title: Safing API
      description:
        - Enable you to sign in to your Safing account on the Portmaster client via the Safing API. Also respond with details regarding your SPN subscription.
        - Implement device management so you can sign out of devices from the Safing website.
      projects:
        - SPN
        - Portmaster
        - Website
      team:
        - David
        - Daniel
      progress:
        - type: 'h5'
          text: We Completed the Server Part
        - type: p
          text: The Safing API has come very far. It actually already is online, signing in valid users and responding with information on each users SPN subscription status. Setting the API up securely took quite a lot of planning, but we are happy about the result.
        - type: 'h5'
          text: Designs Are Done Too
        - type: p
          text: Now in the Portmaster part, we both need to provide an interface where you can log in to the SPN and where it displays your current account status. The designs for this have also been completed by Luke.
        - type: 'h5'
          text: What is Missing is The Client Side
        - type: p
          text: The only puzzle piece missing is the frontend implementation, meaning the Portmaster UI actually showing the designs and making the API calls. This project is nearing its completion, so stay tuned!
    - title: IntelHub
      description:
        - Create a service that aggregates filterlists, updates this intelligence frequently and distributes it to Portmaster clients so they do not have to do this resource heavy work themselves.
        - Also aggregate and distribute GeoIP data so the SPN module can calculate up-to-date Internet routes for its circuits.
      projects:
        - Portmaster
      team:
        - Patrick
      progress:
        - type: 'h5'
          text: Watching Filter List Repos
        - type: p
          text: Next to providing aggregated filter lists to the privacy filter module of the Portmaster, we added a feature to the IntelHub so it watches the different list repositories. With this, we will constantly be informed about ongoing changes and be able to quickly inform our users about any impactful changes.
        - type: 'h5'
          text: GeoIP Data is Being Aggregated
        - type: p
          text: The second big part of this work package is to collect and sort GeoIP data so the Portmaster can properly build SPN circuits locally. If you are pinging a server in Europe it would be ineffective to exit the SPN in Asia. Hence, your client needs this data to calculate efficient routes. This data is already being gathered from many different resources and takes our server up to 16 GB of memory when performing an update.
        - type: 'h5'
          text: Polishing Things Up
        - type: p
          text: All in all, Patrick is making great progress and this project is nearing its completion. It just needs a few improvements here and there to then be fully deployed. Expect this to be out soon.
    - title: Portscan Detection
      description: Detect and block malicious actors trying to expose vulnerabilities by scanning through all networking ports on your device. Research thoroughly to prevent false positives.
      projects:
        - Portmaster
      team:
        - Daniel
        - Thomas (Intern)
      progress:
        - type: 'h5'
          text: Lots of Research Went Into This
        - type: p
          text: Although this is a cool feature, it could potentially lead to unwanted side effects. Investigating the impact of this module in a vastness of potential edge cases was the first part we tackled before writing a single line of code.
        - type: 'h5'
          text: Related Bugs Were Found While Implementing
        - type: p
          text: When starting to implement the Portscan, we found several related bugs in the Portmaster. Even though these delayed progress in this work package, it was super helpful to further mature the Portmaster overall.
    - title: Portmaster Documentation
      description:
        - You can see our high level concepts & you can inspect our code. But nothing in between.
        - Fill that gap by providing proper documentation of the Portmaster. What does each component do? With what other components does it interact? Where is its code located?
      projects:
        - Portmaster
        - Website
      team:
        - David
        - Patrick
        - Daniel
      progress:
        - type: 'h5'
          text: Goals Are Specified, Texting Will Start Soon
        - type: p
          text: Since the roadmap was prioritized not much could be done in this field. But since this project is near and dear to us, David will soon fully focus on getting these texts out of the door.
    - title: Administration Interface
      description:
        - Enable admins to easily accept cash payments, manage refunds or suspend rogue users.
        - Also provide some basic insights on signups, payments, survey results, etc...
      projects:
        - Website
      team:
        - Alex
        - Raphael (Intern)
      progress:
        - type: 'h5'
          text: Planning Done, Implementation Pushing Forward
        - type: p
          text: Having started this in July, we started off with planning & specifying this feature. After that was done Alex moved on to its implementation and already made great progress, soon to be reviewed and polished. This project also gave one of our summer interns the possibility to take part and experience a feature development cycle right from the start.
    - title: Next Page & Backlog
      description:
        - Properly communicate what we currently are working on so you know what to expect from us in the nearer future.
        - Also provide a backlog to acknowledge everything that needs to be done further down the road. Encourage participation so you can easily let us know where we might need to adapt or what we might have missed in the bigger picture.
      projects:
        - Website
        - Community
      team:
        - Luke
        - David
      progress:
        - type: 'h5'
          text: Next Page And Progress Update Blog Are Done
        - type: p
          text: Many have come to ask what we are up to and what our plans for the future are. And previously, we communicated deadlines and got into a bunch of uncomfortable situations. But the alternative of just NOT communicating anything is lame too, and certainly nothing we stand for. Both David and Luke ping ponged a lot of ideas until we came up with this approach - hopefully you dig it as much as we do!
        - type: 'h5'
          text: A Lot More Coming Up in the Backlog
        - type: p
          text: This is the first step of two, since we also want to share all about our work packages lined up further down the road. What features will be added to the SPN, the Portmaster, etc.. Well, we want to tell you, so we are working on it.
    - title: Redesign account.safing.io
      description:
        - When visiting https://account.safing.io/ to manage your Safing account, the design clearly breaks from the main website.
        - Unify these designs so you get a more wholesome web experience.
      projects:
        - Website
      team:
        - Luke
      progress:
        - type: 'h5'
          text: It Just Started
        - type: p
          text: This project is fairly new, so not too much could be achieved. The goal is to have a unified design both for the main website and the account part of the website. Luke already started out with some early design concepts.
    - title: "Inception: Reaching Out"
      description:
        - As the SPN will soon see the light of day, the time has come to spread the word, also by spending money.
        - Reach out to YouTube channels and newsletters in the privacy scene who offer sponsored shout-outs.
        - You are very welcome to give us suggestions in this context!
      projects:
        - Marketing
      team:
        - Raphael
        - Tabitha
      progress:
        - type: 'h5'
          text: Slots Have Been Booked
        - type: p
          text: We are happy to already have contacted a few folks where we could book some of their sponsorship slots. Also, some local partners reached out to help us out with marketing opportunities. We will not disclose what will come of it just yet, only after the fact. But next month's update will certainly include more information.
        - type: 'h5'
          text: It's an Evergoing Process
        - type: p
          text: Naturally, we will not be done after a few marketing gigs, which is why we are still on the look-out for further opportunities to spread the word.
        - type: a
          text: "Let us know if you have any ideas on reddit"
          href: "https://reddit.com/r/safing/"
  discarded:
---

{% include progress-update-tablecards.html %}