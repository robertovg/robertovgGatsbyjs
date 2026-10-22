import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import styled from 'styled-components'
import { colors } from '../../../components/constants'
import { media } from '../../../components/Breakpoints'
import appIcon from '../../../images/stronglist/app-icon.png'
import screenPlansList from '../../../images/stronglist/screen-plans-list-clean.jpg'
import screenPlanToday from '../../../images/stronglist/screen-plan-today.jpg'
import screenWorkoutLogging from '../../../images/stronglist/screen-workout-logging.jpg'
import screenProgressWeek from '../../../images/stronglist/screen-progress-week.jpg'

// The App Store URL for StrongList. While it is empty the hero shows a disabled
// "Coming soon" badge; once it is set the badge becomes a normal link to the listing.
const APP_STORE_URL = ''

const brand = {
  ink: '#172B2E',
  jade: '#15A67C',
  cream: '#F1EDE5',
}

const screenshots = [
  { src: screenPlansList, alt: 'StrongList plan list with Push, Pull and Legs plans' },
  { src: screenPlanToday, alt: 'A Pull plan ready to start, with its exercises and radar' },
  { src: screenWorkoutLogging, alt: 'Logging a treadmill run during a Push workout' },
  { src: screenProgressWeek, alt: 'Weekly progress with the six-region radar and set totals' },
]

