import React from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import { colors } from '../components/constants'

const UsesStyled = styled.section`
  *,
  *:before,
  *:after {
    position: relative;
    box-sizing: border-box;
  }
  sub {
    font-size: 1.2rem;
  }
  h3 {
    font-size: 1.5rem;
    font-weight: bold;
  }
  h3,
  strong {
    a,
    a:link,
    a:visited {
      color: ${colors.darkTextColor};
      text-decoration: none;
    }
    a:hover {
      text-decoration: underline;
    }
  }
  article {
    margin-top: 2rem;

    li {
      line-height: 1.5;
      color: ${colors.mediaColor};
      strong {
        color: ${colors.darkTextColor};
        margin-right: 0.2rem;
      }
    }
  }
  a,
  a:link,
  a:visited {
    color: ${colors.linkColor};
    text-decoration: none;
  }
  a:hover {
    text-decoration: underline;
  }
  details {
    &,
    summary {
      display: inline-block;
    }
  }
  .timeline {
    margin-top: 2rem;
    padding-left: 1rem;
    border-left: 3px solid ${colors.linkColor};
  }
  .timeline__entry {
    margin-bottom: 3rem;
  }
  .timeline__date {
    display: inline-block;
    font-size: 0.9rem;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: ${colors.linkColor};
    margin-bottom: 0.5rem;
  }
  .timeline__archive {
    display: block;
    summary {
      display: block;
      cursor: pointer;
      h3 {
        display: inline-block;
      }
    }
  }
`

