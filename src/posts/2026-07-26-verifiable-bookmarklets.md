---
title: 'Verifiable Bookmarklets'
path: '/blog/verifiable-bookmarklets'
category: projects
tags: [bookmarklets, javascript, tools, provenance]
published: true
date: '2026-07-27'
featuredImage: './images/verifiable-bookmarklets.png'
---

I just added a small new tool to the site: [Verifiable Bookmarklets](/projects/verifiable-bookmarklets/). It is a browser-only utility to generate, inspect and verify JavaScript bookmarklets without executing them.

The idea is very simple:

> Can this bookmarklet be proven to match this source code?

That is all it tries to answer. It does not make bookmarklets secure. It does not sandbox them. It does not replace browser extensions or browser stores. A verified bookmarklet can still be bad code, dangerous code or code you should not run. But at least you can know whether the bookmarklet you received is exactly the bookmarklet that was built from the source being shown.

## Why I ended up building this

I still use bookmarklets every day at work. For years I generated them with [Bookmarklet Maker](https://caiorss.github.io/bookmarklet-maker/), which takes normal JavaScript and gives you back a bookmarklet ready to drag into the browser. That solved the generation problem well enough that I never looked for anything else.

What it did not solve was the question I kept coming back to: how do I know that the `javascript:` link someone sent me came from the source code they showed me? There was no obvious answer, so I built one.

## Why bookmarklets?

Bookmarklets are old, simple and still useful. You drag a link to the bookmarks bar, click it later and the browser runs a small piece of JavaScript in the current page. No install flow, no store review, no account, no backend.

Those are real bookmarklet I have coded over the year just to make some repetitive tasks easier, this was done in a pre-ai world, but the same principles apply:

### 🐙 GitHub PR Feedback Extractor v1.0.0

This is a new one, when I ran it on a PR it show a Dialog modal with a list of all the comments grouped by author, so I can just check the ones I want to expand, and will then copy a markdown extraction in MD I can use with any AI agent to iterate, and address those.

Obviously a GitHub Skill with access to GitHub CLI could also find it, but sometimes if I can see those comments on the page, it´s just easier to click the bookmarklet and get the extraction done ready to paste in my AI agent.

### 🔗📋 Copy page link v1.0.3

Allow me to generate a Markdown link to the current page, if text is selected, then will use as link text, otherwise will use the page title. It also copies the link to the clipboard.

### 📤 Full Site To Markdown Extractor v1.0.3

I´ll expand on this particular one in a following post as I found it super useful to extract content from a page, and then feed it to an AI agent to summarize, or to extract the key points, or to generate a summary of the page in a specific format.

### 🕳 🧩 🦑 📋 Show / Hide the Content Extractor v1.0.9

This is one display an input on the screen, where I can add a CSS selector, and will highlight the matching elements, and then will copy the content to the clipboard.

I am not going to explain each one, and most of them are too specific to my daily work to be worth publishing. The point is the shape of the list: tiny, boring, single-purpose automations that pull an identifier out of the current page, reformat something into Markdown, or save me four clicks in an internal tool. An extension would be overkill for every single one of them.

Notice the version numbers too. These things get edited, regenerated and re-dragged constantly, which is exactly where provenance starts to matter.

## Something it never worked well

There´s no standard way to share a bookmarklet. If you drag a bookmarklet to the bookmark to your desktop you get a `.inetloc` file on macOS, a `.url` file on Windows, or a `.desktop` file on Linux. Those are all opaque files that contain the `javascript:` URL, but they are not human-readable and they are not easy to share.

## Why I needed to build this

I have been using bookmarklets for years, and I have been sharing them with colleagues for years. I have also been receiving bookmarklets from colleagues for years. It´s an easy way to improve our workflows without the hassle of releasing a browser extension or a web app.

And I always liked it like that, not with any more pretention, so treated them as informal web scripts.

## The part that changed recently

Because of the rise of large language models, the generation step has become trivial. It is now trivial to ask an LLM for "a bookmarklet that does X" and get working code back in seconds. That is genuinely useful, and I do it often. It also means a lot more `javascript:` URLs are being generated, pasted into Slack and shared between people who never saw the source.

So more mates share bookmarklets with me, and I share more bookmarklets with mates. The generation step is no longer the bottleneck.

But because of that I realized... well **how I´m sure that the bookmarklet I received is exactly the one that was generated from the source code I was shown?** And how can I be sure that the bookmarklet I am about to share is exactly the one that was generated from the source code I am showing?

So the interesting problem is not generating bookmarklets. It is the step between reviewing source code and executing an opaque URL. Whether that source was written by me, by a colleague or by a model does not really change the question:

> Is this bookmarklet exactly what this source produces?

## How it works

The current format is called `bm:v1`. When the tool generates a bookmarklet, it builds the payload, calculates a SHA-256 hash of that payload and embeds tiny metadata as a JavaScript comment:

```javascript
/*bm:v1;sha=<sha256>;src=<optional-url>*/
```

The hash does not include the metadata itself. That avoids the circular problem of trying to hash something that contains its own hash.

The tool can already:

- generate a bookmarklet from pasted JavaScript source
- generate a bookmarklet from a raw JavaScript URL
- create a draggable bookmarklet link
- inspect a pasted or dropped bookmarklet
- show decoded JavaScript and metadata
- verify a bookmarklet against the current source

Everything runs in the browser. There is no backend, no login and no publishing service.

It then generates a sharable link to the tool with the source URL as a parameter, so that anyone can review the source and generate the bookmarklet themselves.

**https://robertovg.com/projects/verifiable-bookmarklets/?src=<url-encoded-source>**.

## Two workflows

The tool also accepts a source URL as a parameter, which turned out to be the better way to share a bookmarklet.

**Authoring.** Publish the source, for example as a GitHub Gist, and link to Verifiable Bookmarklets with that URL as a parameter. The tool fetches the source, generates the bookmarklet locally and shows the fingerprint. Every reader reviews plain JavaScript and builds the executable in their own browser instead of trusting a long opaque link. Pinning a specific Gist revision rather than the mutable latest URL makes the reference stronger, because the source itself cannot change under you.

**Verification.** When someone shares the bookmarklet itself, "I found this in Slack, is it still the original?", the embedded metadata is what helps. Inspect it, read the `src` and `sha`, fetch the source, regenerate and compare.

This is a lightweight reproducible-builds mindset applied to bookmarklets. Not proving the code is good, just proving the executable matches the reviewed source.

## What verification means

Verification means:

> This bookmarklet matches this source.

It does not mean:

- this bookmarklet is safe
- this bookmarklet is trustworthy
- this source is the original source
- this source URL will always return the same code

This is about provenance, not security. I think that distinction matters. Small tools become more useful when they make narrow claims and keep those claims honest.

## Built on simple ideas

### The generation

```jsx
function normalizeSource(source) {
  return source.replace(/\r\n?/g, '\n').trim()
}

function minifySource(source) {
  return normalizeSource(source)
}

function encodeBookmarkletValue(value) {
  return encodeURIComponent(value)
    .replace(/'/g, '%27')
    .replace(/"/g, '%22')
}

function encodeBookmarkletBody(body) {
  return `javascript:${encodeURIComponent(body)}`
}

function createPayload(source) {
  return encodeBookmarkletBody(`(()=>{${minifySource(source)}})()`)
}

function createMetadata(sha, src) {
  return src ? `/*bm:v1;sha=${sha};src=${encodeBookmarkletValue(src)}*/` : `/*bm:v1;sha=${sha}*/`
}

function createBookmarklet(source, sha, src) {
  return encodeBookmarkletBody(`(()=>{${createMetadata(sha, src)}${minifySource(source)}})()`)
}
```

### The validation

```jsx
function decodeBookmarklet(bookmarklet) {
  const trimmed = bookmarklet.trim()
  const body = trimmed.indexOf('javascript:') === 0 ? trimmed.slice('javascript:'.length) : trimmed

  return { decoded: decodeURIComponent(body), hasScheme: trimmed.indexOf('javascript:') === 0 }
}

function parseMetadata(decoded) {
  const matches = decoded.match(/\/\*bm:v1;[^*]*\*\//g)

  if (!matches || matches.length !== 1) {
    return { metadata: null }
  }

  const parts = matches[0].slice(2, -2).split(';')
  const metadata = { bm: 'v1', raw: matches[0] }

  for (let i = 1; i < parts.length; i += 1) {
    const separatorIndex = parts[i].indexOf('=')
    const key = parts[i].slice(0, separatorIndex)
    const value = parts[i].slice(separatorIndex + 1)

    metadata[key] = key === 'src' ? decodeURIComponent(value) : value
  }

  return { metadata }
}

function removeMetadata(decoded) {
  return decoded.replace(/\/\*bm:v1;[^*]*\*\//, '')
}

// Verify: rebuild the payload from the decoded bookmarklet, hash it and
// compare it against the sha embedded in the metadata. Never executes the code.
async function verify(bookmarklet, source) {
  const { decoded, hasScheme } = decodeBookmarklet(bookmarklet)
  const { metadata } = parseMetadata(decoded)
  const payloadBody = removeMetadata(decoded)
  const payload = hasScheme ? encodeBookmarkletBody(payloadBody) : payloadBody

  const embeddedSha = metadata.sha
  const expectedSha = await sha256(createPayload(source))

  return embeddedSha === expectedSha
}
```

All the source are available on this [site github repo](https://github.com/robertovg/robertovgGatsbyjs/blob/main/src/pages/projects/verifiable-bookmarklets.js#L417)

## Simplicity

The current version keeps the deterministic step deliberately conservative: normalize newlines, trim the source, hash the generated payload. Just turns JS you can ran in your console into a bookmarklet.

For now the useful part exists: [Open Verifiable Bookmarklets](/projects/verifiable-bookmarklets/).

We are all asking AI to write more and more tiny scripts that run inside our browsers. This is a small experiment in making those scripts easier to inspect, compare and verify before we execute them.

At least now when I share a bookmarklet with a colleague, I don´t send them a "true me.inetloc" but instead a link to the source and my bookmarklet generator (e.g. [📤 Full Site To Markdown Extractor](https://robertovg.com/projects/verifiable-bookmarklets/?src=https%3A%2F%2Fgist.githubusercontent.com%2Frobertovg%2Fc6ed0ef05a3d1d4c958f551c2abb54c8%2Fraw%2F0de7d7616583305f1aad920910e922e86c0e266d%2FFull%252520Site%252520To%252520Markdown%252520Extractor%252520-%252520bookmarklet.js))
