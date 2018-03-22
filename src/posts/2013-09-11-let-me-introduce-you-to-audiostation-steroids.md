---
title: "Let me introduce you to AudioStation Steroids"
path: "/blog/let-me-introduce-you-to-audiostation-steroids"
category: webservices
tags: [last.fm, scrobblings, software, Synology, NAS, streaming, git, GitHub, craftsmanship]
published: true
date: "2013-09-11"
featuredImage: "./images/audiostation_icon.png"
---

Summer is almost over, colder days are coming and spending a few more time in front the screen developing at home looks far more logical than months ago.

My first no-beach Sunday gave me time to finish and publish **Audio Station Steroids**, mi first <a href='https://chrome.google.com/webstore/category/extensions?hl=en' target='_blank' rel="nofollow noopener noreferrer">Google Chrome Extension</a>.

I have been using this extension for months because I wanted to keep my last.fm updated with the music I listen through my <a href='http://www.synology.com/dsm/dsm_for_home.php?lang=us' target='_blank' rel="nofollow noopener noreferrer">DiskStation</a> but it hasn't had a good looking until <a href='https://twitter.com/nuriaasB612' target='_blank' rel="nofollow noopener noreferrer">Nuria</a> helped me with the fantastic icon she designed to me.

I've started this project because I really wanted to have real project where to put into practice the theory I have been learning and reading about the new wave of JavaScript that it has appeared recently with libraries such as <a href='http://backbonejs.org/' target='_blank' rel="nofollow noopener noreferrer">backbone.js</a>, <a href='http://underscorejs.org/' target='_blank' rel="nofollow noopener noreferrer">underscore.js</a>, <a href='http://expressjs.com/' target='_blank' rel="nofollow noopener noreferrer">express.js</a>, <a href='http://nodejs.org/' target='_blank' rel="nofollow noopener noreferrer">node.js</a>, <a href='http://visionmedia.github.io/mocha/' target='_blank' rel="nofollow noopener noreferrer">mocha.js</a>, etc. Along the way I got some more knowledge, for example getting to know how to develop <a href='http://developer.chrome.com/extensions/index.html' target='_blank' rel="nofollow noopener noreferrer">Google Chrome Extensions</a> or how to manage <a href='http://en.wikipedia.org/wiki/Platform_as_a_service' target='_blank' rel="nofollow noopener noreferrer">PaaS</a> options like <a href='https://www.openshift.com/' target='_blank' rel="nofollow noopener noreferrer">OpenShift</a> or <a href='https://www.appfog.com/' target='_blank' rel="nofollow noopener noreferrer">AppFog</a> ( which finally I choose in this case ).

So I could say that I wanted to do something useful ( firstly to me ) and it could bring me the opportunity to learn and practice with a project built from zero. And I did it! Let me explain this a little more.

After some time using it I realize that, **why not to publish it in the <a href='https://chrome.google.com/webstore?hl=en' target='_blank' rel="nofollow noopener noreferrer">Chrome Web Store</a> and let other user of last.fm and with an Synology DiskStation use it?** And now you can find the extension in the <a href='https://chrome.google.com/webstore/detail/audiostation-steroids/bmbaoffaphmekjaffppohjacnbpdnfej' target='_blank' rel="nofollow noopener noreferrer">Chrome Web Store</a>.

Another thing was, it's good to learn and practice all this new technologies together in a real project so, but it is very selfish to keep all this code stored in my machine so..., **why not to publish the sources in a public repository of both the Chrome Extension and the BackendEnd needed to make <a href='http://www.last.fm/help/faq?category=Scrobbling' target='_blank' rel="nofollow noopener noreferrer">Scrobblings</a> work securely?** And again I also did it.

* **AudioStation Steroids** Google Chrome Extension in this Github repository: <a href='https://github.com/robertovg/audiostation-steroids' target='_blank' rel="nofollow noopener noreferrer">https://github.com/robertovg/audiostation-steroids</a>.
* **Steroids Gateway** a node.js backend created for security proposes on this repository: <a href='https://github.com/robertovg/steroids-gateway' target='_blank' rel="nofollow noopener noreferrer">https://github.com/robertovg/steroids-gateway</a>.

The truth is that although I am not thoroughly proud of the result of this project, I am happy enough to show it. I hope that is useful.
