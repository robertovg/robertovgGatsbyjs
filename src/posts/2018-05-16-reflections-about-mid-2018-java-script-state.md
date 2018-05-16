---
title: "Reflections about mid-2018 javaScript state"
path: "/blog/reflections-about-mid-2018-java-script-state"
category: networks
tags: [es6, fp, babel, react, react-native, work, javaScript, humanity, craftsmanship, learning, curiosity, ideas]
published: true
date: "2018-05-16"
featuredImage: "./images/reflections-about-mid-2018-java-script-state.png"
---

### Why I love js

One of the reasons **why I'm so passionate about javaScript**, since I meet it in my early years during my degrees studies, is how much is **always changing and evolving**.

I know this forces you to spend extra effort to be on the top of the technology. Basically, I like to think about it as a continuous student status we have to maintain. Web/Applications technologies and are evolving continually and you have to keep learning or at least listen what is going on. For me is not a concern but more a way to keep my work environment challenging and interesting, but if you don't like this situation of never being able to stop this continuous evolution, well I think **javaScript is not your territory**.

### When you master a technology, starts to be obsolete

**As soon as you think you master a technology usually it starts to be obsolete**, I remember at work four years ago, we start "Precursive v1" with Angular, we build a great product, we really mastered everything around Angular, grunt ( then moved to gulp ), lodash... but, we omitted the Angular 2.0 release, well first we checked that moving our code to this major version was not straight at all, we had to refactor a lot of code just to use it, also we wrongly thought, as Google announced they will maintain 1.X branch, we don't really need to migrate... Right now, I look to this decision and I have to regret my call.

**Angular 1.X** is still maintained, updated and it works but has a death date written and **is out of the market**, so simple, if you don't agree with this I'm sure you are also out of the market. We continued writing code in a dead technology, and because of that, we have actually been at least 2 years below what was going on with the **javaScript** world. And this the best way to miss the "feel of being in the cute edge", maybe you will miss new features from the new versions of the new frameworks, libraries, maybe productive incorporations to the language, the toolset improvements...

Happily, for us, we are reacted and start using [React](https://reactjs.org/), [Lightning](https://developer.salesforce.com/lightning) and as much new addition on ES6 to write as modern and functional code possible.

### Functional Code is here and will stay

One thing is to feel dependencies to concrete technologies, which we should not, but another thing is to learn and try to play with different code styles which can help with the **concreteness, robustness, and readability** of our code, and this is what is **provided by Functional Programming**.

It is hard at the beginning, especially when you work in a team and not everyone is not at the same level on the FP learning process, but usually reading others codes code helps to force everyone to make the move to FP, even though I highly recommend some courses or start material for beginners.

With the time, and applying those good principles the code improve a lot, so is win-win to adopt all early javaScript features which help to move in this direction.

### Try to write as agnostic code as possible

Additionally I feel with React and Vue, the code is not so dependent to third-party libraries as before, especially with Angular you trust on their engine to update values you add to the inputs of a form or to the text you show to the user, `double binding` and their rigid architecture (Controllers, Factories, Services, Directives, Filters...).

Right now I try to resolve with native ES6 things I would rather resolve with, for example, [lodash](https://lodash.com/docs), there is a great [Github repo](https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore) for that, but of course not always it is possible. Even though just to be conscious about it, makes your code better.

I've been with my focus on React for more than a year ago, and I'm in love with everything which it has incorporated into my code style. Well, I've been also making a big jump to FP consciously, I feel this is the right way to write code nowdays.

### Even try to write future technology code

So basically, and because of the heavy incorporation of ES6 and all edge javaScript features included in the language I feel I write more functional, simpler, reusable, concrete and easy to be read and be test code, now I use to show my team solutions to concrete problems resolved to share the knowledge but honestly because I'm proud of it enough to show it more.

Babel with the proper presets ([stage0](https://www.npmjs.com/package/babel-preset-stage-0) and [env](https://www.npmjs.com/package/babel-preset-env)) is a must on any new project nowdays, have the possibility of trying language syntax improvements even before they are implemented on browsers or node is something we should not miss. I love how Babel explain what it does to **Babel, Use next-generation JavaScript, today.**, just it.

### Native applications

Well, of course, this is what I'm right now learning and applying, [React Native](https://facebook.github.io/react-native/), really offers a powerful tool for frontend developers.

So no doubts this is something which really makes us ask if we really need to maintain two versions of the same application with different code base ( one for iOS and one for Android ) when we could just write a proper React Native project instead.

I would like to write a new article about it this fall.

### Final thoughts

I love this [`JavaScript is great! JavaScript is a mess!` the initiative](https://stateofjs.com/) and I wanted to use as excuse/reference to start this article. I think it helps to understand if you missed something year by year or where the market is moving objectively.

So in my opinion, Functional Programming is something to really deep learn and integrate into our code, we have to not feel a technology as the keystone or the definite technology. Learn about it, prepare your self to use and enjoy the process as much as you can, but as soon as you feel you mastered it, start putting your sight on what's going on, what has appeared and prepared to release your current stack, because sooner than letter you have to jump to the next one again.
