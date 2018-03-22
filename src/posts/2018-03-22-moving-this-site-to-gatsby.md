---
title: "Moving This Site To Gatsby"
path: "/blog/moving-this-site-to-gatsby"
category: hosting
tags: [gatsby, netlify, craftsmanship, github, dscm, jekyll, flat-file-cms, git, javaScript]
published: true
date: "2018-03-22"
featuredImage: "./images/gatsby-logo.png"
---

Has been a long time without updates on my site, and it wasn't because I had nothing to share, but maybe because I was more focused on doing than on writing about what I was doing.

Anyway, I used (again) the excuse of try a new technology to update this site, and learn in the process.

This is the third time I'm moving the site from one technology to another, but I think this time was a good move, when I first move from `Wordpress` to `Github pages` with `Jekyll` I did, because I thought, I don't need a database or admin panel, as I prefer to have a light environment and easy to customize, and `Jekyll` was a good option for that. The problem was the background technology, `Jekyll` is built with Ruby and the template engine used is [liquid](https://shopify.github.io/liquid/), and even when is easy and powerful to use is out of my scope as frontend. So I don't feel it like a natural way to code templates.

I've been always very into flat files CMS since I met `Jekyll`. I strongly believe you should avoid databases if possible to render public webpages than have to deal with caches and side problems of databases (unless you have the resources to deal with proper database administration) but is truth is piece of your architecture which needs to be properly resolved and managed if you want to do it well, and you need the knowledge and the time to invest in it, and flat files CMS give you quick performance and load times out of the box, and in most of cases (for usual webpages) is valid solution.

For example, for our coworking space ([CorkerSpace](https://corkerspace.com/)) I used [Grav](https://getgrav.org/), it has a lot of advantages if you compare it with `Jekyll`, for example, it has a very powerful administration panel, so the admins of the space can introduce changes without me having to deal with those changes, but the integration with git comes with a plugin which is a bit limited. In [Precursive](https://precursive.com/) is build with [Statamic](https://statamic.com/) and still is PHP but is a truth that has a better admin console (with the cost of its license).

So I don't build websites as my main job, but I enjoy it as frontend so I like the idea of don't need to change my stack when I have to publish a site.

Then since I moved to React, I found it so easy to build any kind of application; mobile, desktop, big projects, small PoC... and when I hear about [Gatsby](https://www.gatsbyjs.org/) I was shocked.

> "A CMS, easy to deploy, static, with great services and plugins around and based on serverside React rendering components and using `Graphql` to consume your data ( which could be images and posts from local files and even integrations with any imaginable service out there...)!"

I really was so excited, it means I have all the used and loved tools I choose to build applications available to build webpages and having a resulting product (webpage) far faster than any other CMS could even imagine... and here I am again 🤓.

During the process is true you don't have so many fancy themes like with more matures solutions ([Wordpress](https://wordpress.org/) is the king when we talk about more professionals and better-looking themes IMO), and also you have to code almost any special solution by your self, but well I do enjoy coding, so the effort is well paid back.

Then later, of course, I arrived at the point of having to deploy the site and you find [Netlify](https://www.netlify.com), well then is when you are really not able to believe it, so good. I promise the best way to explain it, is just to try it.

I'll update if I have to change my page engine again, but honestly, I'm keen to try out the possibilities we could get with this stack, and this blog is just the beginning.

Additionally I prepared a README file in the [website repo](https://github.com/robertovg/robertovgGatsbyjs) to explain the problems and the solutions I implemented in the site, just if someone is interested, I will continue updating it while I update the page.
