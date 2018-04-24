import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import {
  faGithub,
  faLinkedinIn,
  faInstagram,
  faLastfm,
  faTwitter,
} from '@fortawesome/fontawesome-free-brands';
import CookieConsent from 'react-cookie-consent';
import { colors, pageLinks } from './constants';
import { media } from './Breakpoints';

const FooterWrapperStyled = styled.div`
  padding: 5px;
  grid-area: footer;
  display: grid;
  z-index: 1;
  &,
  h3 {
    text-align: center;
    font-size: 1rem;
  }
  &:hover {
    background-color: ${colors.contentWrappersBackground};
  }
`;
const SocialWrapperStyled = styled.div`
  display: grid;
  grid-auto-flow: column;
  justify-content: center;
  grid-gap: 1rem;
  justify-content: center;
  ${media.tablet`
    justify-content: stretch;
  `};
  ${media.phone`
    grid-gap: unset;
  `};
`;
const SocialLinkStyled = styled.a`
  padding: 5px 8px;
  border-radius: 3px;
  font-size: 2rem;
  transition: transform 200ms ease;
  max-height: 40px;
  &:hover {
    transform: scale(1.1);
    color: ${colors.lightTextColor};
    background-color: ${props => props.color};
  }
  ${media.phone`
    font-size: 1.5rem;
  `};
`;
const CookiesContent = styled.div`
  margin-right: 15px;
  a {
    color: ${colors.lightTextColor};
  }
`;

SocialLinkStyled.propsTypes = {
  color: PropTypes.string,
};

SocialLinkStyled.defaultProps = {
  color: '#fff',
};
const Footer = () => {
  const socialLinks = [
    {
      label: 'Github',
      link: 'https://github.com/robertovg',
      color: '#4183c4',
      icon: faGithub,
    },
    {
      label: 'LinkedIn',
      link: 'https://www.linkedin.com/in/robertovg',
      color: '#007BB5',
      icon: faLinkedinIn,
    },
    {
      label: 'Instagram',
      link: 'https://www.instagram.com/robertovg/',
      color: '#C32AA3',
      icon: faInstagram,
    },
    {
      label: 'Last.fm',
      link: 'https://www.last.fm/user/robertovg24',
      color: '#b90000',
      icon: faLastfm,
    },
    {
      label: 'Twitter',
      link: 'https://twitter.com/robertovg24',
      color: '#1DA1F2',
      icon: faTwitter,
    },
  ];

  return (
    <FooterWrapperStyled>
      <h3>You can follow me</h3>
      <SocialWrapperStyled>
        {socialLinks.map(socialLink => (
          <SocialLinkStyled
            key={socialLink.label}
            target="_blank"
            rel="noopener noreferrer"
            color={socialLink.color}
            href={socialLink.link}
          >
            <FontAwesomeIcon icon={socialLink.icon} />
          </SocialLinkStyled>
        ))}
      </SocialWrapperStyled>
      <CookieConsent
        location="bottom"
        buttonText="Got it!"
        cookieName="robertovg"
        style={{
          background: pageLinks[0].gradientTop,
          display: 'grid',
          gridAutoFlow: 'column',
          justifyContent: 'center',
        }}
        buttonStyle={{
          backgroundColor: pageLinks[0].gradientBottom,
          fontSize: 'large',
          cursor: 'pointer',
          padding: '0.3rem 1rem',
          borderRadius: '3px',
          right: 'unset',
          position: 'unset',
          marginRight: '1rem',
        }}
      >
        <CookiesContent>
          This website uses cookies to ensure you get the best experience on our website.{' '}
          <a target="_blank" rel="noopener noreferrer" href="http://cookiesandyou.com/">
            Learn more
          </a>{' '}
        </CookiesContent>
      </CookieConsent>
    </FooterWrapperStyled>
  );
};

export default Footer;
