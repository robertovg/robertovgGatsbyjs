import React from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'

const ContactStyled = styled.section`
  form {
    margin-top: 3rem;
    display: grid;
    grid-gap: 1rem;
    justify-content: center;
  }
`

const ContactPage = () => (
  <ContactStyled>
    <Helmet title="Contact - Roberto Vázquez González Site" />
    <h2 className="general__pageTitle">Contact Me</h2>
    <article>
      If you have any questions about my professional experience and/or skills or just want to to
      get in touch, do not hesitate to use the following form.
    </article>
    <form name="contactMe" method="post" action="/thanks/" data-netlify="true">
      <input type="hidden" name="form-name" value="contactMe" />
      <label htmlFor="name">Name</label>
      <input name="name" type="text" autoComplete="name" placeholder="What's your name?" required />
      <label htmlFor="email">Email</label>
      <input
        name="email"
        type="email"
        autoComplete="email"
        placeholder="And your email?"
        required
      />
      <label htmlFor="message">Message</label>
      <textarea
        name="message"
        cols="30"
        rows="10"
        placeholder="What do you want to say?"
        required
      />
      <div data-netlify-recaptcha />
      <button>Send it!</button>
    </form>
  </ContactStyled>
)

export default ContactPage
