import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import styled from 'styled-components'

import SEO from '../components/SEO'
// Disqus comments temporarily disabled (no comments yet)
// import { DiscussionEmbed } from 'disqus-react'

require('prismjs/themes/prism.css')

const PostStyled = styled.section`
  overflow-wrap: anywhere;
  word-break: break-word;
  h1 {
    font-size: 1.5rem;
  }
  .gatsby-image-wrapper {
    margin-bottom: 1rem;
    width: 100%;
    max-height: 70vh;
  }
  .gatsby-highlight {
    max-width: 100%;
    overflow: auto;
    margin: 1rem auto;
  }
  .gatsby-highlight pre {
    margin: 0 auto;
    width: 45em;
    max-width: 100%;
    max-height: 30rem;
    overflow: auto;
  }
`
// Reuse the largest image already generated for the post cover, so the share
// image is the same file the page shows. Its width comes from the srcSet entry
// matching src, and the height from the aspect ratio.
function shareImageFromSizes({ src, srcSet, aspectRatio }) {
  const entry = (srcSet || '')
    .split(',')
    .map(item => item.trim().split(/\s+/))
    .find(([url]) => url === src)
  const width = entry && entry[1] ? parseInt(entry[1], 10) : undefined
  const height = width && aspectRatio ? Math.round(width / aspectRatio) : undefined
  return { src, width, height }
}

export default function Template({ data }) {
  const { markdownRemark: post, site } = data
  const postTags = post.frontmatter.tags || ['brilliant idea']
  const shareImage = shareImageFromSizes(post.frontmatter.featuredImage.childImageSharp.sizes)
  return (
    <PostStyled>
      <SEO
        siteMetadata={site.siteMetadata}
        pathname={post.frontmatter.path}
        title={post.frontmatter.title}
        description={post.excerpt}
        image={shareImage.src}
        imageWidth={shareImage.width}
        imageHeight={shareImage.height}
        imageAlt={post.frontmatter.title}
        type="article"
        publishedTime={post.frontmatter.isoDate}
      />
      <Helmet
        title={`${post.frontmatter.title} - Roberto Vázquez González Site`}
        meta={[
          {
            name: 'keywords',
            content: `${postTags.join(',')},developer,
            frontend,
            digitalNomad,
            remote,
            javascript,
            es6,
            react,
            angular,
            css,
            webpack,
            graphql,
            redux-saga`,
          },
        ]}
      />
      <h2 className="general__pageTitle">Blog Post</h2>
      <Img sizes={post.frontmatter.featuredImage.childImageSharp.sizes} />
      <h1>{post.frontmatter.title}</h1>
      <time>{post.frontmatter.date}</time>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
      <Link to="/blog">Go back to the blog section.</Link>
      {/* Disqus comments temporarily disabled (no comments yet)
      <DiscussionEmbed
        shortname="robertovg-com"
        config={{
          url: `https://robertovg.com${post.frontmatter.path}`,
          identifier: post.frontmatter.path,
          title: post.frontmatter.title,
        }}
      />
      */}
    </PostStyled>
  )
}

export const postQuery = graphql`
  query BlogPostByPath($path: String) {
    site {
      siteMetadata {
        title
        description
        siteUrl
      }
    }
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      excerpt(pruneLength: 200)
      frontmatter {
        path
        title
        featuredImage {
          childImageSharp {
            sizes(maxWidth: 1260) {
              ...GatsbyImageSharpSizes
            }
          }
        }
        date(formatString: "DD MMM, YYYY")
        isoDate: date(formatString: "YYYY-MM-DD")
        tags
      }
    }
  }
`

/**
 * Prop types
 */
Template.propTypes = {
  data: PropTypes.object,
}

Template.defaultProps = {
  data: {},
}
