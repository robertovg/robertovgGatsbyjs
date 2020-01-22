import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import styled from 'styled-components'

const IndexStyled = styled.section`
  display: grid;
  grid-auto-flow: row;
  grid-template: 52px 100px 100px 1fr / auto;
  height: 100%;
  background-color: transparent;
  .index__title {
    grid-area: 1 / 1 / 2 /-1;
    z-index: 1;
  }
  .index__subtitle {
    grid-area: 2 / 1 / 3 /-1;
    z-index: 1;
  }
  .index__tagline1 {
    grid-area: 3 / 1 / 4 /-1;
    z-index: 1;
  }
  .index__tagline2 {
    grid-area: 4 / 1 / -1 /-1;
    z-index: 1;
  }
`

const IndexPage = ({ data }) => (
  <IndexStyled>
    <Helmet title="Home - Roberto Vázquez González Site" />
    <h2 className="general__pageTitle">Home</h2>
    <article className="index__title">My name is Roberto</article>
    <article className="index__subtitle">
      I am an organized and enthusiastic <mark>Javascript Engineer</mark> with
      <mark> 10+ years experience</mark> and a passion for <mark>development</mark>.
    </article>
    <article className="index__tagline1">
      Currently I am focused on the <mark>frontend, UX, and FP</mark>.
    </article>
    <article className="index__tagline2">
      <mark>
        <span role="img" aria-label="love">
          💛
        </span>
        js (^es6),
        <span role="img" aria-label="surf">
          🏄‍
        </span>
        <span role="img" aria-label="ashtanga yoga">
          🧘‍
        </span>
        <span role="img" aria-label="music & playing guitar">
          🎸
        </span>
        .
      </mark>
    </article>
    <article className="index__news">
      <h3>Recently I wrote about:</h3>
      <ul>
        {data.allMarkdownRemark.edges.map(({ node: post }) => (
          <li key={post.id}>
            <Link key={post.id} to={post.frontmatter.path}>
              {post.frontmatter.title}
            </Link>
          </li>
        ))}
      </ul>
    </article>
  </IndexStyled>
)
export default IndexPage

export const pageQuery = graphql`
  query LastPostsQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { published: { eq: true } } }
      limit: 4
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            path
          }
        }
      }
    }
  }
`

/**
 * Prop types
 */
IndexPage.propTypes = {
  data: PropTypes.object,
}

IndexPage.defaultProps = {
  data: {
    allMarkdownRemark: {
      edges: [],
    },
  },
}
