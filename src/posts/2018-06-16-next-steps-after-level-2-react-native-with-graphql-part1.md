---
title: "Next steps after Level 2 React Native With Graphql - Part 1"
path: "/blog/next-steps-after-level-2-react-native-with-graphql-part1"
category: React-Native
tags: [react-native, mobile, graphql, es6, fp, babel, react, work, javaScript, craftsmanship, learning]
published: true
date: "2018-06-16"
featuredImage: "./images/next-steps-after-level-2-react-native-with-graphql-part1.jpeg"
---

## The importance of side skills

This 2018, I'm spending my **learning time** on [React Native](https://facebook.github.io/react-native/) (`RN`) as **side skill"** for me. As general rule, I enjoy to have always something else than what I have to use at work, in my learning queue (not having all my eggs in the same basket), and usually it's funny how this new skills not needed at when I started learning it, become something useful far sooner than later (already experience it with [Wordpress](https://wordpress.org/), [Angular](https://angularjs.org/) , `es6`, functional programming, static web generators like [Jekyll](https://jekyllrb.com/), [Grav](https://getgrav.org/), [Gatsby](https://www.gatsbyjs.org/) and more.

I've been focused on [React](https://reactjs.org/) for more than a year ago at [Precursive](https://precursive.com/), so when I heard about React Native and how it was supposed to produce real native iOS and android applications reusing all my javaScripts toolset, it was an opportunity I didn't want to miss. Honestly I tried little examples of it more than a year ago, because I thought this was going to be a technology similar to [Cordoba](https://cordova.apache.org/), where you do execute the javaScript you code by and embed browser resulting into a slower end application than a real native one, but this was not the case at all with `RN` and I had had the time, I would love to had focus on it sooner, but well is always better later than never.

## Where to learn new technologies

I know each developer is completely different in terms of how we consume learning material, we can learn from others code, going to classes, reading books, just reading breathly the documentation and by using the technology, listening to Podcasts or watching video tutorials. In my case, the faster/easier way is to consume good video tutorials. Even though, I use to go to the official documentation and guides from official sources.

So, if I see high-quality courses, normally from [Tuts+](https://tutsplus.com), [Frontend Masters](https://frontendmasters.com/), [Wes Boss](http://wesbos.com/), or like, in this case, [Level Up Tutorials](https://www.leveluptutorials.com), I just go for it. Basically because is the faster way I know to transfer the skills you need to use this technology to your brain, and completely processed for you to just get the right way of how to use this library/framework to do real things.

With `RN`, I started with the first `Level Up Tutorials` about it called [React Native For Everyone](https://www.leveluptutorials.com/tutorials/react-native-for-everyone), it was very useful and I started to write pet applications just for fun and to explore the capacities of it. You really finish it producing **a real native application**.

Then [he](https://scotttolinski.com/) released this [fabulous course](https://www.leveluptutorials.com/tutorials/level-2-react-native-with-graphql), this time like a continuation but adding graphql to it, and focusing on [graphcool](https://www.graph.cool/) database ([graphql](https://graphql.org/) with [apollo](https://www.apollographql.com/)). At that time I already had previous experience with [meteor](https://www.meteor.com/) and `grahpql` so was a good way to improve on this stack also. Like always, I do all the exercises suggested and explained on courses, but with the output I knew, even when it was a great functional "Journal" application, that (as far I understood), some parts were missing to use this as code base in my projects.

So I thought it was a good idea to start with this `Level 2 React Native With Graphql` resulted project and iterate over it to incorporate the following improvements. I called it [Journal Updated](https://github.com/robertovg/journal-updated) and published to github (where more and more I'm trying to have a side projects public code portfolio).

## Improvements to Journal

All these points are also on the Github project [Readme](https://github.com/robertovg/journal-updated/blob/master/README.md) but I'll explain them a little bit. (Not following the same structure to explain the points)

### 1) Adding `.eslintrc` and `.babelrc` with my rules to the project and fixing the code accordingly

Well, call me lazy, but I need to have then `linting` and the `prettier` set up correctly in any project. I'm used to doing it when I'm working in a team, so we follow the same code styles, and I found it very useful even working in a project as the only developer.

Then I had to make a lot of changes to the resulting code, translating stateless components to pure function, adding PropTypes to props, avoiding duplicated code, removing unused import, refactoring components...

Of course `babel` now days is a must for any web developer if you want to write good code before is supported by all browsers and platforms (more about it in [my previous post](https://robertovg.com/blog/reflections-about-mid-2018-java-script-state))

There I faced some issues with `Babel` and `env-0` resolved by using `react-native-stage-0` preset instead of the default `stage-0`.

### 2) Having the possibility to have properties files

Moving the graphcool URL to an external configurable properties file so we could have different values depending on the environment and we don't hardcoded endpoints in our components. Resolved with `react-native-dotenv`.

Any real application needs to have an easy to access places where our configurable properties live, so it's easier to make changes without having to dig in the code.

### 3) Updating react-navigation to `goBack` issue

The problem which made me investigate about [`goBack` issues with the 1.x react-navigation](https://github.com/react-navigation/react-navigation/issues/2454) was one I found after updating the Post title. After saving it, we back to the Post Component with the old title instead of the updated one.

The issue was caused because after successfully updating the title, on the callback of `UpdatePost`, we called `navigation.goBack()` to return to `PostElement` where we load the title, not by the query itself but by the params passed from the `Posts` like that:

```javascript
  static navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.title,
    ...navStyles,
  });
```

And the issue was `goBack` has no possibility to send a new state to update the params, so I thought to use `navigation.navigate` again so I can pass the update title to the `PostElement` component and the title is shown correctly updated. But then the problem was we where adding new items to the navigation queue, so we were not actually returning to the previous page, but going to the new one, so if you then click back on your phone, you return to the old state of the form to update the form... which is not what we want.

Thankfully with the [react-navigation-2.0-rc](https://reactnavigation.org/blog/2018/04/06/react-navigation-2.0-rc.html#breaking-changes) the added a new smarter behavior to navigate) I think to avoid this problem, and if you navigate to a page which already exists, it reflected as if we returned back to the previous View (with the updated state)... Exactly what we want!

Then actually I thought to update all the libraries in the same go, so I moved all the libraries versions to the last stable version so we keep the code base up-to-date.

### 4) Errors aware

After the course, any API call susceptible to raise an exception was treated only with a `console.log` in the `catch` section. And this is fine to understand the usage of `graphql` and the `mutations` but in a real-world example, you really want to do something else, like informing the user of the error which is happening.

So I start treating the possible problems which we could get in any api call by raising the exceptions with an explication to the user information of what's going on makes sense in my opinion.

In the parent component `UserForm` for the login and `PostForm` for the updates on Posts, I was dealing those exceptions and showing to the user with `Alerts` from React Native.

Additionally, I added real validations to the login, so we are not able to Create a user or Login with empty email/password and things like or invalid emails or password, here the simple validations used:

```javascript
isEmailValid = () => !!this.state.email.match(/@/);
isPasswordValid = () => this.state.password.length > 5;
```

The email should contain `@` and the password to contain at least 5 characters. If these conditions are not true, then submit form button is disabled and we inform with the property `success` property on each `Item` form elements (email and password)

So now everything is a bit more error proof and in **real applications, we always need to be prepared for any unexpected situation** like an exception from an external call or input errors from the user.

### 5) Moving to es6 new async/await syntax

It's difficult to explain all the changes I made around this topic but this is also very important, for example, to continue with the treatment of exceptions for me was far more clear to use `async` / `await` instead of `try` `catches`.

There is a generic `UserForm` component with the form validations for email and password but also with the high-level treatment of the specific form actions (one for `LoginUser` and `CreateUser`).

The body of this method looks like:

```javascript
submitForm = () => {
  const { email, password } = this.state;
  this.props
    .onSubmit({
      email,
      password,
    })
    .catch((error = {}) => {
      const { message } = error;
      Alert.alert(
        message,
        undefined,
        [
          {
            text: 'Try Again',
          },
        ],
        {
          cancelable: false,
        }
      );
    });
};
```

Then the methods passed as `onSubmit` params are async methods and they rise the specific exceptions with makes this `catch` section to be executed, this is the `onSubmit` method for the create user one.

```javascript
createUser = async ({ email, password }) => {
  const { createUser, signinUser, client } = this.props;
  try {
    await createUser({
      variables: {
        email,
        password,
      },
    });
    const signin = await signinUser({
      variables: {
        email,
        password,
      },
    });
    signIn(signin.data.signinUser.token);
    client.resetStore();
  } catch (error) {
    console.error(error);
    // I know, very hard assumption...
    // but just to don't omit the exception and show to the user
    throw Error('Username already used');
  }
};
```

In this way, we code like if there is no exception but with the try, we are save from unexpected situations.

### 6) Change color of indicators form iPhone ( network, time, etc)

This is a bit simple fix, but this because of the color of the header had the network, time, battery indicators from the iPhone black and the header has a dark color, was difficult to read.

But in a very convenient way there is an easy fix for this: We can pass a property called `headerTitleStyle` which we can use for `navigationOptions` of our view components and add a white color to it, so we have the proper contrast between the iPhone indicators and the background of the header.

### 7) Allowing the user to hide the keyboard

Well for me this was new UX improvement, when we show the keyboard when clicking on the text area it doesn't hide any possible way, I had to select the input text of the `PostForm` to click on enter and hide it. But this was not very nice.

So I found a way to hide the keyboard when just clicking out of the text area, . Instead of using a `View` we can display the content in a `ScrollView`, this component have a property called `keyboardShouldPersistTaps` which, if we set to false, the form does exactly what we wanted it to do.

### 8) Facing problems with Expo

But well, there is not only good things, I was blocked by expo long time just because for example was not able to recognize the new version of the application after serious changes, so to solve it I renamed the application and then it started to work, somehow expo CDN was not updating the old version in some point, so if you deploy and unstable version of your app and then you fixed and don't see the new version after updating it from expo, maybe try with a application name change.

Actually, I faced one issue (`Nested React Native projects result in TypeError: undefined is not an object (evaluating self.fetch)`) published in [react-native official GitHub](https://github.com/facebook/react-native/issues/9599) and when it was resolved was still not able to update the deployed expo version.

### 9) Expo improvements

When we deploy the application con Expo, we show the icon of expo while the first loading process is happening and this is not what we want if we write our own application. Expo makes super easy to have our own first screen and logos updated with our brand, we only have to create folder in the root of our application called `assets` and inside create two files, `icon.png` and `splash.png` with the application icon and application first screen.

I always follow warning console messages as soon as possible, I found that when you create projects with `Expo XDE.app` it was creating the application with his own version of React Native (https://github.com/expo/react-native/archive/sdk-27.0.1.tar.gz) and changing it actually stop a warning to appear about this, so I just start using this Expo version of React Native instead.

### 10) Other Cosmetic improvements

I don't pretend to cover all little changes I made, but I improve some problems with the edition of the form when using smaller phones, centered the loading (always shown in a `View` section) and showing it always when an async update action was happening...

## End of Part 1

Well, of course, this is not all that I wanted to finish, my [TODO list](https://github.com/robertovg/journal-updated/blob/master/README.md#todos) for this project in this specific moment is not finish, but I think there is already enough information to be split into more than one part.

> The header image was taken from the course [React 2 Native](https://www.leveluptutorials.com/tutorials/level-2-react) from [Scott Tolinski](http://scotttolinski.com/)

> As with this article, I started to share code, I added to the blog the [gatsby-remark-prismjs
> ](https://www.gatsbyjs.org/packages/gatsby-remark-prismjs/?=high) to highlight code syntax, and after some small styles improvements to be ready for mobile, the experience has been fantastic, 100% recommendable.
