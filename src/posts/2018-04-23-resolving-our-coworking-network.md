---
title: "Resolving our Coworking Network"
path: "/blog/resolving-our-coworking-network"
category: networks
tags: [coworking, corkerspace, network, wifi, internet, ausus, tplink, linksys, ubiquiti, amplifi]
published: true
date: "2018-04-23"
featuredImage: "./images/amplifi-hd-home-wifi-router.jpg"
---

I've been working remotely more than 4 years already, and at least 3 of them I've been working from our own office.

The Internet has been always a priority for me, especially since May we opened our own Coworking Space called [Corker Space](https://corkerspace.com/).

I always worried about having a good Internet connection, but when you work in an office with more digital co-workers you realize, the Internet coming from your ISP is important, but how you manage your internal network is even more relevant and is there where I found more problems.

By the way, the first point, our ISP, is resolved in CorkerSpace by a local company called [RedJam](http://www.redjam.es/). They provide a very stable 200Mb/s symmetric connection, and so far, we haven't detected concerns from their connection.

As I previously commented, the second point is actually the one I really found challenging, I'll briefly explain the changes I made in our network and which issues we found with each of the routers and configurations until we found the really solid solution we have right now.

> This hasn't got the intention of being a professional review of the devices we have been using, but just a way to share our experience a and maybe help someone with it.

## Initial setup - [Huway HG8245H](http://e.huawei.com/en/products/fixed-network/access/ont/optical-terminal)

Well this was the router provided by the company, the problem we found with this one and the reason we change it doesn't provide a 5Ghz connection, and I wanted to be able to really get more speed from our provider, and the wifi bandwidth was the problem in this case, as 2.4Ghz network is not able to transmit more than 20-30Mb/s.

## Improving Router - [ASUS RT-AC1200G](https://www.asus.com/us/Networking/RT-AC1200G/)

Well, this was our first investment, we made it just after some weeks in the office as Coworking, and it really was a big change, we start being able to get more than 150Mb/s in the speed test and with 2 or three users in the space, we experience no problems, just a big improvement with the previous setup.

The trick here was because of the new 5Ghz network the router was able to create, which by definition is able to perform faster connections.

The problem started when more people and devices were added to the network ( printers, casting devices, scanners, and more PC and laptops ), at this moment, with maybe 20 clients, randomly some people started to disconnect from the network and were very tricky to understand the reason.

Additionally, the fact of having 2 networks "CorkerSpace" (2,4Ghz) and "CorkerSpace_5G" (5Ghz) was also not obvious, at least not for people not familiarized with networks technology.

In Corker Space, we have two 85m2 offices and I thought the issue was because of the distance from the people from the second office, so this leads me to the next addition to the network.

## Adding an extensor - [TP-LINK RE355](https://www.tp-link.com/us/products/details/cat-5508_RE355.html)

Well, this is a very simple addition and most of the people know these kind elements. They are able to get the original network signal and create a twin one. So I place it in the optimal location in the second office, just in the middle of the two offices. And things started to get worse and worse.

Know I understand everything a bit better, but if the original router already had problems with the number of devices to manage, adding a repeater which basically doubles the communication of the devices connected to the repeater, made things worse.

## Improving the main router - [Linksys WRT3200ACM-EU](https://www.linksys.com/fi/p/P-WRT3200ACM/)

So again I read about best routers, and I thought let's try something more powerful which is able to avoid this problem managing all our clients.

So this router is a beast especially comparing the specifications from the Asus one, Tri-Stream instead of two networks stream, 1,8 GHz CPU instead of 800 MHz and 512 MB than the 256MB.

But the people connected through the repeater had problems, pages loading very slowly, problems trying to connect during the mornings, pages looking like offline when they where correctly resolved after resetting the router, so somehow something was not working, and of course it was not so bad, but digital worker know internet is a must when working, so I had to do something.

## Changing to a Ubiquiti mesh system - [Amplifi](https://amplifi.com/)

I read about Mesh systems time ago and was something I wanted to try, the idea made sense, create a modular network system which is prepared from the beginning to add new nodes to the network, so those "repeaters" are smarter ( aware of any other point added ) and they don't cause saturations problems like usual repeaters do.

Additionally, a friend of mine told me time ago about Ubiquiti, this is not maybe the faster solution ( looking to the speed test results ), and maybe people say there are betters solutions, more sophisticated...

But the experience changed completely in the office from the day I disconnected all the other network devices and I added just an Amplifi HD home wi-fi router in the main office and one
AmpliFi HD Mesh Point in the twin office.

Basically now we have just one network, the system manages where you should connect, also the network you should use (5Ghz or 2,4Ghz) and the cool thing is 100% transparent, there is just one CorkerSpace network and all is simple.

We spent already almost a month with this setup and even with more than 40 concurrent devices we had no problems, is incredible.

And well just to finish talking about the Amplify, the design of the application and the router itself is amazing, yes, the post image is the Main router.

Maybe there are better solutions but as someone who is not networking professional, I just wanted exactly what I have now in the our space, something which is transparent (nothing to manage or to configure), beautiful (we don't hide the router anymore) and which just really works.
