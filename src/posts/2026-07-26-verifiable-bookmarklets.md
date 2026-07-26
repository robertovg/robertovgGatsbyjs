---
title: 'Verifiable Bookmarklets'
path: '/blog/verifiable-bookmarklets'
category: projects
tags: [bookmarklets, javascript, tools, provenance]
published: false
date: '2026-07-26'
featuredImage: './images/writing-scripts-as-frontend-with-es6-and-jest.png'
---

I just added a small new tool to the site: [Verifiable Bookmarklets](/projects/verifiable-bookmarklets/).

It is a browser-only utility to generate, inspect and verify JavaScript bookmarklets without
executing them.

The idea is very simple:

> Can this bookmarklet be proven to match this source code?

That is all it tries to answer.

It does not make bookmarklets secure. It does not sandbox them. It does not replace browser
extensions or browser stores. A verified bookmarklet can still be bad code, dangerous code or code
you should not run.

But at least you can know whether the bookmarklet you received is exactly the bookmarklet that was
built from the source being shown.

## Why bookmarklets?

Bookmarklets are old, simple and still useful.

You drag a link to the bookmarks bar, click it later and the browser runs a small piece of
JavaScript in the current page. No install flow, no store review, no account, no backend.

That simplicity is also the problem.

Most of the time, when someone shares a bookmarklet, you see one of two things:

- a readable source code block
- a `javascript:` link you are expected to drag into the browser

There is usually no easy way to prove that both things are the same.

That bothered me enough to make a small utility around it.

## How it works

The current draft format is called `bm:v1`.

When the tool generates a bookmarklet, it builds the bookmarklet payload, calculates a SHA-256 hash
of that payload and then embeds tiny metadata as a JavaScript comment:

```javascript
/*bm:v1;sha=<sha256>;src=<optional-url>*/
```

The hash does not include the metadata itself. That avoids the circular problem of trying to hash
something that contains its own hash.

The tool can already:

- generate a bookmarklet from pasted JavaScript source
- generate a bookmarklet from a raw JavaScript URL
- create a draggable bookmarklet link
- inspect a pasted or dropped bookmarklet
- show decoded JavaScript and metadata
- verify a bookmarklet against the current source

Everything runs in the browser. There is no backend, no login and no publishing service.

## What verification means

Verification means:

> This bookmarklet matches this source.

It does not mean:

- this bookmarklet is safe
- this bookmarklet is trustworthy
- this source is the original source
- this source URL will always return the same code

This is about provenance, not security.

I think that distinction matters. Small tools become more useful when they make narrow claims and
keep those claims honest.

## What is next

The current version intentionally keeps the deterministic step conservative: normalize newlines,
trim the source and hash the generated payload.

Before treating `bm:v1` as anything close to stable, I still want to spend more time with the
generation pipeline. The main decision is whether to keep a very small custom normalization rule or
pin a specific JavaScript minifier configuration, probably Terser, as the reference implementation.

For now, the useful part exists:

[Open Verifiable Bookmarklets](/projects/verifiable-bookmarklets/)

It is small, static and already usable enough to test the idea.
