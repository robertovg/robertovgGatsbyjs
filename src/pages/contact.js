import React, { useEffect, useRef, useState } from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'

const ContactStyled = styled.section`
  form {
    margin-top: 3rem;
    display: grid;
    grid-gap: 1rem;
    justify-content: center;
  }

  .turnstile-slot {
    display: flex;
    justify-content: center;
  }

  .contact-status {
    margin-top: 0.5rem;
    text-align: center;
  }

  .contact-error {
    color: #b00020;
  }

  button[disabled] {
    opacity: 0.7;
    cursor: wait;
  }
`

const initialFields = {
  name: '',
  email: '',
  message: '',
}

const ContactPage = () => {
  const siteKey = process.env.GATSBY_TURNSTILE_SITE_KEY || ''
  const [fields, setFields] = useState(initialFields)
  const [status, setStatus] = useState('idle')
  const [errorMsg, setErrorMsg] = useState('')
  const turnstileRef = useRef(null)
  const widgetIdRef = useRef(null)
  const tokenRef = useRef('')

  useEffect(() => {
    if (!siteKey) return undefined

    const scriptSrc = 'https://challenges.cloudflare.com/turnstile/v0/api.js'
    const existingScript = document.querySelector(`script[src="${scriptSrc}"]`)

    if (existingScript) {
      return undefined
    }

    const script = document.createElement('script')
    script.src = scriptSrc
    script.async = true
    script.defer = true
    document.head.appendChild(script)

    return undefined
  }, [siteKey])

  useEffect(() => {
    if (!siteKey || !turnstileRef.current) return undefined

    let cancelled = false

    const render = () => {
      if (cancelled) return

      if (typeof window.turnstile === 'undefined') {
        window.setTimeout(render, 200)
        return
      }

      if (widgetIdRef.current || !turnstileRef.current) return

      widgetIdRef.current = window.turnstile.render(turnstileRef.current, {
        sitekey: siteKey,
        callback: (token) => {
          tokenRef.current = token
        },
        'expired-callback': () => {
          tokenRef.current = ''
        },
        theme: 'dark',
      })
    }

    render()

    return () => {
      cancelled = true

      if (widgetIdRef.current && typeof window.turnstile !== 'undefined') {
        window.turnstile.remove(widgetIdRef.current)
        widgetIdRef.current = null
      }
    }
  }, [siteKey])

  function handleSubmit(event) {
    event.preventDefault()

    if (siteKey && !tokenRef.current) {
      setErrorMsg('Please complete the Turnstile challenge before sending the form.')
      return
    }

    setStatus('loading')
    setErrorMsg('')

    fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: fields.name,
        email: fields.email,
        message: fields.message,
        turnstile_token: tokenRef.current || 'dev',
      }),
    })
      .then((response) =>
        response.json().catch(() => ({})).then((data) => ({ response, data })),
      )
      .then(({ response, data }) => {
        if (!response.ok) {
          throw new Error(data.error || 'There was a problem sending the message.')
        }

        setFields(initialFields)
        setStatus('idle')
        tokenRef.current = ''

        if (widgetIdRef.current && typeof window.turnstile !== 'undefined') {
          window.turnstile.reset(widgetIdRef.current)
        }

        window.location.assign('/thanks/')
      })
      .catch((error) => {
        setStatus('error')
        setErrorMsg(error instanceof Error ? error.message : 'Unexpected error')

        if (widgetIdRef.current && typeof window.turnstile !== 'undefined') {
          window.turnstile.reset(widgetIdRef.current)
          tokenRef.current = ''
        }
      })
  }

  return (
    <ContactStyled>
      <Helmet>
        <title>Contact - Roberto Vázquez González Site</title>
      </Helmet>
      <h2 className="general__pageTitle">Contact Me</h2>
      <article>
        If you have any questions about my professional experience and/or skills or just want to
        get in touch, do not hesitate to use the following form.
      </article>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          placeholder="What's your name?"
          value={fields.name}
          onChange={(event) => {
            const { value } = event.target
            setFields((current) => ({
              ...current,
              name: value,
            }))
          }}
        />

        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          placeholder="And your email?"
          value={fields.email}
          onChange={(event) => {
            const { value } = event.target
            setFields((current) => ({
              ...current,
              email: value,
            }))
          }}
          required
        />

        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          cols="30"
          rows="10"
          placeholder="What do you want to say?"
          value={fields.message}
          onChange={(event) => {
            const { value } = event.target
            setFields((current) => ({
              ...current,
              message: value,
            }))
          }}
          required
        />

        {siteKey ? <div ref={turnstileRef} className="turnstile-slot" /> : null}
        {errorMsg ? <p className="contact-status contact-error">{errorMsg}</p> : null}

        <button type="submit" disabled={status === 'loading'}>
          {status === 'loading' ? 'Sending...' : 'Send it!'}
        </button>
      </form>
    </ContactStyled>
  )
}

export default ContactPage
