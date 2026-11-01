import React from 'react'

const GA_MEASUREMENT_ID = 'G-EF5D749TST'

export const onRenderBody = ({ setHtmlAttributes, setHeadComponents }) => {
  setHtmlAttributes({ lang: 'en' })

  // Google Analytics 4 (gtag.js), only in production builds.
  if (process.env.NODE_ENV !== 'production') return

  setHeadComponents([
    <script
      key="gtag-js"
      async
      src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
    />,
    <script
      key="gtag-config"
      dangerouslySetInnerHTML={{
        __html: `
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA_MEASUREMENT_ID}');
`,
      }}
    />,
  ])
}
