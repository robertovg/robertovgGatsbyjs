import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedinIn, faInstagram, faMedium } from '@fortawesome/fontawesome-free-brands'
import { colors, pageLinks } from './constants'
import { media } from './Breakpoints'

// DEV.to brand icon (not available in this version of fontawesome-free-brands)
const faDev = {
  prefix: 'fab',
  iconName: 'dev',
  icon: [
    448,
    512,
    [],
    'f6cc',
    'M120.12 208.29c-3.88-2.9-7.77-4.35-11.65-4.35H91.03v104.47h17.44c3.88 0 7.77-1.45 11.65-4.35 3.88-2.9 5.82-7.25 5.82-13.06v-69.65c-.01-5.8-1.96-10.16-5.82-13.06zM404.1 32H43.9C19.7 32 .06 51.59 0 75.79v360.42C.06 460.41 19.7 480.01 43.9 480h360.2c24.21.01 43.83-19.59 43.9-43.79V75.79C447.93 51.59 428.31 32 404.1 32zM154.2 291.19c0 18.81-11.61 47.31-48.36 47.25h-46.4V172.98h47.38c35.44 0 47.36 28.46 47.37 47.28l.01 70.93zm100.68-88.66H201.6v38.42h32.57v29.57H201.6v38.41h53.29v29.57h-62.18c-11.16.29-20.44-8.53-20.72-19.69V193.7c-.27-11.15 8.56-20.41 19.71-20.69h63.19l-.01 29.52zm103.64 115.29c-13.2 30.75-36.85 24.63-47.44 0l-38.53-144.8h32.57l29.71 113.72 29.79-113.72h32.57l-38.66 144.8z',
  ],
}

const faHashnode = {
  prefix: 'fab',
  iconName: 'hashnode',
  icon: [
    640,
    640,
    [],
    'e499',
    'M99.7 235.1C52.8 281.1 52.8 358 99.7 404.9L235.6 540.8C281.6 587.7 358.5 587.7 405.4 540.8L541.3 404.9C588.2 358 588.2 281.1 541.3 235.1L405.4 99.2C358.5 52.3 281.6 52.3 235.6 99.2L99.7 235.1zM260 260.5C292.9 227.4 346.4 227.1 379.5 260C412.6 292.9 412.9 346.4 380 379.5C347.1 412.6 293.6 412.9 260.5 380C227.4 347.1 227.1 293.6 260 260.5z',
  ],
}

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
    {
      label: 'DEV',
      link: 'https://dev.to/robertovg/',
      color: '#000000',
      icon: faDev,
    },
    {
      label: 'Hashnode',
      link: 'https://robertovg.hashnode.dev/',
      color: '#2962FF',
      icon: faHashnode,
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
            <CookieBannerLink
              target="_blank"
              rel="noopener noreferrer"
              href="http://cookiesandyou.com/"
            >
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
