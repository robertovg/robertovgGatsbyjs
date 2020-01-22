import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import { colors } from '../components/constants'

const ProjectsStyled = styled.section`
  summary {
    font-size: 1.2rem;
  }
  h3 {
    font-size: 1.5rem;
    font-weight: bold;
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
  summary,
  article {
    margin-bottom: 2rem;
  }
`

const ProjectsPage = () => (
  <ProjectsStyled>
    <Helmet title="Blog - Roberto Vázquez González Site" />
    <h2 className="general__pageTitle">Side Projects</h2>
    <summary>
      I love to evolve and develop new skills by taking on new projects such as side business, which
      can complement my soft skills, or developing pet projects outside the scope of my main job, to
      learn and try new technologies.
    </summary>
    <article>
      <h3>
        <a target="_blank" rel="noopener noreferrer" href="https://corkerspace.com/">
          CorkerSpace
        </a>
      </h3>
      <time>May 2017-Present</time>
      <div>
        A coworking space founded by my partners and I, based in Conil de la Frontera (Spain). I
        decided to set up this space to be more productive and meet new and interesting people who
        also work as freelancers. Our office, located in the centre of town, works as a meeting
        point for local talent and digital nomads from Conil. This helps us to grow, teach and
        learn, as well as to enhance our productivity.
      </div>
    </article>
    <article>
      <h3>Small Test / Exercises</h3>
      <time>
        <span role="img" aria-label="always">
          ∞
        </span>
      </time>
      <div>
        I use to create little pieces of code to learn, experiment and have fun. Recently I started
        publishing those on my{' '}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/robertovg/audiostation-steroids"
        >
          GitHub account
        </a>{' '}
        to show my code style and, maybe, help someone else with the challenges I try to solve with
        them. Some nice onces are:
        <ul>
          <li>
            <h4>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/robertovg/robertovgGatsbyjs"
              >
                This page
              </a>
            </h4>
            The site was built with{' '}
            <a target="_blank" rel="noopener noreferrer" href="https://www.gatsbyjs.org/">
              Gatsby
            </a>{' '}
            and deployed on{' '}
            <a target="_blank" rel="noopener noreferrer" href="https://www.netlify.com">
              Netlify
            </a>{' '}
            everything here has been crafted from scratch. I have
            <Link to="/blog/moving-this-site-to-gatsby"> a blog post </Link>
            where I explain the details and the{' '}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/robertovg/robertovgGatsbyjs"
            >
              repo readme
            </a>{' '}
            has also a lot of details about it.
          </li>
          <li>
            <h4>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.npmjs.com/package/wappalyzer-to-md"
              >
                Wappalyzer to markdown (wappalyzer-to-md)
              </a>{' '}
            </h4>
            is a simple npm script to extract{' '}
            <a target="_blank" rel="noopener noreferrer" href="https://www.wappalyzer.com">
              wappalyzer
            </a>{' '}
            information in markdown format to the clipboard.
          </li>
          <li>
            <h4>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/robertovg/journal-updated"
              >
                Journal Updated
              </a>{' '}
            </h4>
            ,continuation and updated version of the output from the levelUpTuts tutorial called
            Level 2 React Native With Graphql. Basically here you will find the next steps, as far
            as I understand, I would follow to move the output of this tutorial to be used as a real
            application with both, expo and react-native-scripts, and, additional, little
            improvements I wanted to put in practice with this good and complete exercise as code
            base.
          </li>
          <li>
            <h4>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/robertovg/language-exercise"
              >
                Language Exercise
              </a>
            </h4>
            Just a simple example to show and practice code skills resolving the implementation of a
            simple game of selecting the missing word in a sentence. And practice with react v.16,
            react-router v4.2 and redux-saga.
          </li>
          <li>
            <h4>
              <a target="_blank" rel="noopener noreferrer" href="chat-exercise">
                Chat Exercise
              </a>
            </h4>
            Another simple exercise to implement a full-stack realtime chat application. The server
            side is implemented using Meteor, MongoDB, and swydo:ddp-apollo to provide the Graphql
            interface. The frontend part uses React v.16, Graphql, apollo-client v2.2.0 with
            apollo-link-http to get GraphQL communication resolved over HTTP and
            subscriptions-transport-ws to get subscriptions through WebSocket.
          </li>
        </ul>
      </div>
    </article>
    <article>
      <h3>
        <a target="_blank" rel="noopener noreferrer" href="http://encierroexhibition.com/">
          Leap Motion Interactive Gallery Exhibition
        </a>
      </h3>
      <time>August 2016</time>
      <div>
        Utilizing the Leap Motion VR platform, this web application was created for the “Encierro
        Exhibition” project, which allows people to interact with an image gallery using hand
        gestures. An image gallery of the project can be found on my
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="http://nuriaperezdesign.com/portfolio/interactive-gallery-exhibition/"
        >
          {' '}
          partner’s website
        </a>
      </div>
    </article>
    <article>
      <h3>Audiostation-steroids</h3>
      <time>September 2013-2017</time>
      <div>
        A Google Chrome extension that provides extra functionality, such as Last.fm integration, to
        the web-based “Synology DSM AudioStation” application. The frontend is built using Jquery,
        Underscore, Backbone and Bootstrap. It is published in the Chrome Web Store and the code
        repository can be found at{' '}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/robertovg/audiostation-steroids"
        >
          GitHub
        </a>
        . The backend consists of a Node.js + Express.js server, running in OpenShift, with
        mongoose.js to connect to a MongoLab instance. The codebase for this can be found also
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/robertovg/steroids-gateway"
        >
          on GitHub
        </a>
        . Both, server and client side, use mocha.js and sinon.js for testing.
      </div>
    </article>
    <article>
      <h3>TimeLapse Tasks Manager</h3>
      <time>2010</time>
      <div>
        TimeLapse Tasks Manager; RIA consisted on Java EE Backend (Struts 2 + Flexjson, Hibernate +
        JPA orchestrated through Spring 2.5 with MySQL as DBMS) and HTML + JavaScript (Dojo Toolkit
        1.3.1) Frontend with JSON for transmitting all data without using any JSP or other view
        technology on Server. Sources published on{' '}
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/robertovg/timelapse">
          GitHub
        </a>
        . This project got a "Exceptional Undergraduate Dissertation Award" by the Escuela Técnica
        Superior de Ingeniería e Informática, ETSII (where I studied my Bachelor’s Degree in
        Computer Software Engineering)
      </div>
    </article>
  </ProjectsStyled>
)

export default ProjectsPage
