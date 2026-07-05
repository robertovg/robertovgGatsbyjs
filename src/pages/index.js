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

  .index__news a {
    display: inline-flex;
    align-items: center;
    min-height: 24px;
    padding: 0.2rem 0;
  }
`

const IndexPage = ({ data }) => (
  <IndexStyled>
    <Helmet title="Home - Roberto Vázquez González Site" />
    <h2 className="general__pageTitle">Home</h2>
    <article className="index__title">My name is Roberto Vázquez González.</article>

    <article className="index__subtitle">
      I´m an organized and enthusiastic <mark>Full-stack Software Engineer</mark> with
      <mark> 15+ years of experience</mark>.
    </article>

    <article className="index__tagline1">
      I work across the entire stack, from infrastructure and DevOps to backend,{' '}
      <mark>frontend and UI/UX</mark>, where my passion naturally lies.
    </article>
    <article className="index__tagline2">
      <mark>
        <span role="img" aria-label="love">
          💛
        </span>{' '}
        ts,
        <span role="img" aria-label="parenting">
          {' '}
          👨‍🍼
        </span>
        <span role="img" aria-label="surf">
          🏄‍
        </span>
        <span role="img" aria-label="meditation">
          🧘‍
        </span>
        <span role="img" aria-label="guitar">
          🎸
        </span>
      </mark>
    </article>
    <article className="index__news">
      <h3>This is where I share my projects, thoughts and the tools I enjoy using:</h3>
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
