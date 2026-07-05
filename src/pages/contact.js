import React, { useEffect, useRef, useState } from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import { colors, maxMainWith } from '../components/constants'

const ContactStyled = styled.section`
  max-width: ${maxMainWith};
  margin: 0 auto;

  article {
    max-width: 68ch;
    line-height: 1.7;
    margin-bottom: 1.25rem;
  }

  form {
    margin-top: 2rem;
    width: 100%;
    max-width: 44rem;
    box-sizing: border-box;
    display: grid;
    gap: 0.9rem;
    padding: 1.25rem;
    border-radius: 14px;
    background: rgba(255, 255, 255, 0.96);
  }

  label {
    font-size: 0.92rem;
    font-weight: 600;
    letter-spacing: 0.01em;
    color: ${colors.darkTextColor};
  }

  input,
  textarea {
    width: 100%;
    box-sizing: border-box;
    font: inherit;
    color: ${colors.darkTextColor};
    background-color: rgba(255, 255, 255, 0.98);
    border: 1px solid rgba(0, 0, 0, 0.16);
    border-radius: 10px;
    padding: 0.95rem 1rem;
    box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.03);
    transition:
      border-color 160ms ease,
      box-shadow 160ms ease,
      transform 160ms ease,
      background-color 160ms ease;
  }

  input::placeholder,
  textarea::placeholder {
    color: rgba(0, 0, 0, 0.44);
  }

  input:focus,
  textarea:focus {
    outline: none;
    border-color: ${colors.gradientTop};
    box-shadow: 0 0 0 4px rgba(59, 16, 187, 0.12);
    background-color: #fff;
  }

  textarea {
    min-height: 12rem;
    resize: vertical;
    line-height: 1.6;
  }

  .turnstile-slot {
    display: flex;
    justify-content: flex-start;
    margin-top: 0.25rem;
  }

  .contact-status {
    margin-top: 0.25rem;
    text-align: left;
    font-size: 0.95rem;
    line-height: 1.5;
  }

  .contact-error {
    color: #b00020;
  }

  button {
    justify-self: start;
    padding: 0.78rem 1.05rem;
    border: 1px solid rgba(0, 0, 0, 0.22);
    border-radius: 6px;
    background: rgba(255, 255, 255, 0.92);
    color: ${colors.darkTextColor};
    font: inherit;
    font-weight: 600;
    line-height: 1;
    transition:
      background-color 160ms ease,
      border-color 160ms ease,
      transform 160ms ease;
  }

  button:hover:not([disabled]) {
    transform: translateY(-1px);
    background: rgba(255, 255, 255, 1);
    border-color: rgba(0, 0, 0, 0.32);
    cursor: pointer;
  }

  button:focus {
    outline: none;
    border-color: rgba(0, 0, 0, 0.4);
    box-shadow: 0 0 0 3px rgba(0, 0, 0, 0.08);
  }

  button[disabled] {
    opacity: 0.7;
    cursor: wait;
  }

  @media (max-width: 640px) {
    form {
      padding: 1rem;
      border-radius: 12px;
    }
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
