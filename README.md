# robertovg.com website

My personal webpage, where I can post from time to time, have general information about my self and try some "React applied to public site" techniques.

The code it-self is quite simple, just out of the box configuration from Gatsby, using some `graphql` queries to fetch images and blog posts and styling with `styled-components`.

Implemented with Gatsby using `gatsby-starter-default`, everything from there was coded from the scratch.

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

Just a simple html form connected with Gatsby form engine. No extra-validations than the out of the box included with html.

### Fonts

Just used default system fonts approach described on [CSS tricks](https://css-tricks.com/snippets/css/system-font-stack/) as Github does. Easy way to have something readable and native for users and fast to load

### Avoiding exploitation of the window.opener API.

I found another magic plugin to avoid this problem and additionally process external native markdown links to a safe links using the proper solution (target='\_blank' rel="nofollow noopener noreferrer").
