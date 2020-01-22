import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import styled from 'styled-components'

import Header from '../components/Header'
import Footer from '../components/Footer'

import './index.css'
import { colors, pageLinks, maxMainWith } from '../components/constants'
import { media } from '../components/Breakpoints'

function getActualPage(href) {
  const foundPage = pageLinks.find(e => e.link !== '/' && href.match(e.link))
  return foundPage || pageLinks[0]
}

const GatsbyStyled = styled.div`
  --padding-base: 16px;
  padding: calc(var(--padding-base) * 2);
  background: linear-gradient(
    to bottom right,
    ${props => props.actualPage.gradientTop} 0%,
    ${props => props.actualPage.gradientBottom} 100%
  );
  ${media.tablet`
    padding: var(--padding-base);
  `};
`
const PageStyled = styled.main`
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.14), 0 4px 8px rgba(0, 0, 0, 0.28);
  margin: 0 auto;
  display: grid;
  grid-template-rows: 50px 1fr 100px;
  grid-template-areas:
    'header'
    'body'
    'footer';
  max-width: ${maxMainWith};
  min-height: calc(100vh - var(--padding-base) * 4);
  background-color: ${colors.mainContentWrapper};
  opacity: 1;
  border-radius: 3px;
  .general__pageTitle {
    display: none;
  }

  ${media.tablet`
    min-height: calc(100vh - var(--padding-base) * 2);
    .general__pageTitle {
      display: unset;
      position: absolute;
      margin-left: 1rem;
      margin-top: 0.75rem;
      font-size: 1.5rem;
      top: var(--padding-base);
      left: var(--padding-base);
    }
  `};
`

const BodyStyled = styled.div`
  grid-area: body;
  padding: var(--padding-base);
`
const parentContainer = 'content_container'
const TemplateWrapper = ({ children, location }) => (
  <GatsbyStyled actualPage={getActualPage(location.pathname)} id={parentContainer}>
    <Helmet
      title="Roberto Vázquez González Site"
      meta={[
        { name: 'description', content: 'Roberto Vázquez González Personal Web Site' },
        {
          name: 'keywords',
          content: `developer,
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
    <PageStyled>
      <Header
        offsetTopQueryToElement={`#${parentContainer} main`}
        actualPage={getActualPage(location.pathname)}
      />
      <BodyStyled>{children()}</BodyStyled>
      <Footer />
    </PageStyled>
  </GatsbyStyled>
)

export default TemplateWrapper

/**
 * Prop types
 */
TemplateWrapper.propTypes = {
  children: PropTypes.func,
  location: PropTypes.object,
}

TemplateWrapper.defaultProps = {
  children() {},
  location: {},
}
