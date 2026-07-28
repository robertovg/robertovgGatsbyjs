---
title: 'Verifiable Bookmarklets'
path: '/blog/verifiable-bookmarklets'
category: projects
tags: [bookmarklets, javascript, tools, provenance]
published: true
date: '2026-07-27'
featuredImage: './images/verifiable-bookmarklets.png'
---

I just added a small new tool to the site: [Verifiable Bookmarklets](/projects/verifiable-bookmarklets/). Every bookmarklet it generates carries a SHA-256 fingerprint, so anyone can check that the `javascript:` link they received was really built from the source code they were shown.

It is a lightweight reproducible-builds mindset applied to bookmarklets. Nothing more than that.

The question it answers is:

> Can this bookmarklet be proven to match this source code?

That is all. It does not make bookmarklets secure. It does not sandbox them. It does not replace browser extensions or browser stores. A verified bookmarklet can still be bad code, dangerous code or code you should not run. But at least you can know whether the bookmarklet you received is exactly the bookmarklet that was built from the source being shown.

## Why bookmarklets?

Bookmarklets are old, simple and still useful. You drag a link to the bookmarks bar, click it later and the browser runs a small piece of JavaScript in the current page. No install flow, no store review, no account, no backend.

I still use them every day at work. These are real ones I have written over the years to make repetitive tasks easier, all of them from a pre-AI world, but the same principles apply:

### 🐙 GitHub PR Feedback Extractor v1.0.0

The newest one. Run it on a PR and it opens a dialog listing every comment grouped by author. I tick the ones I care about and it copies a Markdown extraction I can paste straight into an AI agent to iterate on and address.

A GitHub skill with access to the GitHub CLI could do the same, but when I already have the comments in front of me, clicking a bookmarklet is just faster.

### 🔗📋 Copy page link v1.0.3

Generates a Markdown link to the current page and copies it to the clipboard. If there is text selected it becomes the link text, otherwise it falls back to the page title.

### 📤 Full Site To Markdown Extractor v1.0.3

Extracts the content of a page as Markdown so I can feed it to an AI agent. I will expand on this one in a following post.

### 🕳 🧩 🦑 📋 Show / Hide the Content Extractor v1.0.9

Shows an input on the page where I can type a CSS selector. It highlights the matching elements and copies their content to the clipboard.

Most of my others are too specific to my daily work to be worth publishing. The point is the shape of the list: tiny, boring, single-purpose automations that pull an identifier out of a page, reformat something into Markdown, or save me four clicks in an internal tool. An extension would be overkill for every single one of them.

Notice the version numbers too. These things get edited, regenerated and re-dragged constantly, which is exactly where provenance starts to matter.

## Sharing them never worked well

There is no standard way to share a bookmarklet. Drag one to your desktop and you get a `.inetloc` file on macOS, a `.url` file on Windows or a `.desktop` file on Linux. They all contain the `javascript:` URL, but they are not human-readable and they are not nice to share.

