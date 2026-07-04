import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'
import styled from 'styled-components'
import Helmet from 'react-helmet'
import { media } from '../components/Breakpoints'

const AboutStyled = styled.section`
  .about__avatar {
    width: 33%;
    margin: 0 1rem 1rem 0;
    float: left;
  }

  article {
    margin-bottom: 1rem;
  }
  ${media.tablet`
    .about__avatar {
      width: 50%;
    }
  `};

  ${media.phone`
    .about__avatar {
      width: 100%;
    }
  `};
`
const AboutPage = ({ data }) => (
  <AboutStyled>
    <Helmet title="About - Roberto Vázquez González Site" />
    <h2 className="general__pageTitle">About me</h2>
    <div className="about__avatar">
      <Img sizes={data.background.sizes} />
    </div>
    <article>
      I'm Roberto Vázquez González, a Software Engineer from southern Spain with more than
      <mark> 15 years of professional experience</mark> building web applications, platforms and
      developer tooling.
    </article>
    <article>
      I'm a <mark>full-stack engineer</mark> with a particular passion for
      <mark> frontend and UI/UX</mark>. I enjoy working across every part of a system, from
      infrastructure, DevOps and backend services to the user interface, but I naturally gravitate
      towards creating thoughtful user experiences, scalable frontend architectures and developer
      tooling.
    </article>
    <article>
      I currently work as a Senior Engineer at <mark>EverQuote</mark>, where I'm a key contributor
      across multiple products and engineering initiatives. I ship features, build new products,
      improve existing platforms and establish reusable engineering best practices across teams.
      While my expertise lies in frontend architecture and developer experience, I contribute across
      the stack wherever I can create the most value.
    </article>
    <article>
      I've been working <mark>remotely full-time since January 2014</mark>, an experience that has
      taught me the importance of communication, ownership and building software that scales not
      only technically, but also across distributed teams.
    </article>

    <article>
      Outside of work, you'll usually find me spending time with my family, surfing, playing guitar
      or building side projects that let me explore new ideas and technologies.
    </article>
  </AboutStyled>
)
export const pageQuery = graphql`
  query ImageBG {
    background: imageSharp(id: { regex: "/avatar.jpg/" }) {
      sizes(maxWidth: 1500) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`
export default AboutPage

/**
 * Prop types
 */
AboutPage.propTypes = {
  data: PropTypes.object,
}

AboutPage.defaultProps = {
  data: {},
}
