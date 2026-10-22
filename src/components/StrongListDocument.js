import React from 'react'
import styled from 'styled-components'
import { colors } from './constants'
import { media } from './Breakpoints'

export const StrongListDocument = styled.article`
  color: ${colors.darkTextColor};
  max-width: 68ch;
  line-height: 1.65;
  overflow-wrap: anywhere;

  a,
  a:link,
  a:visited {
    color: ${colors.linkColor};
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }

  h1 {
    font-size: 1.8rem;
    line-height: 1.2;
    margin: 0 0 1rem;
  }

  h2 {
    font-size: 1.25rem;
    line-height: 1.3;
    margin: 1.75rem 0 0.6rem;
  }

  h3 {
    font-size: 1.05rem;
    line-height: 1.35;
    margin: 1.25rem 0 0.35rem;
  }

  p,
  ul {
    margin: 0 0 1rem;
  }

  ul {
    padding-left: 1.2rem;
  }

  li + li {
    margin-top: 0.35rem;
  }

  code {
    font-family: Consolas, Monaco, 'Andale Mono', monospace;
    font-size: 0.92em;
  }

  .meta p {
    margin-bottom: 0.35rem;
  }

  nav {
    display: flex;
    flex-wrap: wrap;
    gap: 0.25rem 1rem;
    margin: 0 0 1.5rem;
  }

  nav a {
    display: inline-flex;
    align-items: center;
    min-height: 44px;
  }

  section + section {
    margin-top: 2.5rem;
    padding-top: 1.5rem;
    border-top: 1px solid ${colors.bordersColor};
  }

  ${media.phone`
    h1 {
      font-size: 1.55rem;
    }
  `};
`

export const Placeholder = styled.span`
  background: #fff4cc;
  border-radius: 2px;
  padding: 0 0.2em;
`

const LanguageNav = () => (
  <nav aria-label="Language">
    <a href="#en">English</a>
    <a href="#es">Español</a>
  </nav>
)

export default LanguageNav
