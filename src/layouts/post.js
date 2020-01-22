import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import styled from 'styled-components'
import { DiscussionEmbed } from 'disqus-react'

require('prismjs/themes/prism.css')

const PostStyled = styled.section`
  h1 {
    font-size: 1.5rem;
  }
  .gatsby-image-wrapper {
    margin-bottom: 1rem;
    width: 100%;
    max-height: 70vh;
  }
  .gatsby-highlight pre {
    margin: 0 auto;
    width: 45em;
    max-width: calc(100vw - 6em);
    max-height: 30rem;
    overflow: auto;
  }
`
export default function Template({ data }) {
  const { markdownRemark: post } = data
  const postTags = post.frontmatter.tags || ['brilliant idea']
  return (
    <PostStyled>
      <Helmet
        title={`${post.frontmatter.title} - Roberto Vázquez González Site`}
        meta={[
          {
            name: 'description',
            content: `${post.frontmatter.title} - Roberto Vázquez González Site`,
          },
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
      <DiscussionEmbed
        shortname="robertovg-com"
        config={{
          url: `https://robertovg.com${post.frontmatter.path}`,
          identifier: post.frontmatter.path,
          title: post.frontmatter.title,
        }}
      />
    </PostStyled>
  )
}

export const postQuery = graphql`
  query BlogPostByPath($path: String) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
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
