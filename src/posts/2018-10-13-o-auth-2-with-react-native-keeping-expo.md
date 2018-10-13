---
title: "OAuth 2 with React Native keeping Expo"
path: "/blog/o-auth-2-with-react-native-keeping-expo"
category: React Native
tags: [react-native, oauth, salesforce, authentication, sf, es6, fp, babel, work, javaScript, craftsmanship, learning]
published: true
date: "2018-10-13"
featuredImage: "./images/o-auth-2-with-react-native-keeping-expo.jpg"
---

## Intro

I'm a frictionless guy, developer mainly because **I enjoy the process of creation of new applications** and I like to use them and enjoy with the process, trying to **avoid as much as I can the time I spend on manual deployments configuration process**. Basically **I Prefer to spend this time doing than resolving config problems**.

[React Native](https://facebook.github.io/react-native/) (RN) is a game-changing technology in the mobile development world, a lot of magic is happening in the background in order to transform the React code to native code transparently.

But using RN without Expo, makes you have to deal with Xcode, Android Studio to generate the packages and deploy your application to the Play and App Store, and this means to have to deal with more configuration dependent to 2 completely different platforms [cocoapods](https://cocoapods.org/) and [swift](https://developer.apple.com/swift/) for iOS and [gradle](https://gradle.org/) and [Java](https://java.com/en/) for Android.

That's why the existence of [Expo](https://expo.io/) makes sense.

## Why Expo is so needed when working with RN

I have to say the default output from [`create-react-native-app`](https://github.com/react-community/create-react-native-app) produces a React Native + Expo project, so we don't have to do anything special to have Expo up and running.

The reasons why for me setting the project up with expo makes sense are described in the following points:

* Resolve the testing scaffolding.
* Allow you to execute and play with the application on real devices without having to set up your devices as development devices
* Generate [`.ipa`](https://en.wikipedia.org/wiki/.ipa) (iOS App Store Package) and [`.apk`](https://en.wikipedia.org/wiki/Android_application_package) (Android PacKage) to deploying to App Stores through their server without having to deal with XCode (which makes mandatory to have a Mac computer) and JDK.
* Sugar additions like tunnel deployment (allowing devices out of your Network to try your application during development ).
* A tool to open the emulators through the CLI or the browser with just one click.
* And offering their own [SDK](https://docs.expo.io/versions/latest/sdk) to deal with specific device possibilities in a transparent way.

And the best thing as I said before, **the configuration comes resolved out of the box with `create-react-native-app`**

## Our First Authentication Solution

At [Precursive](https://www.precursive.com/), when we started to use [Apex Rest API](https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_rest_intro.htm) within our React Native application we also needed to resolve the authentication from a different way than any other application we made inside the Salesforce development.

I try to give a try to follow the official documentation, and in the case of Salesforce was using the [Salesforce Mobile SDK](https://developer.salesforce.com/developer-centers/mobile) with `forcereact create` as is described in their [`trailhead`](https://trailhead.salesforce.com/en/modules/mobile_sdk_react_native/units/mobilesdk_reactnative_create_app)

This `react-native-force` module provides 4 packages with useful Salesforce utilities `'import {oauth, network, smartstore, smartsync} from 'react-native-force';` and we can use `oauth.authenticate` to Login to Salesforce, but this project is not using expo.

> In summary; **Good and frictionless** solution but because it generates the project with `react-native-force` and **it doesn't use expo**. It generates dependent iOS and Android code with the `forceios` and `forceandroid` native modules.

## Other O Auth2 with RN

Salesforce provides [Authenticate Apps with OAuth
](https://help.salesforce.com/articleView?id=remoteaccess_authenticate.htm) so OAuth looks like the standard to use for authentication.

So I checked the different RN libraries out there to resolve this O Auth.

* [OAuth login for React Native](https://github.com/adamjmcgrath/react-native-simple-auth). This one provides easy setup for this social networks (Google, Facebook, Twitter and Tumblr).
* [react-native-oauth](https://github.com/fullstackreact/react-native-oauth) provides an interface to OAuth 1.0 and OAuth 2.0 providers with support for the following providers for React Native apps (Twitter, Facebook, Google, Github, and Slack)
* [React Native App Auth](https://github.com/FormidableLabs/react-native-app-auth) React native bridge for AppAuth - an SDK for communicating with OAuth2 providers, **this is the one which looks more standard, in my opinion,**.

**But all of them uses native modules and Expo doesn't currently support them**, meaning we need to [eject](https://docs.expo.io/versions/latest/expokit/eject) the application to install those libraries, and this means no expo in the project 😢.

## Our solution to don't leave Expo

So before accepting the fact that OAuth libraries are not compatible with Expo, I checked the Expo SDK and I found something which we could use to resolve our problems [AuthSession](https://docs.expo.io/versions/v30.0.0/sdk/auth-session).

This package is already included in Expo, so basically we just need to use it to make the login.

So here a quick simple `SignInScreen` component showing how to log in to Salesforce using Expo Auth-session (of course we also need to have connected application set up correctly following [SF instructions](https://developer.salesforce.com/page/Connected_Apps)).

```js
import React, { Component } from 'react';
import { SF_OAUTH_URL, REMOTE_ACCESS_CONSUMER_KEY } from 'react-native-dotenv';
import { AsyncStorage, Button, View, Text } from 'react-native';
import { AuthSession } from 'expo';
import { globalStyles } from '../constants/Styles';
import ScreenKeys from '../constants/ScreenKeys';

export default class SignInScreen extends Component {
  static navigationOptions = {
    title: 'Please sign in',
  };

  state = {
    errorCode: null,
  };

  _signInAsync = async () => {
    const { navigation } = this.props;
    const redirectUrl = AuthSession.getRedirectUrl();
    const result = await AuthSession.startAsync({
      authUrl:
        `${SF_OAUTH_URL}` +
        `?response_type=token` +
        `&client_id=${REMOTE_ACCESS_CONSUMER_KEY}` +
        `&prompt=login` +
        `&redirect_uri=${encodeURIComponent(redirectUrl)}`,
    });
    console.log(result);
    const { type, errorCode = 'You cancel or dismissed the login' } = result;
    if (type === 'success') {
      // Just simple way to store the token in this examples
      await AsyncStorage.setItem('userToken', JSON.stringify(result));
      navigation.navigate(ScreenKeys.main);
    } else {
      /**
       * Result types can be: cancel, dismissed or error (with errorCode)
       */
      this.setState({ errorCode });
    }
  };

  render() {
    const { errorCode } = this.state;
    return (
      <View style={globalStyles.container}>
        <Button title="Sign in!" onPress={this._signInAsync} />
        {errorCode ? <Text>{errorCode}</Text> : null}
      </View>
    );
  }
}
```

> With this steps, **we can login to Salesforce orgs through RN application and then use `Apex Rest API`** and work with Salesforce servers as any other standard Rest server, making our development work as **standard and frictionless** as possibles keeping Expo 🚀.