const PageStyled = styled.article`
  color: ${colors.darkTextColor};

  a,
  a:link,
  a:visited {
    color: ${colors.linkColor};
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }

  .hero {
    display: flex;
    align-items: center;
    gap: 1.25rem;
    margin-bottom: 1.5rem;
    padding: 1.25rem;
    border-radius: 14px;
    background: ${brand.cream};
    color: ${brand.ink};
  }

  /* The icon PNG is a full-bleed square, so the page applies the iOS corner mask itself. */
  .appIcon {
    flex: 0 0 auto;
    display: block;
    width: 112px;
    height: 112px;
    border-radius: 22.37%;
    overflow: hidden;
    box-shadow: 0 1px 4px rgba(23, 43, 46, 0.18);
  }

  .appIcon img {
    display: block;
    width: 100%;
    height: 100%;
    margin: 0;
  }

  .eyebrow {
    margin: 0 0 0.35rem;
    font-size: 0.78rem;
    font-weight: bold;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: ${brand.jade};
  }

  h3 {
    margin: 0;
    font-size: 2.2rem;
    line-height: 1.05;
    font-family: Georgia, 'Times New Roman', serif;
  }

  .hero p {
    max-width: 640px;
    margin: 0.5rem 0 0;
    font-size: 1.05rem;
    line-height: 1.45;
  }

  .actions {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 0.5rem 1rem;
    margin-top: 0.9rem;
  }

  /* App Store badge, same layout as the SongForm site's AppStoreBadge. */
  .appBadgeGroup {
    display: inline-flex;
    align-items: center;
    gap: 10px;
  }

  .appBadge,
  .actions a.appBadge,
  .actions a.appBadge:link,
  .actions a.appBadge:visited {
    display: inline-flex;
    align-items: center;
    gap: 9px;
    min-height: 44px;
    box-sizing: border-box;
    padding: 9px 18px;
    border: 1px solid ${brand.ink};
    border-radius: 10px;
    background: ${brand.ink};
    color: #fff;
    text-decoration: none;
  }

  .actions a.appBadge:hover {
    background: #000;
    text-decoration: none;
  }

  .appBadge svg {
    flex: 0 0 auto;
    fill: currentColor;
  }

  .appBadgeText {
    line-height: 1;
    text-align: left;
  }

  .appBadgeLabel {
    margin-bottom: 2px;
    font-size: 9px;
    font-weight: 500;
    opacity: 0.7;
  }

  .appBadgeTitle {
    font-size: 15px;
    font-weight: 700;
    letter-spacing: -0.01em;
  }

  /* Not on the App Store yet: a muted, non-interactive badge plus a status label. */
  .appBadge.isSoon {
    border-color: rgba(23, 43, 46, 0.2);
    background: rgba(23, 43, 46, 0.07);
    color: ${brand.ink};
    cursor: default;
  }

  .appBadgeStatus {
    font-size: 11px;
    font-weight: 600;
    color: rgba(23, 43, 46, 0.6);
  }

  h4 {
    margin: 1.75rem 0 0.6rem;
    font-size: 1.25rem;
  }

  ul {
    max-width: 68ch;
    padding-left: 1.2rem;
    line-height: 1.55;
  }

  li + li {
    margin-top: 0.35rem;
  }

  .screens {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 1rem;
    margin: 0;
    padding: 1rem;
    border-radius: 14px;
    background: ${brand.cream};
  }

  .screens figure {
    margin: 0;
  }

  .screens img {
    display: block;
    width: 100%;
    height: auto;
    border: 1px solid rgba(23, 43, 46, 0.12);
    border-radius: 18px;
    background: #fff;
  }

  ${media.tablet`
    .hero {
      flex-direction: column;
      align-items: flex-start;
    }

    .screens {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  `};
`

// Apple logo paths from the SongForm site's AppStoreBadge component.
const appleLogoPaths = [
  [
    'M14.98 11.7c-.02-2.3 1.87-3.4 1.96-3.47-1.07-1.57-2.73-1.78-3.32-1.8-1.41-.14-2.',
    '76.83-3.47.83-.72 0-1.83-.81-3.01-.79C5.5 6.5 3.96 7.53 3.1 9.1c-1.76 3.06-.45 7',
    '.58 1.26 10.06.84 1.22 1.84 2.58 3.15 2.53 1.27-.05 1.74-.82 3.28-.82 1.52 0 1.9',
    '5.82 3.28.79 1.36-.02 2.22-1.22 3.05-2.44.97-1.4 1.36-2.77 1.38-2.84-.03-.01-2.6',
    '4-1.01-2.67-4.01z',
  ].join(''),
  [
    'M12.7 3.8c.7-.85 1.17-2.02 1.04-3.2-1 .04-2.23.67-2.95 1.5-.64.74-1.2 1.93-1.05 ',
    '3.07 1.12.09 2.26-.57 2.96-1.37z',
  ].join(''),
]

const AppleLogo = () => (
  <svg width="18" height="22" viewBox="0 0 18 22" aria-hidden="true">
    {appleLogoPaths.map(d => <path key={d} d={d} />)}
  </svg>
)

const AppBadgeContent = () => (
  <span className="appBadgeText">
    <span className="appBadgeLabel" style={{ display: 'block' }}>
      Download on the
    </span>
    <span className="appBadgeTitle" style={{ display: 'block' }}>
      App Store
    </span>
  </span>
)

const AppStoreLink = () =>
  APP_STORE_URL ? (
    <a
      className="appBadge"
      href={APP_STORE_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Download StrongList on the App Store"
    >
      <AppleLogo />
      <AppBadgeContent />
    </a>
  ) : (
    <span className="appBadgeGroup">
      <span className="appBadge isSoon" role="img" aria-label="App Store, coming soon">
        <AppleLogo />
        <AppBadgeContent />
      </span>
      <span className="appBadgeStatus">Coming soon</span>
    </span>
  )

const StrongListPage = () => (
  <PageStyled>
    <Helmet
      title="StrongList - Roberto Vázquez González Site"
      meta={[
        {
          name: 'description',
          content:
            'StrongList, a simple workout log for iPhone and iPad. Plans, sets and progress.',
        },
      ]}
    />

    <header className="hero">
      <span className="appIcon">
        <img src={appIcon} alt="StrongList app icon" />
      </span>
      <div>
        <p className="eyebrow">iOS app for iPhone and iPad</p>
        <h3>StrongList</h3>
        <p>
          A simple workout log. Build your plans, log every set while you train and see how your
          week is going, in a calm app that looks like a gridded notebook.
        </p>
        <div className="actions">
          <AppStoreLink />
        </div>
      </div>
    </header>

    <section className="screens" aria-label="Screenshots">
      {screenshots.map(shot => (
        <figure key={shot.src}>
          <img src={shot.src} alt={shot.alt} />
        </figure>
      ))}
    </section>

    <section>
      <h4>What it does</h4>
      <ul>
        <li>
          Plans for strength, cardio and mobility, using a built-in catalog of 89 exercises or your
          own custom ones.
        </li>
        <li>
          Start a workout, log sets, reps and weight (or minutes and distance for cardio), and
          follow it from the Lock Screen and the Dynamic Island with a Live Activity.
        </li>
        <li>
          Progress by session, week or month: a six-region radar of sets per body area, total
          volume, cardio minutes and mobility sessions.
        </li>
        <li>Remembers the machine number of each exercise in each gym you train at.</li>
        <li>
          Import a routine from your trainer by pasting a prompt into the AI app you already use.
          StrongList itself sends nothing anywhere.
        </li>
        <li>
          Local first: no account and no server. Optional sync through your own iCloud Drive, as
          readable JSON files.
        </li>
        <li>Spanish and English, kilograms or pounds. Requires iOS 17 or later.</li>
      </ul>
    </section>

    <section>
      <h4>Help and privacy</h4>
      <ul>
        <li>
          <Link to="/projects/stronglist/support/">Support and FAQ</Link>
        </li>
        <li>
          <Link to="/projects/stronglist/privacy/">Privacy policy</Link>
        </li>
      </ul>
    </section>
  </PageStyled>
)

export default StrongListPage
