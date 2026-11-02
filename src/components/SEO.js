import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import defaultImage from '../images/avatar.jpg'

// Size of src/images/avatar.jpg, used as the default share image.
const DEFAULT_IMAGE_WIDTH = 1550
const DEFAULT_IMAGE_HEIGHT = 1550

// The site is served with trailing slashes (the version without it answers
// with a 308 redirect), so canonical and og:url always end with "/".
export function canonicalUrl(siteUrl, pathname = '/') {
  const base = siteUrl.replace(/\/+$/, '')
  let path = pathname || '/'
  if (!path.startsWith('/')) path = `/${path}`
  if (!path.endsWith('/') && !/\.[a-z0-9]+$/i.test(path)) path = `${path}/`
  return `${base}${path}`
}

function absoluteUrl(siteUrl, url) {
  if (!url) return undefined
  if (/^https?:\/\//i.test(url)) return url
  return `${siteUrl.replace(/\/+$/, '')}${url.startsWith('/') ? '' : '/'}${url}`
}

const SEO = ({
  siteMetadata,
  pathname,
  title,
  description,
  image,
  imageWidth,
  imageHeight,
  imageAlt,
  type,
  publishedTime,
}) => {
  const { siteUrl, title: siteTitle, description: siteDescription } = siteMetadata
  const url = canonicalUrl(siteUrl, pathname)
  const metaTitle = title || siteTitle
  const metaDescription = description || siteDescription
  const hasCustomImage = Boolean(image)
  const metaImage = absoluteUrl(siteUrl, hasCustomImage ? image : defaultImage)
  const width = hasCustomImage ? imageWidth : DEFAULT_IMAGE_WIDTH
  const height = hasCustomImage ? imageHeight : DEFAULT_IMAGE_HEIGHT
  const alt = imageAlt || (hasCustomImage ? metaTitle : siteTitle)
  // Posts have wide cover images; the default avatar is square.
  const twitterCard = hasCustomImage ? 'summary_large_image' : 'summary'

  const meta = [
    { name: 'description', content: metaDescription },
    { property: 'og:site_name', content: siteTitle },
    { property: 'og:title', content: metaTitle },
    { property: 'og:description', content: metaDescription },
    { property: 'og:url', content: url },
    { property: 'og:type', content: type },
    { property: 'og:image', content: metaImage },
    { property: 'og:image:alt', content: alt },
    { name: 'twitter:card', content: twitterCard },
    { name: 'twitter:title', content: metaTitle },
    { name: 'twitter:description', content: metaDescription },
    { name: 'twitter:image', content: metaImage },
    { name: 'twitter:image:alt', content: alt },
  ]
  if (width && height) {
    meta.push(
      { property: 'og:image:width', content: String(width) },
      { property: 'og:image:height', content: String(height) }
    )
  }
  if (type === 'article' && publishedTime) {
    meta.push({ property: 'article:published_time', content: publishedTime })
  }

  return <Helmet meta={meta} link={[{ rel: 'canonical', href: url }]} />
}

SEO.propTypes = {
  siteMetadata: PropTypes.shape({
    siteUrl: PropTypes.string.isRequired,
    title: PropTypes.string,
    description: PropTypes.string,
  }).isRequired,
  pathname: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  imageWidth: PropTypes.number,
  imageHeight: PropTypes.number,
  imageAlt: PropTypes.string,
  type: PropTypes.string,
  publishedTime: PropTypes.string,
}

SEO.defaultProps = {
  pathname: '/',
  title: undefined,
  description: undefined,
  image: undefined,
  imageWidth: undefined,
  imageHeight: undefined,
  imageAlt: undefined,
  type: 'website',
  publishedTime: undefined,
}

export default SEO
