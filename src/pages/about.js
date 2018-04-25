import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Img from 'gatsby-image';
import styled from 'styled-components';
import Helmet from 'react-helmet';
import { media } from '../components/Breakpoints';

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
`;
const AboutPage = ({ data }) => (
  <AboutStyled>
    <Helmet title="About - Roberto Vázquez González Site" />
    <h2 className="general__pageTitle">About me</h2>
    <div className="about__avatar">
      <Img sizes={data.background.sizes} />
    </div>
    <article>
      My name is Roberto Vázquez González. I'm a Spanish freelance programmer based in Conil de la
      Frontera (Spain). I've been successfully working remotely for over 4 years. I have more than
      ten years' extensive experience as a full stack web developer. For the past four years, I've
      been the lead frontend developer for a London-based startup called{' '}
      <a target="_blank" rel="noopener noreferrer" href="https://precursive.com/">
        Precursive
      </a>. If you are interested to get more details about my CV, feel free to{' '}
      <Link to="/contact/">contact me</Link> or check my profile on{' '}
      <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/robertovg">
        Linkedin
      </a>.
    </article>
    <article>
      I practice Ashtanga Yoga 3+ times per week, usually before working at 7:30 am, Ashtanga really
      changed the way I overcome the challenges and it makes my day, even before having properly
      started it.
    </article>
    <article>
      Another passion of mine is playing the guitar. I started to play this instrument in the
      conservatoire when I was ten years old, and continued to do so in a few rock bands until I
      began my university studies. Now, ten years later, I play in a jazz/funk band and I'm
      delighted to be back playing in a group.
    </article>
    <article>
      The province of Cadiz is renowned for its fantastic surf beaches, so last year I decided to
      give surfing a go. I try to get in the water every weekend and enjoy the progress I seem to be
      making.
    </article>
    <article>
      Music, surfing, and ashtanga yoga are the basic foundations of my lifestyle. I feel happier
      than ever and this has had a positive impact on my work, as I feel like I've managed to find
      the right life work balance.
    </article>
  </AboutStyled>
);
export const pageQuery = graphql`
  query ImageBG {
    background: imageSharp(id: { regex: "/avatar.jpg/" }) {
      sizes(maxWidth: 1500) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`;
export default AboutPage;

/**
 * Prop types
 */
AboutPage.propTypes = {
  data: PropTypes.object,
};

AboutPage.defaultProps = {
  data: {},
};
