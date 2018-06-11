---
title: "Safing Guide: Digital Privacy 101"
tags: guide
---

This Guide is updated regularly, future versions will be available under the same URL.

### A word of warning

While this guide is about privacy, it is deeply connected with security and only differs from it in some cases.

Whoever tries to gain security in the digital world will very quickly realize, that the biggest problem is actually a fight between security versus convenience, because in most cases, security is not convenient. Although this is one thing we at Safing thrive to keep out of your as much as possible, there are a lot of things that a software just can't do for you.

This guide starts with the easy and more convenient actions to guard privacy and quite soon will get to things that aren't so convenient and may require some serious work in order to get going.

###

<small>E2/S5/P2</small>

effort
security
probability that this will affect you


## 1 - Turn OFF devices you are not using.

In the past decade, the industry has started to slowly change their devices from having an OFF mode to having a "not really OFF, but still doing things in the background mode".

The current best example would be Smart TVs, with Samsung openly stating, that you should not have confidential conversations near their TVS, because it just might be listening and uploading everything to the Cloud.

**So, get some distributors with a switch, and TURN OFF devices, you are not actively using.**

Yes, it's true, you won't be able to turn on your TV with only a remote anymore.


## Don't type sensitive information on a wireless keyboard.

You me one those, who like sitting on your couch and surfing, ordering stuff on the internet and entering

Well, the thing is, the connection between your wireless keyboard and your device is most certainly not encrypted, your sensitive information is flying in the air and everyone who wants to can catch your stuff out of thin air.

**Never, ever enter sensitive information on a wireless keyboard**

## Do not enter sensitive information into Computers you don't know.

Kiosk or Interet Café PCs.



## Be careful when using untrusted Networks

This includes the network of another company, or a Café WiFi.


## Avoid Data-Hungry Internet Services
This is probably the most challenging, because it hurts convenience the most.
If you can avoid Services like Google (We have Startpage and Duckduckgo!), Facebook (Take a look at Diaspora), Dropbox (Check out MEGA) and other companies that you give massive amounts of data too, but don't pay them a penny.

## Be careful when Services say they use the "Cloud".
In essence, the cloud is just another guys computer, the "Cloud" is such a buzzword, everyone uses it, and you don't know what anyone means by it. Your data may be stored on some random insecure server.

## Use a password manager
Never, ever use the same password with multiple service, use a good password manager, ...

## Be careful when sending sensitive stuff via email.
- Check if service offers SSL
- encrypt sensitive data
  - key over 2nd channel

## Use 2-Factor Authentication anywhere you can!

In order to further guard yourself from stolen passwords, use 2-Factor Authentication (2FA) wherever possible. Banks require this if you want to issue transactions online. In principle with 2FA you have to verify your identity with another code, that either changes in short intervals (mostly 30 econds) or somehow acquire a code that can only be used on time.

2FA can be done in a lot of different ways and some are more secure than others, here they are in order of strength:

- Static list of codes  
  This was used by banks when online banking first started. Consider this your last option.
- Receiving Codes via Text/SMS  
  This is very widely used technique, but there are several ways to successfully attack this method and steal codes. In 2016 NIST stopped recommending it. You should switch to better alternatives as soon as possible. Sometimes also called smsTAN.
- Receiving Codes via an app.  
  This is a lot better than receiving codes via Text/SMS; because an app is able to communicate securely and cannot be compromised that easily, but this then depends on the quality of the app.
- Generating Codes with software  
  This one of the most used methods for 2FA, because it is both easy to set up for websites and rather convenient to use for users. Usually this works by downloading the app Google Authenticator for Android or iOS and scanning a QR-Code with it. The app the generates a new 2FA code every 30 seconds.
- Generating codes with hardware  
  This is by far the most secure method for 2FA, as an attack MUST physically steal your device and possibly a PIN code. These are mostly used by big companies that care about the security of their IT. One other famous example is the Battle.net Authenticator used by many World of Warcraft players.  
  Recently, banks have started to adopt this method by using devices into which you pluck your debit card and enter you PIN code to generate a new 2FA code. There are also referred to as chipTAN or cardTAN.

## Email Account is your most important account!

Next to your bank account, your email account is probably your most valuable online account you have. With it you can normally reset any other account that you have. Protect this account with extra care. Choose a password you do not use anywhere else. Enable 2-Factor Authentication. Log out

## Encryption

## Use a good messenger

Find a messenger that protect your privacy. We recommend [...], here is a good comparison of messengers from a security perspective.

## Be careful with email

Email was defined in 19??, back then nobody thought about security or privacy on the Internet. Today we are stuck with an email system that, although a lot of great stuff is done to try to make it more secure, has serious weaknesses. The current email ecosystem offers best effort privacy, but usually there is no way to enforce it.
**Do not send confidential data via email**
If you really want to send private data via email, at least be sure, that the email you are sending to supports minimum security functionality [FIXME: link]

## Avoid Smart Home, for now <small>E2/S5/P2</small>

Smart Home is quite a big hype, with a lot of companies and start-ups bringing new products into this domain. Although there is so much going on here, we at Safing have yet to come across a Smart Home solution that is both open source and really secure. The recent past has shown that most solutions lack security.

#### Appendix: Versions

| Date        | Comment       |
|:-----------:|--------------:|
| 12 Jun 2012 | First edition |


#### Full References:

08/2016: Smart Home Thermometer hacked: https://thehackernews.com/2016/08/hacking-thermostat.html
08/2016: 75% of Bluetooth Smart Locks can be hacked: http://www.tomsguide.com/us/bluetooth-lock-hacks-defcon2016,news-23129.html
