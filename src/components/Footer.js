import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { colors, pageLinks } from './constants'
import { media } from './Breakpoints'

const faGithub = {
  prefix: 'fab',
  iconName: 'github',
  icon: [
    512,
    512,
    [],
    'f09b',
    'M216.5 362.5c-66-8-112.5-55.5-112.5-117 0-25 9-52 24-70-6.5-16.5-5.5-51.5 2-66 20-2.5 47 8 63 22.5 19-6 39-9 63.5-9s44.5 3 62.5 8.5c15.5-14 43-24.5 63-22 7 13.5 8 48.5 1.5 65.5 16 19 24.5 44.5 24.5 70.5 0 61.5-46.5 108-113.5 116.5 17 11 28.5 35 28.5 62.5l0 52C323 491.5 335.5 500 350.5 494 441 459.5 512 369 512 257 512 115.5 397 0 255.5 0S0 115.5 0 257c0 111 70.5 203 165.5 237.5 13.5 5 26.5-4 26.5-17.5l0-40c-7 3-16 5-24 5-33 0-52.5-18-66.5-51.5-5.5-13.5-11.5-21.5-23-23-6-.5-8-3-8-6 0-6 10-10.5 20-10.5 14.5 0 27 9 40 27.5 10 14.5 20.5 21 33 21s20.5-4.5 32-16c8.5-8.5 15-16 21-21z',
  ],
}

const faLinkedinIn = {
  prefix: 'fab',
  iconName: 'linkedin-in',
  icon: [
    448,
    512,
    [],
    'f0e1',
    'M100.3 448l-92.9 0 0-299.1 92.9 0 0 299.1zM53.8 108.1C24.1 108.1 0 83.5 0 53.8 0 39.5 5.7 25.9 15.8 15.8s23.8-15.8 38-15.8 27.9 5.7 38 15.8 15.8 23.8 15.8 38c0 29.7-24.1 54.3-53.8 54.3zM447.9 448l-92.7 0 0-145.6c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7l0 148.1-92.8 0 0-299.1 89.1 0 0 40.8 1.3 0c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3l0 164.3-.1 0z',
  ],
}

const faInstagram = {
  prefix: 'fab',
  iconName: 'instagram',
  icon: [
    448,
    512,
    [],
    'f16d',
    'M224.3 141a115 115 0 1 0 -.6 230 115 115 0 1 0 .6-230zm-.6 40.4a74.6 74.6 0 1 1 .6 149.2 74.6 74.6 0 1 1 -.6-149.2zm93.4-45.1a26.8 26.8 0 1 1 53.6 0 26.8 26.8 0 1 1 -53.6 0zm129.7 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM399 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z',
  ],
}

const faMedium = {
  prefix: 'fab',
  iconName: 'medium',
  icon: [
    448,
    512,
    [],
    'f23a',
    'M369.4 32c43.4 0 78.6 35.2 78.6 78.6l0 83.8c-1.9-.1-3.8-.2-5.7-.2l-.4 0c-10 0-22.3 2.4-31.1 6.8-10 4.6-18.7 11.5-26 20.6-11.8 14.6-18.9 34.3-20.6 56.4-.1 .7-.1 1.3-.2 2s-.1 1.2-.1 1.9c-.1 1.2-.1 2.4-.1 3.6 0 1.9-.1 3.8 0 5.8 1.2 50.1 28.2 90.2 76.3 90.2 2.7 0 5.3-.1 7.9-.4l0 20.4c0 43.4-35.2 78.6-78.6 78.6L78.6 480C35.2 480 0 444.8 0 401.4L0 110.6C0 67.2 35.2 32 78.6 32l290.8 0zM82.3 138.9l.3 .1c13.2 3 19.8 7.4 19.8 23.4l0 187.2c0 16-6.7 20.4-19.9 23.4l-.3 .1 0 2.8 52.8 0 0-2.8-.3-.1c-13.2-3-19.9-7.4-19.9-23.4l0-176.3 86.1 202.5 4.9 0 88.6-208.2 0 186.6c-1.1 12.6-7.8 16.5-19.7 19.2l-.3 .1 0 2.7 91.9 0 0-2.7-.3-.1c-11.9-2.7-18.7-6.6-19.9-19.2l-.1-191.8 .1 0c0-16 6.7-20.4 19.9-23.4l.3-.1 0-2.7-72.2 0-67 157.4-67-157.4-77.8 0 0 2.7zM448 340.3c-25.1-7.4-43-35.1-41.2-67.8l0 0 41.1 0 0 67.8zm-6.4-135.6c2.3 0 4.4 .3 6.4 .9l0 57.4-40.2 0c1.5-33.6 13.6-57.9 33.8-58.3z',
  ],
}

const faDev = {
  prefix: 'fab',
  iconName: 'dev',
  icon: [
    448,
    512,
    [],
    'f6cc',
    'M120.1 208.3c-3.9-2.9-7.8-4.3-11.6-4.3l-17.4 0 0 104.5 17.4 0c3.9 0 7.8-1.4 11.6-4.3s5.8-7.3 5.8-13.1l0-69.7c0-5.8-2-10.2-5.8-13.1zM404.1 32L43.9 32C19.7 32 .1 51.6 0 75.8L0 436.2C.1 460.4 19.7 480 43.9 480l360.2 0c24.2 0 43.8-19.6 43.9-43.8l0-360.4C447.9 51.6 428.3 32 404.1 32zM154.2 291.2c0 18.8-11.6 47.3-48.4 47.3l-46.4 0 0-165.5 47.4 0c35.4 0 47.4 28.5 47.4 47.3l0 70.9zm100.7-88.7l-53.3 0 0 38.4 32.6 0 0 29.6-32.6 0 0 38.4 53.3 0 0 29.6-62.2 0c-11.2 .3-20.4-8.5-20.7-19.7l0-125.1c-.3-11.1 8.6-20.4 19.7-20.7l63.2 0 0 29.5zM358.5 317.8c-13.2 30.7-36.8 24.6-47.4 0l-38.5-144.8 32.6 0 29.7 113.7 29.6-113.7 32.6 0-38.5 144.8z',
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
