import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import {
  faGithub,
  faLinkedinIn,
  faInstagram,
  faMedium,
} from '@fortawesome/fontawesome-free-brands'
import { colors, pageLinks } from './constants'
import { media } from './Breakpoints'

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
`

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
`

const SocialLinkStyled = styled.a`
  min-width: 44px;
  min-height: 44px;
  padding: 5px 8px;
  border-radius: 3px;
  font-size: 1.9rem;
  transition: transform 200ms ease;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  &:hover {
    transform: scale(1.1);
    color: ${colors.lightTextColor};
    background-color: ${props => props.color};
  }
`

const CookieBannerStyled = styled.div`
  margin-top: 1rem;
  padding: 0.75rem 1rem;
  border-radius: 6px;
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 0.75rem;
  align-items: center;
  background: ${pageLinks[0].gradientTop};
  color: ${colors.lightTextColor};
`

const CookieBannerText = styled.p`
  margin: 0;
`

const CookieBannerButton = styled.button`
  border: 0;
  border-radius: 3px;
  padding: 0.35rem 0.9rem;
  font-size: 1rem;
  font-weight: 700;
  cursor: pointer;
  background: ${pageLinks[0].gradientBottom};
  color: ${colors.darkTextColor};
`

const CookieBannerLink = styled.a`
  color: ${colors.lightTextColor};
`

SocialLinkStyled.propsTypes = {
  color: PropTypes.string,
}

SocialLinkStyled.defaultProps = {
  color: '#fff',
}

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
      label: 'Medium',
      link: 'https://medium.com/@robertovg',
      color: '#000000',
      icon: faMedium,
    },
  ]
  const [cookieAccepted, setCookieAccepted] = useState(true)

  useEffect(() => {
    if (typeof window === 'undefined') return

    const stored = window.localStorage.getItem('robertovg-cookie-consent')
    setCookieAccepted(stored === 'accepted')
  }, [])

  function acceptCookies() {
    window.localStorage.setItem('robertovg-cookie-consent', 'accepted')
    setCookieAccepted(true)
  }

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
            aria-label={socialLink.label}
            title={socialLink.label}
          >
            <FontAwesomeIcon icon={socialLink.icon} />
          </SocialLinkStyled>
        ))}
      </SocialWrapperStyled>
      {!cookieAccepted ? (
        <CookieBannerStyled role="status" aria-live="polite">
          <CookieBannerText>
            This website uses cookies to ensure you get the best experience on our website.{' '}
            <CookieBannerLink target="_blank" rel="noopener noreferrer" href="http://cookiesandyou.com/">
              Learn more
            </CookieBannerLink>
          </CookieBannerText>
          <CookieBannerButton type="button" onClick={acceptCookies}>
            Got it!
          </CookieBannerButton>
        </CookieBannerStyled>
      ) : null}
    </FooterWrapperStyled>
  )
}

export default Footer
