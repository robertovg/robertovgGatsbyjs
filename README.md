# robertovg.com website

My personal webpage, where I can post from time to time, have general information about my self and try some "React applied to public site" techniques.

The code it-self is quite simple, just out of the box configuration from Gatsby, using some `graphql` queries to fetch images and blog posts and styling with `styled-components`.

Implemented with Gatsby using `gatsby-starter-default`, everything from there was coded from the scratch.

## Local setup

This repo now uses `npm` as the package manager.

### Requirements

- Node.js 22 or newer
- `npm`

### Install

```bash
npm install
```

### Run locally

```bash
npm run develop
```

or

```bash
npm start
```

### Build for production

```bash
npm run build
```

## Deployment

The site is intended to run on **Cloudflare Pages**.

The repository now includes a Cloudflare Pages Function for the contact form at:

- `/api/contact`

That function:

- verifies Cloudflare Turnstile tokens
- sends the message through Resend
- keeps the browser-side form simple and static

The root `wrangler.toml` is included as a deployment reference for Pages builds and environment variables.

## Handcrafted solutions 👨‍💻

### CSS grid Menu with Fullscreen overlay menu (pure css) for mobile

Using [the check box hack](https://css-tricks.com/the-checkbox-hack/) but having also controlled this checkbox because of having multiple need to close it.

### Border Color For each page

This is a nice style inspired on [emotion](https://emotion.sh/). Help to fill the rest with of the page.

### --padding-base vars compatible with fixed and responsive

To make this flexible padding compatible with the header ( which is sometimes fixed or not ) I used some new css vars to adapt the padding of the main area and so show the background gradient.

### Images rendering using sharp technique

Using sharp image loading technique which is very easy with `Gatsby` when loading the images from `Graphql` queries using the plugin `gatsby-transformer-sharp`.

### Favicon

I found this gatsby-plugin-favicon and is great.

### Form

The contact form now uses a Cloudflare Pages Function instead of Netlify forms.

It includes:

- Cloudflare Turnstile protection
- server-side validation for email and message length
- Resend email delivery
- a post-submit redirect to the existing `/thanks/` page

Required environment variables for Cloudflare:

| Variable                    | Required          | Description                                                                   |
| --------------------------- | ----------------- | ----------------------------------------------------------------------------- |
| `GATSBY_TURNSTILE_SITE_KEY` | Yes in production | Public Turnstile site key used by the browser form                            |
| `TURNSTILE_SECRET_KEY`      | Yes in production | Turnstile secret key used by `/api/contact`                                   |
| `RESEND_API_KEY`            | Yes in production | Resend API key used to send the contact email                                 |
| `FROM_EMAIL`                | Yes in production | Sender address used by Resend, for example `Website <noreply@yourdomain.com>` |
| `CONTACT_TO_EMAIL`          | Yes in production | Destination address for contact form messages                                 |

For local development you can set `TURNSTILE_SECRET_KEY=dev` to skip Turnstile verification.

### Fonts

Just used default system fonts approach described on [CSS tricks](https://css-tricks.com/snippets/css/system-font-stack/) as Github does. Easy way to have something readable and native for users and fast to load

### Avoiding exploitation of the window.opener API.

I found another magic plugin to avoid this problem and additionally process external native markdown links to a safe links using the proper solution (target='\_blank' rel="nofollow noopener noreferrer").

### Comments

Just [discuss](https://disqus.com) the official [disqus-react](https://github.com/disqus/disqus-react) component for the blog posts pages.

ℹ️ Have disconnected the comments for now.

### Sitemap

gatsby-plugin-sitemap

### Feed

gatsby-plugin-feed-generator
