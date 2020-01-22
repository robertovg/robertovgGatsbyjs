import React from 'react'
import Link from 'gatsby-link'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'
import styled from 'styled-components'
import Helmet from 'react-helmet'
import { colors } from '../components/constants'
import { media } from '../components/Breakpoints'

const BlogStyled = styled.section`
  summary {
    font-size: 1.2rem;
  }
  a,
  a:link,
  a:visited {
    color: ${colors.darkTextColor};
    text-decoration: none;
  }
  ul {
    padding: 0;
    li {
      list-style: none;
    }
  }
`
const BlogItemStyled = styled.article`
  display: grid;
  grid: auto / 200px 1fr;
  grid-gap: 1rem;
  align-content: center;
  margin-bottom: 1rem;
  border-radius: 3px;
  padding: 5px;
  &:hover {
    transition: background-color 200ms linear;
    color: ${colors.lightTextColor};
    background: ${colors.blogItemHoverBG};
    .gatsby-image-wrapper {
      opacity: 0.5;
    }
  }
  ${media.tablet`
    grid: auto / 100px 1fr;
    .gatsby-image-wrapper  {
      width: 100px;
      max-height: 100px;
    }
  `};
  ${media.phone`
    grid: 100px 50px / auto;
    justify-items: center;
    .gatsby-image-wrapper  {
      width: 100px;
      max-height: 100px;
    }
  `};
`
const FeaturedImageStyled = styled.div`
  background-color: ${colors.lightTextColor};
`

const BlogItemSummaryStyled = styled.div`
  align-self: center;
  align-content: center;
`
const BlogPage = ({ data }) => (
  <BlogStyled>
    <Helmet title="Blog - Roberto Vázquez González Site" />
    <h2 className="general__pageTitle">Blog Posts</h2>
    <summary>In this section you can find posts I occasionally create.</summary>
    <ul>
      {data.allMarkdownRemark.edges.map(({ node: post }) => (
        <li key={post.id}>
          <Link key={post.id} to={post.frontmatter.path}>
            <BlogItemStyled>
              <FeaturedImageStyled>
                <Img sizes={post.frontmatter.featuredImage.childImageSharp.sizes} />
              </FeaturedImageStyled>
              <BlogItemSummaryStyled>
                <h3>{post.frontmatter.title}</h3>
                <time>{post.frontmatter.date}</time>
              </BlogItemSummaryStyled>
            </BlogItemStyled>
          </Link>
        </li>
      ))}
    </ul>
    <div>
      Showing {data.allMarkdownRemark.edges.length} of {data.allMarkdownRemark.totalCount}
    </div>
  </BlogStyled>
)
export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { published: { eq: true } } }
      limit: 20
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            path
            featuredImage {
              childImageSharp {
                sizes(maxWidth: 1260) {
                  ...GatsbyImageSharpSizes
                }
              }
            }
            date(formatString: "DD MMMM, YYYY")
          }
        }
      }
    }
  }
`

export default BlogPage
/**
 * Prop types
 */
BlogPage.propTypes = {
  data: PropTypes.object,
}

BlogPage.defaultProps = {
  data: {},
}
