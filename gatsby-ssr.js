import React from 'react'

const GA_MEASUREMENT_ID = 'G-EF5D749TST'

// Reload once when a page asks for a build file that no longer exists.
//
// Every deploy replaces the hashed bundles (app-*, commons-*, component---*,
// path---*). A page that the browser kept from before the deploy (back/forward
// cache, a restored tab or an HTML response reused without revalidation) still
// points at the old names, which now return a 404 page. React never hydrates,
// so images stay on the blurred placeholder and the page stops responding.
//
// This runs inline in <head>, before any bundle, so it still works when the
// bundle that failed is the one that would have registered a handler. It only
// reacts to our own hashed bundles and reloads at most once per URL every five
// minutes (and never twice within ten seconds), so a file that is really gone
// cannot cause a reload loop. If sessionStorage is not available it does nothing.
const CHUNK_RELOAD_SCRIPT = `
(function () {
  var KEY = 'robertovg-chunk-reload'
  var CHUNK = /\\/(app-|commons-|component---|path---|layout-)[^\\/?#]*\\.js/
  var MODULE_ERROR = /evaluating '[^']*\\.call'|reading 'call'|property 'call' of undefined/

  function reloadOnce() {
    try {
      var now = Date.now()
      var url = window.location.pathname
      var last = JSON.parse(window.sessionStorage.getItem(KEY) || 'null')
      if (last && (now - last.at < 10000 || (last.url === url && now - last.at < 300000))) return
      window.sessionStorage.setItem(KEY, JSON.stringify({ url: url, at: now }))
    } catch (e) {
      return
    }
    window.location.reload()
  }

  window.addEventListener(
    'error',
    function (event) {
      var target = event.target
      if (target && target.tagName === 'SCRIPT') {
        var src = target.src || ''
        if (src.indexOf(window.location.protocol + '//' + window.location.host + '/') === 0 && CHUNK.test(src)) {
          reloadOnce()
        }
        return
      }
      if (MODULE_ERROR.test(event.message || '') && CHUNK.test(event.filename || '')) {
        reloadOnce()
      }
    },
    true
  )

  window.addEventListener('unhandledrejection', function (event) {
    var reason = event.reason
    var message = (reason && (reason.message || String(reason))) || ''
    if (/Loading chunk|ChunkLoadError/.test(message)) reloadOnce()
  })
})()
`

export const onRenderBody = ({ setHtmlAttributes, setHeadComponents }) => {
  setHtmlAttributes({ lang: 'en' })

  // Only production builds have hashed bundles and Google Analytics.
  if (process.env.NODE_ENV !== 'production') return

  setHeadComponents([
    <script key="chunk-reload" dangerouslySetInnerHTML={{ __html: CHUNK_RELOAD_SCRIPT }} />,
    // Google Analytics 4 (gtag.js).
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
