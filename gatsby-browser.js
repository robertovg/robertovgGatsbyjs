// Send a GA4 page_view on client-side route changes.
//
// gtag('config') in gatsby-ssr.js already sends the page_view for the
// initial page load, so the first onRouteUpdate call is skipped.
// react-helmet updates document.title in a requestAnimationFrame callback,
// so the event waits two frames to make sure page_title is the new one.

let isInitialLoad = true

const sendPageView = location => {
  if (typeof window.gtag !== 'function') return

  window.gtag('event', 'page_view', {
    page_location: window.location.href,
    page_path: `${location.pathname}${location.search}${location.hash}`,
    page_title: document.title,
  })
}

export const onRouteUpdate = ({ location }) => {
  if (process.env.NODE_ENV !== 'production') return

  // Gatsby 1 does not pass prevLocation, so track the first call here.
  if (isInitialLoad) {
    isInitialLoad = false
    return
  }

  if ('requestAnimationFrame' in window) {
    requestAnimationFrame(() => {
      requestAnimationFrame(() => setTimeout(() => sendPageView(location), 0))
    })
  } else {
    // Matches the delay used by gatsby-plugin-google-gtag.
    setTimeout(() => sendPageView(location), 32)
  }
}
