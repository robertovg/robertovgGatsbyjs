const fs = require('fs')
const path = require('path')

function fail(message) {
  console.warn(`[patch-gatsby-plugin-feed-generator] ${message}`)
}

function patchFile(moduleName, replacements, { injectAfter } = {}) {
  let target

  try {
    target = require.resolve(moduleName)
  } catch (error) {
    fail(`Unable to resolve ${moduleName}: ${error.message}`)
    return false
  }

  if (!fs.existsSync(target)) {
    fail(`Target file does not exist: ${target}`)
    return false
  }

  const source = fs.readFileSync(target, 'utf8')
  let patched = source

  if (injectAfter && !patched.includes(injectAfter.marker)) {
    patched = patched.replace(injectAfter.after, `${injectAfter.after}${injectAfter.marker}`)
  }

  replacements.forEach(({ from, to }) => {
    patched = patched.replace(from, to)
  })

  if (patched === source) {
    fail(`No ${moduleName} compatibility changes were needed.`)
    return false
  }

  fs.writeFileSync(target, patched)
  console.log(
    `[patch-gatsby-plugin-feed-generator] Patched ${path.relative(process.cwd(), target)}`,
  )
  return true
}

// Helpers injected into the compiled plugin so that:
//  - absolute URLs are joined without collapsing the `https://` double slash
//    (path.join turns `https://host` + `/slug` into `https:/host/slug`), and
//  - post tags are normalised into clean, non-empty RSS <category> values.
const helpers = `
var joinURL = function joinURL(base, segment) {
  return String(base).replace(/\\/+$/, '') + '/' + String(segment == null ? '' : segment).replace(/^\\/+/, '');
};

var normalizeCategories = function normalizeCategories(tags) {
  if (!Array.isArray(tags)) {
    return [];
  }
  return tags
    .map(function (tag) { return tag == null ? '' : String(tag).trim(); })
    .filter(function (tag) { return tag.length > 0; });
};
`

patchFile(
  'gatsby-plugin-feed-generator/gatsby-node.js',
  [
    // Item id/url: build absolute post URLs with `https://` intact.
    {
      from: /id: _path2\.default\.join\(siteUrl, slug\),/g,
      to: 'id: joinURL(siteUrl, slug),',
    },
    {
      from: /url: _path2\.default\.join\(siteUrl, slug\),/g,
      to: 'url: joinURL(siteUrl, slug),',
    },
    // Carry cleaned tags through to each feed item.
    {
      from: /content_html: html\s*\n(\s*)\};/,
      to: 'content_html: html,\n$1  categories: normalizeCategories(frontmatter.tags)\n$1};',
    },
    // JSON feed absolute URLs.
    {
      from: /_path2\.default\.join\(siteUrl, 'feed\.json'\)/g,
      to: "joinURL(siteUrl, 'feed.json')",
    },
    // Favicon / channel image absolute URL.
    {
      from: /_path2\.default\.join\(siteUrl, 'icon\.png'\)/g,
      to: "joinURL(siteUrl, 'icon.png')",
    },
    // atom:self link. The written file is feed.xml, so point self there.
    {
      from: /_path2\.default\.join\(siteUrl, 'feed\.rss'\)/g,
      to: "joinURL(siteUrl, 'feed.xml')",
    },
    // Emit <category> elements for each post tag.
    {
      from: /date: i\.date_published\s*\n(\s*)\}\);/,
      to: 'date: i.date_published,\n$1  categories: i.categories\n$1});',
    },
  ],
  {
    injectAfter: {
      after: "var publicPath = './public';",
      marker: `\n${helpers}`,
    },
  },
)
