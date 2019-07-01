---
title: "Writing Scripts As Frontend With Es6 And Jest"
path: "/blog/writing-scripts-as-frontend-with-es6-and-jest"
category: npm scripts
tags: [wappalyzer, clipboard, cliboardy, jest, web-technologies, markdown, npm, npm-scripts]
published: true
date: "2019-07-01"
featuredImage: "./images/writing-scripts-as-frontend-with-es6-and-jest.png"
---

## Context

As frontend developer when I want to extract information from a website to then inject into a document (usually markdown one), I do a bit of `web scraping` to understand how to get the data with the [CSS selectors](https://www.w3schools.com/cssref/css_selectors.asp) (e.g. `classNames`) of the elements I need from the webpage, and then I execute a simple script in the console like the following one:

```js
copy(
  Array.from(document.querySelectorAll('.row-title'))
    .map(e => e.textContent)
    .join(';;')
);
```

Then in [Sublime](https://www.sublimetext.com/) or [VS Code](https://code.visualstudio.com/), I paste them using those junctions chars ';;' and multi cursor capabilities of those editors to edit them as I want to give it the markdown format I need.

This time I wanted to extract the technologies of webpages with links to them to be saved in a document. But wappalyzer offers [browser extensions](https://www.wappalyzer.com/download) and we can't access to the popover content of the browser extension from the console, so no possibility to extract the information from console script as I use to do.

## Mission

I found this [npm node module](https://www.npmjs.com/package/wappalyzer), and it opened my mind on how was the best way to use it as end-user to get the technologies used on websites and paste it into the clipboard.

I've created a lot of `.sh` in my career to automate dev processes, deployments, repeatable tasks using sometimes even [AppleScript](https://en.wikipedia.org/wiki/AppleScript) , but surprisingly for me, I never thought to use my web developer toolset (javascript and npm in this case) to write "desktop scripts". So `npm scripts` and this `wappalyzer node module` was a good start to build something to be executed with [npx](https://www.npmjs.com/package/npx).

> **I wanted to write a script to extract the technologies of any page with npm to be executed through npx and get the output from wappalyzer to the clipboard in markdown.**

So also the point of this "exercise" was not only to resolve it but with some restrictions to learn something in the way.

* I wanted unit tests.
* I wanted to use modules and last es6 syntax not just (it was execute inside node, so I knew it was going to be a pain point).
* Register it to npm register so anyone can use it in the future or by anyone else.
* And of course publish it in Github, so maybe someone can use it or make modifications to it in the future.

## Toolset and Planning

I found this article["Building a simple command line tool with npm"](https://blog.npmjs.org/post/118810260230/building-a-simple-command-line-tool-with-npm), but was not giving me es6 modules, babel, eslint and jest. I learned how to expose npm scripts through `bin` property in `package.json`. Those scripts we link will need to have a [`Shebang`](<https://en.wikipedia.org/wiki/Shebang_(Unix)>) to be executed as node scripts.

Then I knew to use `last es6 syntax`, `node modules imports`, `prettier`, ... I needed a tool to compile the `js` and my first choose was [`webpack`](https://webpack.js.org/), as I use to do in my web projects. But `webpack` it's created to build web outputs and I had to hack it to don't expect HTML, CSS and accept scripts with `Shebang` in the `.js` so I finally decided to use simple `babel-cli`.

`Jest`, was a pretty clear decision for the unit tests, without any additional configuration, as it's super valid to test functions and we don't need anything specific here like [enzyme](https://airbnb.io/enzyme/) or [React Testing Library](https://testing-library.com/react).

The last piece of the puzzle was how to copy things on the clipboard of the machine, as I know in the browser console there is this [`copy`](https://css-tricks.com/can-copy-console/) but was not available within `node`. But again a ready to use node module was there to do the job ([`clipboardy`](https://github.com/sindresorhus/clipboardy))

## Implementation

So once I was clear how to build the project, I just needed to start.

### Project Init

Just created a simple and empty new folder `wappalyzer-to-md` and npm `npm init` did the rest.

```bash
mkdir wappalyzer-to-md; cd wappalyzer-to-md; npm init
```

### Configuration `.babelrc` and `eslint`

So now let's add the `.babelrc` and `eslint` configuration:

First we install what we need for our configuration:

First the babel needed items

```bash
npm install --save-dev @babel/core @babel/cli @babel/preset-env @babel/node
```

And the `.babelrc` file looks like that:

```js
{
  "presets": ["@babel/preset-env"]
}
```

Then the eslint ones, as I'm unable to work nowdays without eslint + prettier. So again with dev dependencies:

```bash
npm install --save-dev babel-eslint eslint eslint-config-node eslint-config-prettier eslint-plugin-prettier babel-loader babel-polyfill
```

And again the configuration file (`.eslintrc`) was something like that, after some specific changes for this project:

```js
{
  "extends": ["node", "prettier"],
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaVersion": 8,
    "ecmaFeatures": {
      "experimentalObjectRestSpread": true,
      "impliedStrict": true,
      "classes": true
    }
  },
  "env": {
    "es6": true,
    "browser": false,
    "jasmine": true,
    "node": true,
    "commonjs": false,
    "jest": true
  },
  "rules": {
    "no-unused-vars": [
      1,
      {
        "ignoreRestSiblings": true,
        "argsIgnorePattern": "^ignore",
        "varsIgnorePattern": "^ignore",
        "caughtErrorsIgnorePattern": "^ignore"
      }
    ],
    "arrow-body-style": [2, "as-needed"],
    "no-param-reassign": [
      2,
      {
        "props": false
      }
    ],
    "no-console": 0,
    "import": 0,
    "func-names": 0,
    "space-before-function-paren": 0,
    "max-len": 0,
    "no_underscore-dangle": 0,
    "consistent-return": 0,
    "comma-dangle": 0,
    "import/prefer-default-export": 0,
    "array-bracket-spacing": 0,
    "space-in-parens": 0,
    "prefer-arrow-callback": 0,
    "no-plusplus": 0,
    "no-use-before-define": 0,
    "global-require": 1,
    "import/no-commonjs": 0,
    "import/no-extraneous-dependencies": [
      "error",
      {
        "devDependencies": true
      }
    ],
    "no-process-exit": 0
  },
  "plugins": ["prettier"]
}
```

### Libraries to use and package setup `npm build`

Then we needed to be able to use `babel` transformation process to the build the ./src, and connect it in the `bin` script.

```js
{
  // ...
  "scripts": {
    "build": "babel src --out-dir dist",
    "test": "jest --watchAll"
  },
  // ...
  "bin": {
    "wappalyzer-to-md": "./dist/cli.js"
  },
  // ...
}
```

With the previous configuration we are able to execute the `babel` compiled sources. And we can update them each time we build the project.

So let's create also our first file which will be our start point of the script `/src/cli.js`:

```js
console.log('-- Starting Execution --');
const [, , url] = process.argv;

(async () => {
  try {
    // 1.- We need to validate params
    // 2.- Make the call to the sever side to check
    // 3.- Transform it to markdown
    // 4.- Copy it to the clipboard

    console.log(' -- 📋 Markdown Copied 📋 -- ');
  } catch (e) {
    console.error(' --💥 Something when wrong 💥-- ');
    console.error(e);
  } finally {
    process.exit(0);
  }
})();
```

We are not only creating the file but defining the "script workflow" with it splitting it to be able to work with test in the correct way 💁‍.

### Executing the project with `npm link`

[`npm link`](https://docs.npmjs.com/cli/link) it's a great way to test and use `npm modules` before registering them.

To execute the previous example we just need to execute in the console in our project folder.

```bash
npm link
```

Then we are able to execute it with:

```bash
npx wappalyzer-to-md
```

And get the console output in the console.

```
-- Starting Execution --
-- 📋 Markdown Copied 📋 --
```

### Jest setup `npm test`

Let's just add the uni test configuration to be able to implement each part of the workflow described previously with unit test. For it let's install jest configuration

```bash
npm install --save-dev jest babel-jest
```

And having the `jest --watchAll` in the `test` script made me able to execute `npm test`

I got this issues: `ReferenceError: regeneratorRuntime is not defined` described [here](https://github.com/babel/babel/issues/5085) and I got it resolved by specifying the target for babel in the `.babelrc`.

```js
{
  "presets": [
    [
      "@babel/preset-env", {
        "targets": {
          "node": "current"
        }
      }
    ]
  ]
}
```

Then I was able to start coding with `npm test` running as usual with any `js` project.

### Implementing the plan

For the implementation we need only 3 libraries the two already described `wappalyzer` and `clipboardy` and the indispensable `lodash` one.

```bash
npm install lodash clipboardy wappalyzer
```

You have the full project available in my [Github](https://github.com/robertovg/wappalyzer-to-md) account to check it, use it, adapt or improve it.

Basically I created the following folder structure for each of the steps described in the `cli.js` backbone:

* **validation**: To have params validations, as in the cli the inputs are coming from the call args.
* **data**: To wrap the logic of using the `Wappalyzer` npm module and test it.
* **logic**: for me the logic in this program was to transfer the Json output from `Wappalyzer` to the "standard" markdown I was try create. Pretty straight and quite exciting to create in an elegant way 🤓
* **output**: in the script we haven't view, but we do have output logic, so again I decided to isolate the `clipboardy` logic and wrap in the logic folder.

These are the main parts of the small script project, I think the best way to know how each part works, as I think we should always do, it's just to read the `specs` test on each folder to then understand then easy `cli.js` file which orchestrate the script pieces.

Additionally to execute before register the script project, we should `npm link` the project an execute it again now with valid params like:

```bash
npx wappalyzer-to-md https://robertovg.com
```

And we will have in the clipboard a markdown document with what we wanted to extract 🥳.

### Register in npmjs.com to be widely used 🤔.

So last step was to register to npm, so we can use it without the sources, that's pretty sexy approach and honestly the first time I think to register on npm something which is not created to be used as `node module` but as `npm script`.

Pretty simple, this is done by `npm publish` as always and first, you need to set up an account in [npmjs.com](https://www.npmjs.com/) and log to npm through `npm login` call.

Then the package it's available for anyone calling

```bash
npx wappalyzer-to-md <url>
```

And listed publicly in npm [register](https://www.npmjs.com/package/wappalyzer-to-md).

## Conclusion

Nothing crazy here, but funny for me to use my web toolset to make a script. I will try to use this aproach when I see the opportunity in the future if I need to resolve scripting challenges again.

Have you ever use `npm script` in this way? Do you see improvements in the way I use it? Or maybe do you have any doubt? I'm always happy to learn from any feedback and hopefully, this can be useful not just for me but for anyone facing problems which could be resolved by `npm scripts`.

I hope you enjoy reading 🤗.
