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
      and basically, it's a place where you can find everything I use as a developer. If you see
      something on this list that interests you, feel free to reach out to me for more information
      if there's not enough here. <a href="/blog/here-my-uses-page">Here</a> I explain it a bit
      more.
    </sub>
    <article id="languages">
      <h3>
        <a href="#languages">Languages</a>
      </h3>
      <ul>
        <li>
          <strong>JavaScript (ES6) + Babel:</strong> I just love it
        </li>
        <li>
          <strong>CSS:</strong> Sometimes still using Vanilla CSS, usually SCSS, styled-components
          or Styled JSX
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
    <article id="frameworks_libraries">
      <h3>
        <a href="#frameworks_libraries">Frameworks / Libraries</a>
      </h3>
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
              <a target="_blank" rel="noopener noreferrer" href="https://create-react-app.dev/">
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
              <u>Complex webs</u> with Next, as I can do SSR with Lambda or Node, Static and SSG all
              with the same framework{' '}
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
          <u>SaaS's</u> to focus more on giving value to the product and not on <u>DevOp</u>. That's
          why I use very conformable, easy and scalable services like{' '}
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
          </a>
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
    <article id="editors">
      <h3>
        <a href="#editors">Editors</a>
      </h3>
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
          It's my <u>main coding tool</u>,{' '}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://marketplace.visualstudio.com/items?itemName=vscodevim.vim"
          >
            Vim
          </a>
          ,{' '}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode"
          >
            Prettier
          </a>{' '}
          and{' '}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={
              'https://marketplace.visualstudio.com/' +
              'items?itemName=streetsidesoftware.code-spell-checker'
            }
          >
            Code Spell Checker
          </a>{' '}
          are my essential plugins and you can find my full VSCode config in{' '}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://gist.github.com/robertovg/9b46e64379f77af7364305c2888dd419"
          >
            this gist in GitHub
          </a>{' '}
          by{' '}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://marketplace.visualstudio.com/items?itemName=Shan.code-settings-sync"
          >
            Settings Sync
          </a>
          .
        </li>
        <li>
          <strong>
            <a target="_blank" rel="noopener noreferrer" href="https://code.visualstudio.com/">
              Visual Studio Code
            </a>
            :
          </strong>

          <details>
            <summary>
              ... I use this second instance of VSCode only for <u>documentation</u>.
            </summary>
            Mainly to switch from "documenting" VSCode instance to "coding" instance in a fast way
            (sharing the same configuration). <br />I have two folders (<u>workLog</u> &&{' '}
            <u>tech notes</u>) saved in Dropbox with <code>YYYYDDMM_topic.md</code> (eg.{' '}
            <code>20191129_OFFF_Sevilla_19.md</code>) or <code>topic.md</code> (e.g.{' '}
            <code>RxJS.md</code>) format respectively. Usually <u>tech notes</u> grow and{' '}
            <u>workLog</u> are draft notes using Markdown instead of paper.
            <br />
            The best part of using this approach is you have all your notes indexed by{' '}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://support.apple.com/en-us/HT204014"
            >
              Spotlight
            </a>{' '}
            and VSCode for free, so it's super easy to access any old topic just by searching it.
            <br />I even access those notes on the go with{' '}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://apps.apple.com/es/app/mweb-powerful-markdown-app/id1183407767?l=en"
            >
              MWeb
            </a>{' '}
            app. I tried a couple of Markdown editor in iPhone and this is not only great, but allow
            to import directly from files from Dropbox 🙌.
          </details>
        </li>
        <li>
          <strong>
            <a target="_blank" rel="noopener noreferrer" href="https://www.jetbrains.com/idea/">
              IntelliJ IDEA
            </a>{' '}
            +{' '}
            <a target="_blank" rel="noopener noreferrer" href="http://www.illuminatedcloud.com/">
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
          </strong>
          When I have to do quick changes in a specific Salesforce org. Nice online editor
        </li>
        <li>
          <strong>
            <a target="_blank" rel="noopener noreferrer" href="https://www.sublimetext.com/">
              Sublime Editor
            </a>
            :
          </strong>
          5 Years back, it was my main editor, then JSX and es6 arrived and we all looked to VSCode
          great and earlier support. Still using eventually, when I want to save battery or open
          huge files.
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
            <a target="_blank" rel="noopener noreferrer" href="https://www.alfredapp.com/">
              Alfred with Power Pack
            </a>
          </strong>{' '}
          + Clipboard History + Snippets: It's one of the main reasons to be so productive with my
          mac.
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
            <a target="_blank" rel="noopener noreferrer" href="https://www.choosyosx.com/">
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
            <a target="_blank" rel="noopener noreferrer" href="https://timingapp.com/">
              Timing
            </a>
          </strong>
          : Call me crazy, but try to improve my productivity numbers, keep me motivated.
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
            <a target="_blank" rel="noopener noreferrer" href="https://hangouts.google.com/">
              Google Hangouts
            </a>{' '}
            +{' '}
            <a target="_blank" rel="noopener noreferrer" href="https://gmail.com/">
              Gmail
            </a>
          </strong>
          : Communication is key for success for remote workers 👨‍💻.
        </li>
        <li>
          <strong>
            <a target="_blank" rel="noopener noreferrer" href="https://1password.com/">
              1 Password
            </a>
          </strong>
          : Both at work and as my personal password manager.
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
          </strong>
          : Sharing and automatic backups for my files.
        </li>
        <li>
          <strong>
            <a target="_blank" rel="noopener noreferrer" href="https://www.getharvest.com/">
              Harvest
            </a>
          </strong>
          : Client invoices and as work/project timer counter.
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
          </strong>
          : Coworking Contracts, works like a charm, having the templates prepared.
        </li>
        <li>
          <strong>
            <a target="_blank" rel="noopener noreferrer" href="https://www.waveapps.com/">
              Wave
            </a>
          </strong>
          : Accounting Software
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
          </strong>
          ... I co-found it, so I love to go to our coworking space to work and disconnect at home.
        </li>
        <li>
          <strong>MacBook pro 13'</strong>(2018, four thunderbolt 3 ports, 2,7 ghz i7, 16 gb ram) +
          BenQ g2400w display 24': Makes me feel productive in the office and offers the power and
          flexibility I need.
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
          <strong>iPhone 8 + AirPods:</strong> You know, the  ecosystem.
        </li>
        <li>
          <strong>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.akg.com/Headphones/Professional%20Headphones/K240-Studio.html"
            >
              AKG k240 studio
            </a>{' '}
            +{' '}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={
                'https://www.audiophonics.fr/en/sedentary-headphone-amplifier' +
                '/aune-t1-mk2-headphone-amplifierdac-usb-24bit96khz-rca-black-p-8886.html'
              }
            >
              Aune t1 mk2 dac
            </a>
            :
          </strong>
          <q> Without music, life would be a mistake.</q> - Nietzsche
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
          </strong>
          Backup for everything.
        </li>
      </ul>
    </article>
  </UsesStyled>
)

export default ContactPage