For years I generated bookmarklets with [Bookmarklet Maker](https://caiorss.github.io/bookmarklet-maker/), which takes normal JavaScript and gives you back a bookmarklet ready to drag into the browser. That solved generation well enough that I never looked for anything else. I shared them with colleagues, they shared them with me, and I treated them as informal web scripts without any more pretension than that.

## The part that changed recently

Because of LLMs, the generation step has become trivial. Ask for "a bookmarklet that does X" and you get working code back in seconds. That is genuinely useful and I do it often. It also means a lot more `javascript:` URLs are being generated, pasted into Slack and shared between people who never saw the source.

So more mates share bookmarklets with me, and I share more with them. Generation is no longer the bottleneck.

Which is when it hit me: **how do I know that the bookmarklet I received is exactly the one that was built from the source I was shown?** And how can I be sure the bookmarklet I am about to share is exactly the one built from the source I am showing?

Whether that source was written by me, by a colleague or by a model does not really change the question:

> Is this bookmarklet exactly what this source produces?

### Before

- Share an opaque `javascript:` URL
- Trust the author
- Impossible to compare
- "Looks fine"

### After

- Share a source URL
- Verify the build
- Deterministic SHA-256
- "Matches source"

## How it works

Each generated bookmarklet contains a small metadata comment:

```javascript
/*bm:v1;sha=<sha256>;src=<optional-url>*/
```

The tool builds the payload, hashes it with SHA-256 and embeds that comment. The hash does not include the metadata itself, which avoids the circular problem of hashing something that contains its own hash.

The pipeline is deliberately short:

```
normalize source (normalize newlines, trim)
      ↓
build payload
      ↓
SHA-256(payload)
      ↓
embed metadata
      ↓
share
```

The tool can already:

- generate a bookmarklet from pasted JavaScript source
- generate a bookmarklet from a raw JavaScript URL
- create a draggable bookmarklet link
- inspect a pasted or dropped bookmarklet
- show decoded JavaScript and metadata
- verify a bookmarklet against the current source

Everything runs in the browser. No backend, no login, no publishing service.

It also generates a shareable link to the tool with the source URL as a parameter, so anyone can review the source and generate the bookmarklet themselves:

**https://robertovg.com/projects/verifiable-bookmarklets/?src=&lt;url-encoded-source&gt;**

## Two workflows

That source URL parameter turned out to be the better way to share a bookmarklet.

**Authoring.** Publish the source, for example as a GitHub Gist, and link to Verifiable Bookmarklets with that URL as a parameter. The tool fetches the source, generates the bookmarklet locally and shows the fingerprint. Every reader reviews plain JavaScript and builds the executable in their own browser instead of trusting a long opaque link. Pinning a specific Gist revision rather than the mutable latest URL makes the reference stronger, because the source itself cannot change under you.

**Verification.** When someone shares the bookmarklet itself — "I found this in Slack, is it still the original?" — the embedded metadata is what helps. Inspect it, read the `src` and `sha`, fetch the source, regenerate and compare.

## What verification means

Verification means:

> This bookmarklet matches this source.

It does not mean:

- this bookmarklet is safe
- this bookmarklet is trustworthy
- this source is the original source
- this source URL will always return the same code

This is about provenance, not security. I think that distinction matters. Small tools become more useful when they make narrow claims and keep those claims honest.

## The three functions that carry the idea

Generating the payload and the fingerprint `createPayload`, `createMetadata` and `verify`

```javascript
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
```

And verifying, which rebuilds the payload from the decoded bookmarklet, hashes it and compares it against the embedded `sha`. It never executes the code:

```javascript
async function verify(bookmarklet, source) {
  const { decoded, hasScheme } = decodeBookmarklet(bookmarklet)
  const { metadata } = parseMetadata(decoded)
  const payloadBody = removeMetadata(decoded)
  const payload = hasScheme ? encodeBookmarkletBody(payloadBody) : payloadBody

  return metadata.sha === (await sha256(createPayload(source)))
}
```

The deterministic step stays conservative on purpose: normalize newlines, trim the source, hash the generated payload. It just turns JavaScript you could run in your console into a bookmarklet you can check.

The rest of the implementation lives in [this site's GitHub repo](https://github.com/robertovg/robertovgGatsbyjs/blob/main/src/pages/projects/verifiable-bookmarklets.js#L417).

## Try it

[Open Verifiable Bookmarklets](/projects/verifiable-bookmarklets/).

Instead of sending someone an opaque `javascript:` URL, I can now send them a link to the source and let them generate the executable themselves, like this [📤 Full Site To Markdown Extractor](https://robertovg.com/projects/verifiable-bookmarklets/?src=https%3A%2F%2Fgist.githubusercontent.com%2Frobertovg%2Fc6ed0ef05a3d1d4c958f551c2abb54c8%2Fraw%2F0de7d7616583305f1aad920910e922e86c0e266d%2FFull%252520Site%252520To%252520Markdown%252520Extractor%252520-%252520bookmarklet.js).

AI made generating bookmarklets trivial. I wanted to simplify the sharing process and give some transparency to the provenance of the code. This tool does that, and I hope it is useful to others too.
