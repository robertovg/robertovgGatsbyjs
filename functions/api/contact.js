const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function json(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
  })
}

async function readBody(request) {
  const contentType = request.headers.get('content-type') || ''

  if (contentType.includes('application/json')) {
    return request.json()
  }

  if (contentType.includes('multipart/form-data') || contentType.includes('application/x-www-form-urlencoded')) {
    const formData = await request.formData()
    return Object.fromEntries(formData.entries())
  }

  return request.json()
}

async function verifyTurnstile(token, secret, ip) {
  const body = new FormData()
  body.append('secret', secret)
  body.append('response', token)
  body.append('remoteip', ip)

  const res = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
    method: 'POST',
    body,
  })
  const data = await res.json()

  return data.success === true
}

export async function onRequestOptions() {
  return new Response(null, {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  })
}

export async function onRequestPost(context) {
  const { request, env } = context

  let body
  try {
    body = await readBody(request)
  } catch {
    return json({ error: 'Invalid body' }, 400)
  }

  const name = String(body.name || '').trim()
  const email = String(body.email || '').trim().toLowerCase()
  const message = String(body.message || '').trim()
  const turnstileToken = String(body.turnstile_token || body['cf-turnstile-response'] || '')

  if (!email || !EMAIL_RE.test(email)) {
    return json({ error: 'Invalid email' }, 422)
  }

  if (!message || message.length < 5) {
    return json({ error: 'Message too short' }, 422)
  }

  const ip = request.headers.get('CF-Connecting-IP') || request.headers.get('X-Forwarded-For') || ''
  const turnstileSecret = env.TURNSTILE_SECRET_KEY || ''

  if (turnstileSecret && turnstileSecret !== 'dev') {
    if (!turnstileToken) {
      return json({ error: 'Verification required' }, 422)
    }

    const valid = await verifyTurnstile(turnstileToken, turnstileSecret, ip)
    if (!valid) {
      return json({ error: 'Verification failed' }, 422)
    }
  }

  const resendApiKey = env.RESEND_API_KEY
  if (!resendApiKey) {
    return json({ error: 'Missing Resend API key' }, 500)
  }

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${resendApiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: env.FROM_EMAIL || 'Website <noreply@example.com>',
      to: env.CONTACT_TO_EMAIL || 'contact@example.com',
      reply_to: email,
      subject: `Mensaje de ${name || email}`,
      text: `De: ${name || '—'} <${email}>\n\n${message}`,
    }),
  })

  if (!res.ok) {
    return json({ error: 'Error sending message' }, 500)
  }

  return json({ ok: true })
}