const ContactPage = () => (
  <UsesStyled>
    <Helmet title="Uses - Roberto Vázquez González Site" />
    <h2 className="general__pageTitle">What do I use?</h2>
    <sub>
      This `/uses` page was created inspired by Wes Bos'{' '}
      <a target="_blank" rel="noopener noreferrer" href="https://uses.tech/">
        uses.tech
      </a>{' '}
      and basically, it's a place where you can find everything I use as a developer. A lot has
      changed since the first version (hello, AI agents 👋), so instead of rewriting history I'm
      keeping this page as a timeline: what I use now, and what I used to use. If you see something
      on this list that interests you, feel free to reach out to me for more information.{' '}
      <a href="/blog/uses-2026-update">Here</a> I explain the update a bit more.
    </sub>

    <div className="timeline">
      {/* ============================================= */}
      {/* 2026 — CURRENT                                */}
      {/* ============================================= */}
      <section className="timeline__entry" id="current">
        <span className="timeline__date">2026 · Current</span>

        <article id="languages">
          <h3>
            <a href="#languages">Languages</a>
          </h3>
          <ul>
            <li>
              <strong>
                <a target="_blank" rel="noopener noreferrer" href="https://www.typescriptlang.org/">
                  TypeScript
                </a>
                :
              </strong>{' '}
              I don't write plain JavaScript anymore, TS everywhere: on the frontend and also on the
              backend with{' '}
              <a target="_blank" rel="noopener noreferrer" href="https://nestjs.com/">
                Nest.js
              </a>
              .
            </li>
            <li>
              <strong>CSS:</strong>{' '}
              <a target="_blank" rel="noopener noreferrer" href="https://tailwindcss.com/">
                Tailwind CSS
              </a>{' '}
              (or similar class-name based approaches) or CSS Modules.
            </li>
            <li>
              <strong>HTML:</strong> Still mostly JSX these days.
            </li>
            <li>
              <strong>Python & Go:</strong> Both joined the toolbox in the last years. Java is now
              just an old friend I rarely visit (no more Apex 👋), but honestly, TS for almost
              everything.
            </li>
          </ul>
        </article>

        <article id="frameworks_libraries">
          <h3>
            <a href="#frameworks_libraries">Frameworks / Libraries</a>
          </h3>
          <ul>
            <li>
              <strong>
                <a target="_blank" rel="noopener noreferrer" href="https://react.dev/">
                  React
                </a>
                :
              </strong>{' '}
              Still to build almost everything:
              <ul>
                <li>
                  <u>Complex UIs</u> at work, where we have complex MFEs (micro frontends).
                </li>
                <li>
                  <u>SPAs</u> with{' '}
                  <a target="_blank" rel="noopener noreferrer" href="https://vitejs.dev/">
                    Vite
                  </a>{' '}
                  (create-react-app is gone).
                </li>
                <li>
                  <u>iOS and Android apps</u> with{' '}
                  <a target="_blank" rel="noopener noreferrer" href="https://capacitorjs.com/">
                    Capacitor
                  </a>{' '}
                  more often, but still some{' '}
                  <a target="_blank" rel="noopener noreferrer" href="https://reactnative.dev/">
                    React Native
                  </a>
                  .
                </li>
                <li>
                  <u>Webs</u> with{' '}
                  <a target="_blank" rel="noopener noreferrer" href="https://astro.build/">
                    Astro
                  </a>
                  , which is my preference nowadays, although I still maintain sites built with{' '}
                  <a target="_blank" rel="noopener noreferrer" href="https://www.gatsbyjs.com/">
                    Gatsby
                  </a>{' '}
                  and{' '}
                  <a target="_blank" rel="noopener noreferrer" href="https://nextjs.org/">
                    Next.js
                  </a>
                  .
                </li>
              </ul>
            </li>
            <li>
              <strong>
                <a target="_blank" rel="noopener noreferrer" href="https://nodejs.org/">
                  Node.js{' '}
                </a>
                / Lambdas / Hostings:
              </strong>{' '}
              Still a very low friction guy. I have projects living on{' '}
              <a target="_blank" rel="noopener noreferrer" href="https://www.netlify.com/">
                Netlify
              </a>
              ,{' '}
              <a target="_blank" rel="noopener noreferrer" href="https://vercel.com/">
                Vercel
              </a>
              ,{' '}
              <a target="_blank" rel="noopener noreferrer" href="https://firebase.google.com/">
                Firebase
              </a>{' '}
              or{' '}
              <a target="_blank" rel="noopener noreferrer" href="https://prismic.io/">
                Prismic
              </a>
              , but most of my new projects have moved to{' '}
              <a target="_blank" rel="noopener noreferrer" href="https://www.cloudflare.com/">
                Cloudflare
              </a>{' '}
              (Pages, Workers, KV). At work we use AWS for everything.
            </li>
            <li>
              <strong>
                <a target="_blank" rel="noopener noreferrer" href="https://svelte.dev/">
                  Svelte
                </a>{' '}
                /{' '}
                <a target="_blank" rel="noopener noreferrer" href="https://vuejs.org/">
                  Vue
                </a>
                :
              </strong>{' '}
              Played with both 💁‍♂️, but mostly React nowadays.
            </li>
          </ul>
        </article>

        <article id="editors_ai_agents">
          <h3>
            <a href="#editors_ai_agents">Editors / AI Agents</a>
          </h3>
          <ul>
            <li>
              <strong>
                <a target="_blank" rel="noopener noreferrer" href="https://code.visualstudio.com/">
                  Visual Studio Code
                </a>
                :
              </strong>{' '}
              Still my <u>main editor</u>, with Vim, Prettier and Code Spell Checker as essential
              plugins.
            </li>
            <li>
              <strong>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.anthropic.com/claude-code"
                >
                  Claude Code
                </a>{' '}
                /{' '}
                <a target="_blank" rel="noopener noreferrer" href="https://openai.com/codex/">
                  Codex
                </a>{' '}
                /{' '}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/features/copilot"
                >
                  GitHub Copilot
                </a>{' '}
                /{' '}
                <a target="_blank" rel="noopener noreferrer" href="https://gemini.google.com/">
                  Gemini
                </a>
                :
              </strong>{' '}
              The biggest change since the last version of this page. Coding agents are now part of
              my daily workflow, both at work and on side projects.
            </li>
            <li>
              <strong>
                <a target="_blank" rel="noopener noreferrer" href="https://aistudio.google.com/">
                  Google AI Studio
                </a>
                :
              </strong>{' '}
              To prototype ideas quickly.
            </li>
            <li>
              <strong>
                <a target="_blank" rel="noopener noreferrer" href="https://www.figma.com/">
                  Figma
                </a>{' '}
                +{' '}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.anthropic.com/news/claude-design-anthropic-labs"
                >
                  Claude Design
                </a>{' '}
                +{' '}
                <a target="_blank" rel="noopener noreferrer" href="https://stitch.withgoogle.com/">
                  Google Stitch
                </a>
                :
              </strong>{' '}
              For prototyping design ideas before writing a single line of code.
            </li>
          </ul>
        </article>

        <article id="productivity_software">
          <h3>
            <a href="#productivity_software">Software (Productivity)</a>
          </h3>
          <ul>
            <li>
              <strong>
                <a target="_blank" rel="noopener noreferrer" href="https://www.raycast.com/">
                  Raycast
                </a>
                :
              </strong>{' '}
              Replaced Alfred after many good years. Clipboard history, snippets, window
              management... still one of the main reasons to be so productive with my mac.
            </li>
            <li>
              <strong>
                <a target="_blank" rel="noopener noreferrer" href="https://www.warp.dev/">
                  Warp
                </a>
                :
              </strong>{' '}
              My terminal, with agents built in.
            </li>
            <li>
              <strong>
                <a target="_blank" rel="noopener noreferrer" href="https://www.choosyosx.com/">
                  Choosy
                </a>
                :
              </strong>{' '}
              Essential to be able to manage all the browsers I use.
            </li>
            <li>
              <strong>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.atlassian.com/software/jira"
                >
                  Jira
                </a>
                :
              </strong>{' '}
              The way we manage our teamwork.
            </li>
            <li>
              <strong>
                <a target="_blank" rel="noopener noreferrer" href="https://kanbanflow.com/">
                  KanbanFlow
                </a>
                :
              </strong>{' '}
              The way I manage everything I have to do with the computer and work with Pomodoros.
            </li>
            <li>
              <strong>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://support.apple.com/en-in/HT205890"
                >
                  Apple Reminders
                </a>{' '}
                + Calendar Events:
              </strong>{' '}
              Shopping List, events, things to remember to do...
            </li>
            <li>
              <strong>
                <a target="_blank" rel="noopener noreferrer" href="https://slack.com/">
                  Slack
                </a>{' '}
                +{' '}
                <a target="_blank" rel="noopener noreferrer" href="https://www.zoom.us/">
                  Zoom
                </a>{' '}
                +{' '}
                <a target="_blank" rel="noopener noreferrer" href="https://meet.google.com/">
                  Google Meet
                </a>{' '}
                +{' '}
                <a target="_blank" rel="noopener noreferrer" href="https://gmail.com/">
                  Gmail
                </a>
                :
              </strong>{' '}
              Communication is key for success for remote workers 👨‍💻.
            </li>
            <li>
              <strong>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://support.apple.com/en-us/105115"
                >
                  Apple Passwords
                </a>
                :
              </strong>{' '}
              My personal password manager.
            </li>
            <li>
              <strong>
                <a target="_blank" rel="noopener noreferrer" href="https://www.dropbox.com/">
                  Dropbox
                </a>{' '}
                +{' '}
                <a target="_blank" rel="noopener noreferrer" href="https://drive.google.com/">
                  Google Drive
                </a>
                :
              </strong>{' '}
              Sharing and automatic backups for my files.
            </li>
          </ul>
        </article>

        <article id="hardware_setup">
          <h3>
            <a href="#hardware_setup">Hardware/Setup</a>
          </h3>
          <ul>
            <li>
              <strong>
                <a target="_blank" rel="noopener noreferrer" href="https://corkerspace.com">
                  Corker - coworking space
                </a>
                :
              </strong>{' '}
              ... I co-founded it, so I love to go to our coworking space to work and disconnect at
              home.
            </li>
            <li>
              <strong>MacBook Pro 16':</strong> Sitting behind the external monitor as a second
              screen, with external keyboard and mouse. Exactly the same setup both in the home
              office and at Corker, so switching between them is frictionless.
            </li>
            <li>
              <strong>iPhone + AirPods:</strong> You know, the ecosystem.
            </li>
            <li>
              <strong>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.akg.com/Headphones/Professional%20Headphones/K240-Studio.html"
                >
                  AKG K240 Studio
                </a>{' '}
                + Aune T1 MK2 DAC / Sony WF-1000XM4 / IEMs:
              </strong>{' '}
              The AKG + DAC combo is still going strong after all these years.{' '}
              <q>Without music, life would be a mistake.</q> - Nietzsche
            </li>
            <li>
              <strong>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.last.fm/user/robertovg24/"
                >
                  Last.fm
                </a>{' '}
                +{' '}
                <a target="_blank" rel="noopener noreferrer" href="https://music.apple.com/">
                  Apple Music
                </a>
                :
              </strong>{' '}
              I still scrobble everything to my{' '}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.last.fm/user/robertovg24/"
              >
                Last.fm profile
              </a>{' '}
              after all these years. After trying all the streaming platforms (Deezer, Tidal,
              Spotify and Apple Music), I've now completely moved to Apple Music. The main reason is
              that it lets me mix commercial releases with my own rarities: CDs I've bought of music
              that isn't on any platform, like{' '}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.discogs.com/artist/13678327-Time-Lapse-Consortium"
              >
                Time-Lapse Consortium
              </a>{' '}
              – Live At The Roxy Theatre, or friends' CDs from Bandcamp. It also feels like it still
              lets me easily play full albums, caring to listen to them from beginning to end, as
              they should be heard. And coming from FLAC, it's great that Apple Music not only
              integrates nicely with the Apple ecosystem but also gives you lossless and spatial
              audio mixes of new records... with no additional cost 🙂.
            </li>
            <li>
              <strong>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.synology.com/en-global/products/series/home"
                >
                  Synology DS215j
                </a>{' '}
                +{' '}
                <a target="_blank" rel="noopener noreferrer" href="https://c2.synology.com/">
                  C2 Backup
                </a>
                :
              </strong>{' '}
              Still my backup for everything.
            </li>
          </ul>
        </article>
      </section>

      {/* ============================================= */}
      {/* PREVIOUS — ARCHIVE                            */}
      {/* ============================================= */}
      <section className="timeline__entry" id="previous">
        <span className="timeline__date">~2019 · Previous uses</span>
        <details className="timeline__archive">
          <summary>
            <h3>Expand to see what I used back then (kept as historical data 🗄️)</h3>
          </summary>

          <article id="languages_2019">
            <h3>Languages</h3>
            <ul>
              <li>
                <strong>JavaScript (ES6) + Babel:</strong> I just love it
              </li>
              <li>
                <strong>CSS:</strong> Sometimes still using Vanilla CSS, usually SCSS,
                styled-components or Styled JSX
              </li>
              <li>
                <strong>HTML:</strong> Mostly JSX these days
              </li>
              <li>
                <strong>Java/Apex:</strong> Was my main tool years ago, now just using a bit of{' '}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/"
                >
                  Apex
                </a>{' '}
                at work.
              </li>
            </ul>
          </article>

          <article id="frameworks_libraries_2019">
            <h3>Frameworks / Libraries</h3>
            <ul>
              <li>
                <strong>
                  <a target="_blank" rel="noopener noreferrer" href="https://reactjs.org/">
                    React
                  </a>
                  :
                </strong>{' '}
                To build everything:
                <ul>
                  <li>
                    <u>SPAs</u> usually just with{' '}
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://create-react-app.dev/"
                    >
                      create-react-app
                    </a>
                    .
                  </li>
                  <li>
                    <u>iOS and Android apps</u> with{' '}
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://facebook.github.io/react-native/"
                    >
                      React Native
                    </a>{' '}
                    +{' '}
                    <a target="_blank" rel="noopener noreferrer" href="https://expo.io/">
                      Expo
                    </a>
                  </li>
                  <li>
                    <u>Webs</u> with{' '}
                    <a target="_blank" rel="noopener noreferrer" href="https://www.gatsbyjs.org/">
                      Gatsby
                    </a>{' '}
                    (but to be honest, I'm just using Next.js nowadays...).
                  </li>
                  <li>
                    <u>Complex webs</u> with Next, as I can do SSR with Lambda or Node, Static and
                    SSG all with the same framework{' '}
                    <a target="_blank" rel="noopener noreferrer" href="https://nextjs.org/">
                      Next.js
                    </a>
                    .
                  </li>
                </ul>
              </li>
              <li>
                <strong>
                  <a target="_blank" rel="noopener noreferrer" href="https://nodejs.org/">
                    Node.js{' '}
                  </a>
                  / JavaScript's Lambda / Hostings:
                </strong>{' '}
                When I choose backend technology, I'm very low friction guy, I love <u>BaaS's</u> or{' '}
                <u>SaaS's</u> to focus more on giving value to the product and not on <u>DevOp</u>.
                That's why I use very conformable, easy and scalable services like{' '}
                <a target="_blank" rel="noopener noreferrer" href="https://www.netlify.com/">
                  Netlify
                </a>
                ,{' '}
                <a target="_blank" rel="noopener noreferrer" href="https://zeit.co/">
                  Now
                </a>
                ,{' '}
                <a target="_blank" rel="noopener noreferrer" href="https://firebase.google.com/">
                  Firebase
                </a>{' '}
                or{' '}
                <a target="_blank" rel="noopener noreferrer" href="https://prismic.io/">
                  Prismic
                </a>
                . At work using{' '}
                <a target="_blank" rel="noopener noreferrer" href="https://www.salesforce.com/">
                  Salesforce
                </a>{' '}
                as backend.
              </li>
              <li>
                <strong>
                  <a target="_blank" rel="noopener noreferrer" href="https://vuejs.org/">
                    Vue
                  </a>
                  :
                </strong>{' '}
                Yes, I also use it from time to time 💁‍♂️, tried with the SPA, Static & "Progressive"
                flavours (
                <a target="_blank" rel="noopener noreferrer" href="https://cli.vuejs.org/">
                  Vue CLI
                </a>
                ,{' '}
                <a target="_blank" rel="noopener noreferrer" href="https://gridsome.org/">
                  Gridsome
                </a>{' '}
                and{' '}
                <a target="_blank" rel="noopener noreferrer" href="https://nuxtjs.org/">
                  Nuxt.js
                </a>{' '}
                respectively), but I still prefer to use React 90% of the cases.
              </li>
            </ul>
          </article>

          <article id="editors_2019">
            <h3>Editors</h3>
            <ul>
              <li>
                <strong>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://code.visualstudio.com/insiders/"
                  >
                    Visual Studio Code (Insiders)
                  </a>
                  :
                </strong>{' '}
                It's my <u>main coding tool</u>, Vim, Biome and Code Spell Checker are my essential
                plugins and I sync my configuration using VSCode's built-in account synchronization
                now days.
              </li>
              <li>
                <strong>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://code.visualstudio.com/"
                  >
                    Visual Studio Code
                  </a>
                  :
                </strong>

                <details>
                  <summary>
                    ... I use this second instance of VSCode only for <u>documentation</u>.
                  </summary>
                  A separate VSCode window I switch to for writing notes, keeping my "coding"
                  instance clean (both share the same configuration). <br />I keep two folders (
                  <u>workLog</u> && <u>tech notes</u>) in Dropbox: <u>tech notes</u> grow over time,{' '}
                  <u>workLog</u> are quick drafts in Markdown instead of paper. Everything is
                  indexed by{' '}
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://support.apple.com/en-us/HT204014"
                  >
                    Spotlight
                  </a>{' '}
                  and VSCode for free, and I read it on the go with{' '}
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://apps.apple.com/es/app/mweb-powerful-markdown-app/id1183407767?l=en"
                  >
                    MWeb
                  </a>
                  . <br />
                  These days there's an extra bonus: having this history in plain Markdown makes it
                  super handy to hand over as context to AI agents or tools when I need something
                  done in my own proven style.
                </details>
              </li>
              <li>
                <strong>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.jetbrains.com/idea/"
                  >
                    IntelliJ IDEA
                  </a>{' '}
                  +{' '}
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="http://www.illuminatedcloud.com/"
                  >
                    Illuminated Cloud
                  </a>
                  :
                </strong>{' '}
                It's the default way for me to deploy Salesforce, ...when I have to.
              </li>
              <li>
                <strong>
                  <a target="_blank" rel="noopener noreferrer" href="https://aside.io/">
                    aside.io
                  </a>
                  :
                </strong>{' '}
                When I have to do quick changes in a specific Salesforce org. Nice online editor
              </li>
              <li>
                <strong>
                  <a target="_blank" rel="noopener noreferrer" href="https://www.sublimetext.com/">
                    Sublime Editor
                  </a>
                  :
                </strong>{' '}
                5 Years back, it was my main editor, then JSX and es6 arrived and we all looked to
                VSCode great and earlier support. Still using eventually, when I want to save
                battery or open huge files.
              </li>
            </ul>
          </article>

          <article id="productivity_software_2019">
            <h3>Software (Productivity)</h3>
            <ul>
              <li>
                <strong>
                  <a target="_blank" rel="noopener noreferrer" href="https://www.alfredapp.com/">
                    Alfred with Power Pack
                  </a>{' '}
                  + Clipboard History + Snippets:
                </strong>{' '}
                It's one of the main reasons to be so productive with my mac.
              </li>
              <li>
                <strong>
                  <a target="_blank" rel="noopener noreferrer" href="https://www.getharvest.com/">
                    Harvest
                  </a>
                  :
                </strong>{' '}
                Client invoices and as work/project timer counter.
              </li>
              <li>
                <strong>
                  <a target="_blank" rel="noopener noreferrer" href="http://docvariables.com/">
                    Doc Variables
                  </a>{' '}
                  +{' '}
                  <a target="_blank" rel="noopener noreferrer" href="https://www.hellosign.com/">
                    Hello Sign
                  </a>
                  :
                </strong>{' '}
                Coworking Contracts, works like a charm, having the templates prepared.
              </li>
              <li>
                <strong>
                  <a target="_blank" rel="noopener noreferrer" href="https://www.waveapps.com/">
                    Wave
                  </a>
                  :
                </strong>{' '}
                Accounting Software
              </li>
            </ul>
          </article>

          <article id="hardware_setup_2019">
            <h3>Hardware/Setup</h3>
            <ul>
              <li>
                <strong>MacBook pro 13'</strong> (2018, four thunderbolt 3 ports, 2,7 ghz i7, 16 gb
                ram) + BenQ g2400w display 24': Makes me feel productive in the office and offers
                the power and flexibility I need.
              </li>
              <li>
                <strong>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.raindesigninc.com/mstand.html"
                  >
                    mstand
                  </a>{' '}
                  + UBoard smart 3 ports stand:
                </strong>{' '}
                The right position is important.
              </li>
              <li>
                <strong>iPhone 8 + AirPods:</strong> You know, the ecosystem.
              </li>
            </ul>
          </article>
        </details>
      </section>
    </div>
  </UsesStyled>
)

export default ContactPage
