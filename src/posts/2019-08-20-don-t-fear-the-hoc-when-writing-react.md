---
title: "Don't fear the HOC, when writing React"
path: "/blog/don-t-fear-the-hoc-when-writing-react"
category: React
tags: [HOC, react, es6, fp, babel, work, javaScript, craftsmanship, learning]
published: true
date: "2018-08-20"
featuredImage: "./images/don-t-fear-the-hoc-when-writing-react.png"
---

## Intro

When I started to use **Functional Programming (FP)** in my code, I also started thinking in a different way. When something is finished and working, I constantly ask my self, **"Could I get the same results, with a more elegant code?"**. Of course, I've been always refactoring my code, but since I'm in the FP influence, **this feeling of chasing purity, simplicity, and proudness** when coding is far more relevant.

As it said in the [official documentation](https://reactjs.org/docs/higher-order-components.html): "_A HOC is a function that takes a component and returns a new component_", obviously they do something in this process, usually they add some properties to the target component by the execution of some extra logic, allow them to reuse the code which the HOC contains.

This article pretends to be a rough introduction and reference to anyone interested, not only on understanding what they are but also to share my experience with _High Order Components (HOC)_ in real-world examples.

## When we use HOCs

I've been using **HOCs** with React from the very beginning without notice, simple examples could be found when you start integrating common in third-party to your code, like _Redux_ or _graphql_.

I will paste a piece of code where I use _graphql_ with _Apollo_ to query and fetch user data from the session and a basic logic of a simple authentication code.

```js
import React from 'react';
import PropTypes from 'prop-types';
// eslint-disable-next-line
import { Meteor } from 'meteor/meteor';
import gql from 'graphql-tag';
import { graphql, withApollo } from 'react-apollo';

import LoggedApp from './LoggedApp';
import Logging from './Logging';

const App = props => {
  const { data, client } = props;
  // Skipping the execution if data is not loaded
  if (data.loading) return null;
  // We show the LoggedApp  or Logging one depending if the user is logged
  return data.user._id ? <LoggedApp {...props} /> : <Logging client={client} />;
};

const userQuery = gql`
  query User {
    user {
      _id
      alias
    }
    users {
      _id
      alias
    }
  }
`;

export default graphql(userQuery)(withApollo(App));
```

Here instead of exporting the `App` component directly to be used in other parts of our app, we use 2 HOCs, one to inject a `graphql` query and another to inject `Apollo` to manage the queries. So no one but 2 HOCs used in this simple example.

More details of how to use Apollo in your apps in their [official docs](https://www.apollographql.com/docs/react/essentials/get-started.html).

As a really high-level summary, we could say that **HOCs return our components adding them some special properties, abstracting you from the logic contained in the HOC**.

## Example Project Context

So after understanding the benefits HOCs can bring to your code, I'm using them in my code when I see a good opportunity. And here I'll try to explain a clear situation where we used.

In [Precursive](https://precursive.com/) we use **React** + [Design System React
](https://react.lightningdesignsystem.com/) (a library we are using to render our [Lightning](https://www.lightningdesignsystem.com/) Scheduling Page). This library is **React** implementation of Lightning and because it can be used in different environments, we need to specify were we to find the icons assets (SVGs).

We do this configuration with the [Icons Settings](https://react.lightningdesignsystem.com/components/icon-settings/), a component, this component is used as a wrapper on your root component and all nested components will use to know where to find the icons assets.

```js
// imports...

const sagaMiddleware = createSagaMiddleware();

// Creating enhancers to connect our middleware (saga and asyncDispatchMiddleware)
// and adding devtools in elegant way
const enhancer = composeWithDevTools(applyMiddleware(sagaMiddleware));

const store = createStore(reducers, {}, enhancer);

// We load the configuration of the icons differently depending if we have
// or not the local environment icons available from _slds
const IconConfiguration =
  process.env.NODE_ENV === 'development' ? (
    // eslint-disable-next-line
    const actionSprite = require('@salesforce-ux/icons/dist/salesforce-lightning-design-system-icons/action-sprite/svg/symbols.svg');
    // eslint-disable-next-line
    const customSprite = require('@salesforce-ux/icons/dist/salesforce-lightning-design-system-icons/custom-sprite/svg/symbols.svg');
    // eslint-disable-next-line
    const doctypeSprite = require('@salesforce-ux/icons/dist/salesforce-lightning-design-system-icons/doctype-sprite/svg/symbols.svg');
    // eslint-disable-next-line
    const standardSprite = require('@salesforce-ux/icons/dist/salesforce-lightning-design-system-icons/standard-sprite/svg/symbols.svg');
    // eslint-disable-next-line
    const utilitySprite = require('@salesforce-ux/icons/dist/salesforce-lightning-design-system-icons/utility-sprite/svg/symbols.svg');
    <IconSettings
      actionSprite={actionSprite}
      customSprite={customSprite}
      doctypeSprite={doctypeSprite}
      standardSprite={standardSprite}
      utilitySprite={utilitySprite}
    >
      <App />
    </IconSettings>
  ) : (
    <IconSettings iconPath="/_slds/icons">
      <App />
    </IconSettings>
  );

sagaMiddleware.run(rootSaga);
render(<Provider store={store}>{IconConfiguration}</Provider>, document.getElementById('app'));
```

So basically as you can see, depending on the environment we load the SVG through _requires_ or relay to Salesforce assets when the application is deployed in Salesforce (**Why to load the icons into our static resources if they are already loaded in Lightning Experience**).

> Notice I'm using require inside the if statement, in this way I only fetch those SVGs when I'm on the development environment and avoid to include them in the package to be deployed.

## Problem to resolve

This previous code works, but we have 2 issues with it.

* First, we have code which could be isolated about this Icon configuration which is completely independent of the initialization of our application.
* Secondly, if we want to use this piece of code in different parts of our applications (having other root components to mount)...well then we have to copy and paste the code, and **this is never an option**.

## Solution with HOC

So why not use a HOC to isolate the logic around the creation of this `IconSettings` component, sound like a good use case, don't you think?

Actually, the solution with HOCs is the only tool we have to return a new component wrapped into the `IconSettings` one (which need to be set up as a wrapper)

So I created a new component called `iconifyComponent` with this code.

```js
import React from 'react';

import { IconSettings } from '@salesforce/design-system-react';

/**
 * HOC to wrap the IconSettings logic and reuse when need to be reused (on salesforce environment)
 * We load the configuration of the icons differently depending if we have
 * or not the local environment icons available from _slds
 */
export function iconifyComponent(WrappedComponent) {
  return function WrappingComponent(props) {
    if (process.env.NODE_ENV === 'development') {
      // eslint-disable-next-line
      const actionSprite = require('@salesforce-ux/icons/dist/salesforce-lightning-design-system-icons/action-sprite/svg/symbols.svg');
      // eslint-disable-next-line
      const customSprite = require('@salesforce-ux/icons/dist/salesforce-lightning-design-system-icons/custom-sprite/svg/symbols.svg');
      // eslint-disable-next-line
      const doctypeSprite = require('@salesforce-ux/icons/dist/salesforce-lightning-design-system-icons/doctype-sprite/svg/symbols.svg');
      // eslint-disable-next-line
      const standardSprite = require('@salesforce-ux/icons/dist/salesforce-lightning-design-system-icons/standard-sprite/svg/symbols.svg');
      // eslint-disable-next-line
      const utilitySprite = require('@salesforce-ux/icons/dist/salesforce-lightning-design-system-icons/utility-sprite/svg/symbols.svg');
      return (
        <IconSettings
          actionSprite={actionSprite}
          customSprite={customSprite}
          doctypeSprite={doctypeSprite}
          standardSprite={standardSprite}
          utilitySprite={utilitySprite}
        >
          <WrappedComponent {...props} />
        </IconSettings>
      );
    }
    return (
      <IconSettings iconPath="/_slds/icons">
        <WrappedComponent {...props} />
      </IconSettings>
    );
  };
}
```

Now in our entry point, we can just use the HOC to abstract of the icon configuration and make it super nice, elegant and clear.

Using the created `iconifyComponent` in our entry point (`index.js`) we got something like that:

```js
// more imports...
import { iconifyComponent } from './data/iconifyComponent';

const sagaMiddleware = createSagaMiddleware();

// Creating enhancers to connect our middleware (saga and asyncDispatchMiddleware)
// and adding devtools in elegant way
const enhancer = composeWithDevTools(applyMiddleware(sagaMiddleware));

const store = createStore(reducers, {}, enhancer);
const AppIconized = iconifyComponent(App);

sagaMiddleware.run(rootSaga);
const AppIconized = iconifyComponent(App);
render(
  <Provider store={store}>
    <AppIconized />
  </Provider>,
  document.getElementById('app')
);
```

🤩 Pretty sexy, don't you think? If now, we need to use the same icon configuration in any other part of our application (if there is another root application), we can just use the HOC again and forget about the details.

## Conclusion

Well as everything in life, we should not abuse of the usage of HOCs in our code, and try to write them when it makes sense, but in the other hand is a pretty elegant solution we have available in our tools within React environments.

Well, tell me what you think about this use case and about the use of HOCs in your code.

See you soon!
