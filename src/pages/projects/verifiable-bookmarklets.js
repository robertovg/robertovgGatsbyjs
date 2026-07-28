import React from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import { colors } from '../../components/constants'
import { media } from '../../components/Breakpoints'

const PageStyled = styled.article`
  color: ${colors.darkTextColor};

  *,
  *:before,
  *:after {
    box-sizing: border-box;
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

  button,
  input,
  textarea {
    font: inherit;
  }

  .hero {
    margin-bottom: 1.25rem;
  }

  .eyebrow {
    margin: 0 0 0.35rem;
    font-size: 0.78rem;
    font-weight: bold;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: ${colors.mediaColor};
  }

  h1 {
    margin: 0;
    font-size: 2.4rem;
    line-height: 1.05;
  }

  .hero p {
    max-width: 760px;
    margin: 0.65rem 0 0;
    font-size: 1.05rem;
    line-height: 1.45;
  }

  .hero .heroNote {
    font-size: 0.85rem;
    line-height: 1.4;
    opacity: 0.85;
  }

  .tool {
    display: grid;
    grid-template-columns: minmax(0, 1fr) minmax(280px, 0.85fr);
    gap: 1rem;
    align-items: start;
    padding: 1.25rem;
    border: 1px solid rgba(0, 0, 0, 0.12);
    border-radius: 14px;
    background: rgba(255, 255, 255, 0.96);
  }

  .panel {
    min-width: 0;
  }

  .panelHeader {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    margin-bottom: 0.75rem;
  }

  h2 {
    margin: 0;
    font-size: 1.35rem;
  }

  h3 {
    margin: 0 0 0.5rem;
    font-size: 1.1rem;
  }

  label {
    display: block;
    margin-bottom: 0.4rem;
    font-weight: bold;
  }

  input,
  textarea {
    display: block;
    width: 100%;
    border: 1px solid rgba(0, 0, 0, 0.16);
    border-radius: 10px;
    background: rgba(255, 255, 255, 0.98);
    color: ${colors.darkTextColor};
    box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.03);
    transition: border-color 160ms ease, box-shadow 160ms ease, background-color 160ms ease;
  }

  input {
    height: auto;
    padding: 0.78rem 1rem;
  }

  textarea {
    min-height: 220px;
    padding: 0.95rem 1rem;
    resize: vertical;
    line-height: 1.45;
    font-family: Consolas, Monaco, 'Andale Mono', monospace;
  }

  input:focus,
  textarea:focus {
    outline: none;
    border-color: ${colors.gradientTop};
    box-shadow: 0 0 0 4px rgba(59, 16, 187, 0.12);
    background: #fff;
  }

  .field {
    margin-bottom: 0.85rem;
  }

  .sharedNotice {
    margin: 0.5rem 0 0;
    color: ${colors.mediaColor};
    font-size: 0.9rem;
    line-height: 1.4;
  }

  .segmented {
    display: inline-grid;
    grid-template-columns: repeat(2, 1fr);
    border: 1px solid ${colors.bordersColor};
    border-radius: 3px;
    overflow: hidden;
  }

  .segmented button {
    min-width: 76px;
    min-height: 38px;
    height: 100%;
    border: 0;
    background: #fff;
    cursor: pointer;
    font-weight: 600;
  }

  .segmented button + button {
    border-left: 1px solid ${colors.bordersColor};
  }

  .segmented .active {
    background: ${colors.mediaColor};
    color: ${colors.lightTextColor};
  }

  .actions {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }

  .bookmarkletActions {
    gap: 0.85rem;
  }

  .button {
    min-height: 38px;
    padding: 0.78rem 1.05rem;
    border: 1px solid rgba(0, 0, 0, 0.22);
    border-radius: 6px;
    background: rgba(255, 255, 255, 0.92);
    color: ${colors.darkTextColor};
    font-weight: 600;
    line-height: 1;
    cursor: pointer;
    transition: background-color 160ms ease, border-color 160ms ease, transform 160ms ease;
  }

  .button:hover:not(:disabled) {
    transform: translateY(-1px);
    background: #fff;
    border-color: rgba(0, 0, 0, 0.32);
  }

  .button:focus,
  .segmented button:focus,
  .editNameButton:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(0, 0, 0, 0.08);
  }

  .button:disabled {
    cursor: not-allowed;
    opacity: 0.55;
  }

  .bookmarkletLink {
    display: inline-flex;
    align-items: center;
    min-height: 40px;
    max-width: 100%;
    margin: 0 0 0.75rem;
    padding: 0.45rem 0.75rem;
    border: 1px solid ${colors.mediaColor};
    border-radius: 3px;
    background: ${colors.contentWrappersBackground};
    font-weight: bold;
    word-break: break-word;
  }

  .bookmarkletRow {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 0.75rem;
  }

  .bookmarkletRow .bookmarkletLink {
    margin-bottom: 0;
  }

  .bookmarkletNameInput {
    flex: 1;
    min-width: 0;
  }

  .editNameButton {
    width: 36px;
    height: 36px;
    padding: 0;
    border: 1px solid ${colors.bordersColor};
    border-radius: 3px;
    background: #fff;
    color: ${colors.darkTextColor};
    cursor: pointer;
    font-size: 1.1rem;
    line-height: 1;
  }

  .dropZone {
    min-height: 140px;
    padding: 0.75rem;
    border: 1px dashed ${colors.mediaColor};
    border-radius: 3px;
    background: rgba(255, 255, 255, 0.72);
  }

  .dropZone textarea {
    min-height: 118px;
    border: 0;
    background: transparent;
    padding: 0;
  }

  .dropZone + .actions {
    margin-top: 0.75rem;
  }

  .metaGrid {
    display: grid;
    grid-template-columns: 90px minmax(0, 1fr);
    gap: 0.45rem 0.7rem;
    margin: 0.85rem 0;
    font-size: 0.9rem;
  }

  .metaGrid strong {
    color: ${colors.mediaColor};
  }

  .sourceValue {
    display: flex;
    flex-wrap: wrap;
    align-items: baseline;
    gap: 0.35rem 0.65rem;
    min-width: 0;
  }

  .mono {
    overflow-wrap: anywhere;
    font-family: Consolas, Monaco, 'Andale Mono', monospace;
  }

  .status {
    margin: 0.85rem 0;
    padding: 0.75rem;
    border-left: 4px solid ${colors.mediaColor};
    background: rgba(85, 26, 139, 0.06);
    line-height: 1.4;
    white-space: pre-wrap;
  }

  .status.error {
    border-left-color: #b50c24;
    background: rgba(181, 12, 36, 0.08);
  }

  .status.success {
    border-left-color: #487b31;
    background: rgba(72, 123, 49, 0.1);
  }

  details {
    margin-top: 0.85rem;
  }

  summary {
    cursor: pointer;
    font-weight: bold;
  }

  .docs {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 1rem;
    margin-top: 1.5rem;
  }

  .docBlock {
    padding: 1rem;
    border: 1px solid rgba(0, 0, 0, 0.12);
    border-radius: 10px;
    background: rgba(255, 255, 255, 0.96);
  }

  .docBlock p,
  .docBlock li {
    line-height: 1.45;
  }

  .docBlock ul {
    padding-left: 1.1rem;
  }

  code {
    padding: 0.1rem 0.25rem;
    background: ${colors.contentWrappersBackground};
    font-family: Consolas, Monaco, 'Andale Mono', monospace;
  }

  ${media.desktop`
    .tool,
    .docs {
      grid-template-columns: 1fr;
    }
  `};

  ${media.tablet`
    h1 {
      font-size: 2rem;
    }

    .tool {
      padding: 0.75rem;
    }

    .panelHeader {
      display: block;
    }

    .segmented {
      margin-top: 0.75rem;
      width: 100%;
    }
  `};
`

const emptyInspection = {
  decoded: '',
  metadata: null,
  metadataError: '',
  payloadSha: '',
  size: 0,
}

const pageInfoSample = `(() => {
  const description =
    document.querySelector('meta[name="description"]')?.getAttribute('content') ||
    'No description found'
  const meta = Array.from(document.querySelectorAll('meta'))
    .map(element => {
      const name = element.getAttribute('name') || element.getAttribute('property')
      const content = element.getAttribute('content')

      return name && content ? name + ': ' + content : ''
    })
    .filter(Boolean)
    .slice(0, 12)

  alert([
    'Name: ' + (document.title || 'Untitled'),
    'Description: ' + description,
    'Meta:',
    meta.length ? meta.join('\\n') : 'No metadata found',
    'Sample verifiable bookmarklet from https://robertovg.com/projects/verifiable-bookmarklets',
  ].join('\\n\\n'))
})()`

function normalizeSource(source) {
  return source.replace(/\r\n?/g, '\n').trim()
}

function minifySource(source) {
  return normalizeSource(source)
}

function encodeBookmarkletValue(value) {
  return encodeURIComponent(value)
    .replace(/'/g, '%27')
    .replace(/"/g, '%22')
}

function encodeBookmarkletBody(body) {
  return `javascript:${encodeURIComponent(body)}`
}

function createPayload(source) {
  return encodeBookmarkletBody(`(()=>{${minifySource(source)}})()`)
}

function createMetadata(sha, src) {
  return src ? `/*bm:v1;sha=${sha};src=${encodeBookmarkletValue(src)}*/` : `/*bm:v1;sha=${sha}*/`
}

function createBookmarklet(source, sha, src) {
  return encodeBookmarkletBody(`(()=>{${createMetadata(sha, src)}${minifySource(source)}})()`)
}

function decodeBookmarklet(bookmarklet) {
  const trimmed = bookmarklet.trim()
  const body = trimmed.indexOf('javascript:') === 0 ? trimmed.slice('javascript:'.length) : trimmed

  try {
    return {
      decoded: decodeURIComponent(body),
      error: '',
      hasScheme: trimmed.indexOf('javascript:') === 0,
    }
  } catch (error) {
    return {
      decoded: body,
      error: error.message,
      hasScheme: trimmed.indexOf('javascript:') === 0,
    }
  }
}

function parseMetadata(decoded) {
  const matches = decoded.match(/\/\*bm:v1;[^*]*\*\//g)

  if (!matches) {
    return { metadata: null, error: '' }
  }

  if (matches.length !== 1) {
    return { metadata: null, error: 'More than one bm:v1 metadata block found.' }
  }

  const raw = matches[0].slice(2, -2)
  const parts = raw.split(';')

  if (parts[0] !== 'bm:v1') {
    return { metadata: null, error: 'Metadata must start with bm:v1.' }
  }

  const metadata = { bm: 'v1', raw: matches[0] }
  const seen = {}

  for (let i = 1; i < parts.length; i += 1) {
    const part = parts[i]
    const separatorIndex = part.indexOf('=')

    if (!part || separatorIndex === -1) {
      return { metadata: null, error: 'Metadata contains a malformed field.' }
    }

    const key = part.slice(0, separatorIndex)
    const value = part.slice(separatorIndex + 1)

    if (key !== 'sha' && key !== 'src') {
      return { metadata: null, error: `Unknown metadata field: ${key}.` }
    }

    if (seen[key]) {
      return { metadata: null, error: `Duplicate metadata field: ${key}.` }
    }

    seen[key] = true
    metadata[key] = key === 'src' ? decodeURIComponent(value) : value
  }

  if (!metadata.sha) {
    return { metadata: null, error: 'Missing sha field.' }
  }

  if (!/^[a-f0-9]{64}$/.test(metadata.sha)) {
    return { metadata: null, error: 'sha must be 64 lowercase hex characters.' }
  }

  if (metadata.src && !/^https?:\/\//.test(metadata.src)) {
    return { metadata: null, error: 'src must be an absolute http or https URL.' }
  }

  return { metadata, error: '' }
}

function removeMetadata(decoded) {
  return decoded.replace(/\/\*bm:v1;[^*]*\*\//, '')
}

function getBookmarkletFromDrop(event) {
  const data = event.dataTransfer
  const values = [
    data.getData('application/x-verifiable-bookmarklet'),
    data.getData('text/plain'),
    data.getData('text/uri-list'),
    data.getData('text'),
  ]

  return (
    values.find(value => {
      const trimmedValue = value.trim()

      return trimmedValue.indexOf('javascript:') === 0
    }) || ''
  )
}

function validateSourceUrl(value) {
  const sourceUrl = value.trim()

  try {
    const parsed = new URL(sourceUrl)
    const path = parsed.pathname.split('/').filter(Boolean)

    if (parsed.hostname === 'gist.github.com') {
      if (!path[0] || !path[1]) {
        throw new Error('This is a Gist URL but it is missing the user and gist id.')
      }

      // A Gist page URL is not fetchable, but the matching raw URL is: GitHub
      // serves the raw file (the first one when a Gist has several) with
      // permissive CORS headers. Convert it so the paste just works.
      const revision = path[2] && path[2] !== 'raw' ? `/${path[2]}` : ''

      return `https://gist.githubusercontent.com/${path[0]}/${path[1]}/raw${revision}`
    }

    if (parsed.hostname === 'gist.githubusercontent.com') {
      if (path[2] !== 'raw' || !path[3]) {
        throw new Error(
          'Gist raw URLs must include the revision: https://gist.githubusercontent.com/<user>/<gist>/raw/<revision>[/<filename>]',
        )
      }
    }
  } catch (error) {
    if (error.message.indexOf('Gist ') === 0 || error.message.indexOf('This is a Gist') === 0) {
      throw error
    }

    throw new Error('Enter a valid absolute http or https URL.')
  }

  return sourceUrl
}

const HTML_SOURCE_START = /^\s*(<!doctype html|<html[\s>]|<\?xml)/i

// Checks that a fetched response actually looks like runnable JavaScript.
// It never executes the code: `new Function` only compiles it, so a bad or
// hostile source is rejected before it is turned into a bookmarklet.
function assertRunnableSource(source, contentType) {
  const trimmed = (source || '').trim()
  const mediaType = (contentType || '')
    .split(';')[0]
    .trim()
    .toLowerCase()

  if (!trimmed) {
    throw new Error('The source URL returned an empty response. There is no JavaScript to use.')
  }

  const looksLikeHtml = mediaType === 'text/html' || HTML_SOURCE_START.test(trimmed)

  if (looksLikeHtml) {
    throw new Error(
      'The URL returned an HTML page, not JavaScript source. Use the raw file URL (for Gists, the gist.githubusercontent.com/.../raw/... link).',
    )
  }

  if (
    mediaType === 'text/css' ||
    mediaType === 'application/json' ||
    mediaType === 'application/xml' ||
    mediaType === 'text/xml' ||
    mediaType === 'application/pdf' ||
    /^(image|audio|video)\//.test(mediaType)
  ) {
    throw new Error(`The URL returned ${mediaType}, not JavaScript source.`)
  }

  try {
    // Parse-only check: compiles the source as a function body without running it.
    // eslint-disable-next-line no-new, no-new-func
    new Function(trimmed)
  } catch (error) {
    if (error instanceof SyntaxError) {
      throw new Error(
        `The fetched source is not valid JavaScript and cannot be run: ${error.message}`,
      )
    }
    // Non-syntax errors (for example a CSP that blocks eval) mean we could not
    // verify the syntax here; let the source through rather than false-flagging it.
  }

  return trimmed
}

function inferBookmarkletName(sourceUrl) {
  try {
    const parsed = new URL(sourceUrl)
    const path = parsed.pathname.split('/').filter(Boolean)
    let filename = path[path.length - 1] || ''

    for (let i = 0; i < 2; i += 1) {
      const decodedFilename = decodeURIComponent(filename)

      if (decodedFilename === filename) {
        break
      }

      filename = decodedFilename
    }

    return filename.replace(/\.[^/.]+$/, '')
  } catch (error) {
    return ''
  }
}

// A filename-less Gist raw URL ends in the revision hash (or "raw"), which is
// not a useful name. Detect that so we can fall back to reading the source.
function looksLikeGistRevision(name) {
  return !name || name === 'raw' || /^[0-9a-f]{7,40}$/i.test(name)
}

// Best-effort readable name pulled from a leading comment / heading in the
// source, for example "# Full Site to Markdown Extractor" -> that text.
function inferNameFromSource(source) {
  if (!source) {
    return ''
  }

  const lines = source.split('\n')

  for (let i = 0; i < lines.length && i < 25; i += 1) {
    const cleaned = lines[i]
      .replace(/^\s*\/\*+/, '')
      .replace(/\*+\/\s*$/, '')
      .replace(/^\s*\*+/, '')
      .replace(/^\s*\/\/+/, '')
      .replace(/^\s*#+\s*/, '')
      .trim()

    if (!cleaned || cleaned.length > 80) {
      continue
    }

    // Skip lines that look like actual code rather than a title.
    if (/[{};]|=>|\bfunction\b/.test(cleaned)) {
      continue
    }

    return cleaned
  }

  return ''
}

function getGistPageUrl(sourceUrl) {
  try {
    const parsed = new URL(sourceUrl)
    const path = parsed.pathname.split('/').filter(Boolean)

    if (parsed.hostname !== 'gist.githubusercontent.com' || path.length < 4 || path[2] !== 'raw') {
      return ''
    }

    return `https://gist.github.com/${path[0]}/${path[1]}/${path[3]}`
  } catch (error) {
    return ''
  }
}

function createShareUrl(sourceUrl) {
  if (typeof window === 'undefined') {
    return ''
  }

  const shareUrl = new URL(window.location.href)
  shareUrl.search = ''
  shareUrl.searchParams.set('src', sourceUrl)

  return shareUrl.toString()
}

function copyText(value) {
  if (typeof navigator === 'undefined' || !navigator.clipboard || !navigator.clipboard.writeText) {
    return Promise.reject(new Error('Clipboard access is not available in this browser.'))
  }

  return navigator.clipboard.writeText(value)
}

class VerifiableBookmarkletsPage extends React.Component {
  state = {
    inputMode: 'url',
    actionMode: 'generate',
    sourceCode: pageInfoSample,
    sourceUrl: '',
    bookmarklet: '',
    generatedBookmarklet: '',
    generatedSha: '',
    generatedMetadata: '',
    inspection: emptyInspection,
    status: '',
    statusType: '',
    loading: false,
    bookmarkletName: 'Drag me to bookmarks',
    bookmarkletNameEdited: false,
    editingBookmarkletName: false,
    sharedSource: false,
    sourceLocked: false,
  }

  componentDidMount() {
    const sharedSource = new URLSearchParams(window.location.search).get('src')

    if (!sharedSource) {
      return
    }

    this.setState(
      {
        inputMode: 'url',
        sourceUrl: sharedSource,
        sharedSource: true,
        sourceLocked: true,
        actionMode: 'generate',
      },
      this.generate,
    )
  }

  getActiveSource = () => {
    const { inputMode, sourceCode, sourceUrl } = this.state

    if (inputMode === 'code') {
      return Promise.resolve({
        source: sourceCode,
        src: '',
      })
    }

    if (!sourceUrl.trim()) {
      return Promise.reject(new Error('Add a source URL first.'))
    }

    let fetchUrl

    try {
      fetchUrl = validateSourceUrl(sourceUrl)
    } catch (error) {
      return Promise.reject(error)
    }

    return fetch(fetchUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error(
            `Could not fetch source URL. HTTP ${response.status} ${response.statusText}.`.trim(),
          )
        }

        const contentType = response.headers.get('content-type') || ''

        return response.text().then(source => ({
          source: assertRunnableSource(source, contentType),
          src: fetchUrl,
        }))
      })
      .catch(error => {
        if (error.name === 'TypeError') {
          throw new Error(
            'Could not reach the source URL. The host may be offline or it blocked browser access (CORS). Use its raw URL or paste the source code instead.',
          )
        }

        throw error
      })
  }

  sha256 = value => {
    if (
      typeof window === 'undefined' ||
      !window.crypto ||
      !window.crypto.subtle ||
      typeof TextEncoder === 'undefined'
    ) {
      return Promise.reject(new Error('SHA-256 needs a modern browser with crypto.subtle.'))
    }

    const bytes = new TextEncoder().encode(value)

    return window.crypto.subtle.digest('SHA-256', bytes).then(hash =>
      Array.from(new Uint8Array(hash))
        .map(byte => byte.toString(16).padStart(2, '0'))
        .join(''),
    )
  }

  setInputMode = inputMode => {
    this.setState({ inputMode, status: '', statusType: '' }, () => {
      if (inputMode === 'code' && this.sourceCodeInput) {
        this.sourceCodeInput.focus()
        this.sourceCodeInput.select()
      }
    })
  }

  setActionMode = actionMode => {
    this.setState({ actionMode, status: '', statusType: '' })
  }

  finishBookmarkletNameEdit = () => {
    this.setState(previousState => ({
      bookmarkletName: previousState.bookmarkletName.trim() || 'Drag me to bookmarks',
      editingBookmarkletName: false,
    }))
  }

  handleBookmarkletNameKeyDown = event => {
    if (event.key === 'Enter') {
      this.finishBookmarkletNameEdit()
    }

    if (event.key === 'Escape') {
      this.setState({ editingBookmarkletName: false })
    }
  }

  generate = () => {
    this.setState({
      loading: true,
      status: '',
      statusType: '',
      generatedBookmarklet: '',
      generatedSha: '',
      generatedMetadata: '',
      bookmarklet: '',
      inspection: emptyInspection,
    })

    Promise.resolve()
      .then(this.getActiveSource)
      .then(({ source, src }) => {
        const payload = createPayload(source)

        return this.sha256(payload).then(sha => {
          const bookmarklet = createBookmarklet(source, sha, src)
          const metadata = createMetadata(sha, src)
          let inferredName = this.state.bookmarkletName

          if (src && !this.state.bookmarkletNameEdited) {
            const urlName = inferBookmarkletName(src)
            const sourceName = looksLikeGistRevision(urlName) ? inferNameFromSource(source) : ''

            inferredName = sourceName || urlName || this.state.bookmarkletName
          }

          return this.inspectValue(bookmarklet).then(inspection => {
            const shareUrl = src ? createShareUrl(src) : ''

            if (shareUrl && typeof window !== 'undefined' && window.history.replaceState) {
              window.history.replaceState({}, '', shareUrl)
            }

            this.setState({
              bookmarklet,
              generatedBookmarklet: bookmarklet,
              generatedSha: sha,
              generatedMetadata: metadata,
              inspection,
              bookmarkletName: inferredName || this.state.bookmarkletName,
              sourceUrl: src || this.state.sourceUrl,
              sharedSource: src ? true : this.state.sharedSource,
              sourceLocked: src ? true : this.state.sourceLocked,
              status:
                'Generated. Drag the link to your bookmarks bar, or copy the bookmarklet text.',
              statusType: 'success',
            })

            if (shareUrl) {
              copyText(shareUrl).then(
                () => this.setState({ status: 'Generated. Share URL copied to the clipboard.' }),
                () => undefined,
              )
            }
          })
        })
      })
      .catch(error => {
        this.setState({
          status: error.message,
          statusType: 'error',
          sourceLocked: false,
          sharedSource: false,
        })
      })
      .then(() => this.setState({ loading: false }))
  }

  inspectValue = bookmarklet => {
    if (!bookmarklet.trim()) {
      return Promise.resolve(emptyInspection)
    }

    const decodedBookmarklet = decodeBookmarklet(bookmarklet)
    const metadataResult = parseMetadata(decodedBookmarklet.decoded)
    const payloadBody = removeMetadata(decodedBookmarklet.decoded)
    const payload = decodedBookmarklet.hasScheme ? encodeBookmarkletBody(payloadBody) : payloadBody

    return this.sha256(payload).then(payloadSha => ({
      decoded: decodedBookmarklet.decoded,
      decodeError: decodedBookmarklet.error,
      metadata: metadataResult.metadata,
      metadataError: metadataResult.error,
      payloadSha,
      size: bookmarklet.length,
    }))
  }

  inspect = () => {
    const { bookmarklet } = this.state

    this.setState({ loading: true, status: '', statusType: '' })

    this.inspectValue(bookmarklet)
      .then(inspection => {
        this.setState({
          inspection,
          status: bookmarklet.trim()
            ? 'Inspected without executing the bookmarklet.'
            : 'Paste or drag a bookmarklet first.',
          statusType: bookmarklet.trim() ? '' : 'error',
        })
      })
      .catch(error => {
        this.setState({
          status: error.message,
          statusType: 'error',
        })
      })
      .then(() => this.setState({ loading: false }))
  }

  verify = () => {
    const { bookmarklet } = this.state

    this.setState({
      loading: true,
      status: '',
      statusType: '',
      generatedBookmarklet: '',
      generatedSha: '',
      generatedMetadata: '',
      inspection: emptyInspection,
    })

    if (!bookmarklet.trim()) {
      this.setState({
        loading: false,
        status: 'Paste or drag a bookmarklet first.',
        statusType: 'error',
      })
      return
    }

    this.inspectValue(bookmarklet)
      .then(inspection => {
        if (!inspection.metadata || inspection.metadataError) {
          throw new Error(inspection.metadataError || 'This bookmarklet has no bm:v1 metadata.')
        }

        return Promise.resolve()
          .then(this.getActiveSource)
          .then(({ source }) =>
            this.sha256(createPayload(source)).then(expectedSha => ({
              expectedSha,
              inspection,
            })),
          )
      })
      .then(({ expectedSha, inspection }) => {
        const matches = expectedSha === inspection.metadata.sha

        this.setState({
          inspection,
          status: matches
            ? 'Bookmarklet matches the source.'
            : 'Bookmarklet does not match the source.',
          statusType: matches ? 'success' : 'error',
        })
      })
      .catch(error => {
        this.setState({
          status: error.message,
          statusType: 'error',
        })
      })
      .then(() => this.setState({ loading: false }))
  }

  handleDrop = event => {
    event.preventDefault()

    const bookmarklet = getBookmarkletFromDrop(event)

    if (bookmarklet) {
      this.setState({ bookmarklet }, this.inspect)
      return
    }

    this.setState({
      status:
        'The browser blocked this bookmarklet while dragging it. Copy the bookmarklet text and paste it here, or drag the generated link from this page.',
      statusType: 'error',
    })
  }

  clearBookmarklet = () => {
    this.setState({
      bookmarklet: '',
      generatedBookmarklet: '',
      generatedSha: '',
      generatedMetadata: '',
      inspection: emptyInspection,
      status: '',
      statusType: '',
      bookmarkletName: 'Drag me to bookmarks',
      bookmarkletNameEdited: false,
      editingBookmarkletName: false,
      sourceUrl: '',
      sharedSource: false,
      sourceLocked: false,
    })
  }

  copyShareUrl = () => {
    const { sourceUrl } = this.state

    if (!sourceUrl) {
      this.setState({
        status: 'Generate from a source URL before copying a share URL.',
        statusType: 'error',
      })
      return
    }

    copyText(createShareUrl(sourceUrl)).then(
      () => this.setState({ status: 'Share URL copied to the clipboard.', statusType: 'success' }),
      error => this.setState({ status: error.message, statusType: 'error' }),
    )
  }

  renderMetadata() {
    const { inspection, generatedSha, generatedMetadata } = this.state
    const metadata = inspection.metadata
    const sourceUrl = metadata && metadata.src
    const gistPageUrl = sourceUrl ? getGistPageUrl(sourceUrl) : ''

    return (
      <div className="metaGrid">
        <strong>SHA</strong>
        <span className="mono">
          {(metadata && metadata.sha) || generatedSha || 'Not generated yet'}
        </span>
        <strong>Source</strong>
        <span className="sourceValue">
          <span className="mono">{sourceUrl || 'Manual source'}</span>
          {gistPageUrl ? (
            <a href={gistPageUrl} target="_blank" rel="noopener noreferrer">
              View Gist
            </a>
          ) : null}
        </span>
        <strong>Metadata</strong>
        <span className="mono">{(metadata && metadata.raw) || generatedMetadata || 'None'}</span>
        <strong>Size</strong>
        <span>{inspection.size ? `${inspection.size} chars` : 'No bookmarklet yet'}</span>
      </div>
    )
  }

  render() {
    const {
      inputMode,
      actionMode,
      sourceCode,
      sourceUrl,
      bookmarklet,
      generatedBookmarklet,
      inspection,
      status,
      statusType,
      loading,
      bookmarkletName,
      bookmarkletNameEdited,
      editingBookmarkletName,
      sharedSource,
      sourceLocked,
    } = this.state

    return (
      <PageStyled>
        <Helmet title="Verifiable Bookmarklets - Roberto Vázquez González Site" />

        <header className="hero">
          <h3>Verifiable Bookmarklets</h3>
          <p>Generate, inspect and verify bookmarklets without executing them.</p>
          <p className="heroNote">
            A bookmarklet is a normal browser bookmark that stores JavaScript instead of a web
            address. When you click it, the code runs on whatever page you are currently viewing, so
            you can automate small tasks on any site without installing an extension.
          </p>
        </header>

        <section className="tool">
          <div className="panel">
            <div className="panelHeader">
              <h2>Source</h2>
              <div className="segmented" aria-label="Source input mode">
                <button
                  className={inputMode === 'code' ? 'active' : ''}
                  type="button"
                  onClick={() => this.setInputMode('code')}
                >
                  Code
                </button>
                <button
                  className={inputMode === 'url' ? 'active' : ''}
                  type="button"
                  onClick={() => this.setInputMode('url')}
                >
                  URL
                </button>
              </div>
            </div>

            {inputMode === 'url' ? (
              <div className="field">
                <label htmlFor="source-url">Raw JavaScript URL</label>
                <input
                  id="source-url"
                  value={sourceUrl}
                  placeholder="https://example.com/bookmarklet.js or a raw Gist URL"
                  disabled={sourceLocked}
                  onChange={event => this.setState({ sourceUrl: event.target.value })}
                />
                {sharedSource ? (
                  <p className="sharedNotice">
                    This source was shared with this page, so the URL was loaded automatically.
                  </p>
                ) : null}
              </div>
            ) : (
              <div className="field">
                <label htmlFor="source-code">JavaScript source</label>
                <textarea
                  id="source-code"
                  ref={element => {
                    this.sourceCodeInput = element
                  }}
                  value={sourceCode}
                  spellCheck="false"
                  onChange={event => this.setState({ sourceCode: event.target.value })}
                />
              </div>
            )}

            <div className="actions">
              <div className="segmented" aria-label="Bookmarklet action">
                <button
                  className={actionMode === 'generate' ? 'active' : ''}
                  type="button"
                  onClick={() => this.setActionMode('generate')}
                >
                  Generate
                </button>
                <button
                  className={actionMode === 'verify' ? 'active' : ''}
                  type="button"
                  onClick={() => this.setActionMode('verify')}
                >
                  Verify
                </button>
              </div>
              <button
                className="button"
                type="button"
                disabled={loading}
                onClick={actionMode === 'generate' ? this.generate : this.verify}
              >
                {actionMode === 'generate' ? 'Generate bookmarklet' : 'Verify source'}
              </button>
            </div>
          </div>

          <div className="panel">
            <div className="panelHeader">
              <h2>Bookmarklet</h2>
            </div>

            {generatedBookmarklet ? (
              <div className="bookmarkletRow">
                {editingBookmarkletName ? (
                  <input
                    className="bookmarkletNameInput"
                    aria-label="Bookmarklet name"
                    autoFocus
                    value={bookmarkletName}
                    onChange={event =>
                      this.setState({
                        bookmarkletName: event.target.value,
                        bookmarkletNameEdited: true,
                      })
                    }
                    onBlur={this.finishBookmarkletNameEdit}
                    onKeyDown={this.handleBookmarkletNameKeyDown}
                  />
                ) : (
                  <a
                    className="bookmarkletLink"
                    href={generatedBookmarklet}
                    title={bookmarkletName}
                    draggable="true"
                  >
                    {bookmarkletName}
                  </a>
                )}
                <button
                  className="editNameButton"
                  type="button"
                  aria-label="Edit bookmarklet name"
                  title="Edit bookmarklet name"
                  onClick={() =>
                    this.setState({ editingBookmarkletName: true, bookmarkletNameEdited: true })
                  }
                >
                  <span aria-hidden="true">✎</span>
                </button>
              </div>
            ) : null}

            <div
              className="dropZone"
              onDrop={this.handleDrop}
              onDragOver={event => event.preventDefault()}
            >
              <label htmlFor="bookmarklet">Paste or drop a bookmarklet</label>
              <textarea
                id="bookmarklet"
                value={bookmarklet}
                spellCheck="false"
                placeholder="javascript:(()=>{/*bm:v1;sha=...*/alert('hi')})()"
                onChange={event => this.setState({ bookmarklet: event.target.value })}
              />
            </div>

            <div className="actions bookmarkletActions">
              <button className="button" type="button" disabled={loading} onClick={this.inspect}>
                Inspect
              </button>
              <button
                className="button"
                type="button"
                disabled={loading || (!bookmarklet && !generatedBookmarklet && !sharedSource)}
                onClick={this.clearBookmarklet}
              >
                Clear
              </button>
              <button
                className="button"
                type="button"
                disabled={loading || !generatedBookmarklet || !sourceUrl}
                onClick={this.copyShareUrl}
              >
                Copy share URL
              </button>
            </div>

            {status ? <p className={`status ${statusType}`}>{status}</p> : null}

            {this.renderMetadata()}

            {inspection.metadataError ? (
              <p className="status error">{inspection.metadataError}</p>
            ) : null}
            {inspection.decodeError ? (
              <p className="status error">Decode warning: {inspection.decodeError}</p>
            ) : null}

            <details>
              <summary>Decoded JavaScript</summary>
              <textarea readOnly value={inspection.decoded || ''} spellCheck="false" />
            </details>
          </div>
        </section>

        <section className="docs">
          <div className="docBlock">
            <h3>Why verifiable bookmarklets</h3>
            <p>
              Bookmarklets are powerful: you can run JavaScript on almost any page by dragging a
              link to your bookmarks and clicking it. A verifiable bookmarklet keeps that workflow,
              while adding only a version, SHA-256 hash and optional source URL, so people can share
              one and prove that it came from the published source. Verification confirms the match,
              not the safety of the code.
            </p>
          </div>
          <div className="docBlock">
            <h3>Metadata</h3>
            <p>
              A verifiable bookmarklet is still a normal bookmarklet. It carries a small JavaScript
              comment immediately inside its wrapper, before the source runs:
            </p>
            <code>{'/*bm:v1;sha=<sha256>;src=<url>*/'}</code>
            <ul>
              <li>
                <code>bm:v1</code> identifies the format.
              </li>
              <li>
                <code>sha</code> identifies the exact generated payload.
              </li>
              <li>
                <code>src</code> optionally points to the published source.
              </li>
            </ul>
          </div>
          <div className="docBlock">
            <h3>How verification works</h3>
            <p>
              The generator normalizes the source, creates the bookmarklet payload and calculates
              its SHA-256 before inserting the metadata comment. The validator decodes the
              bookmarklet, rebuilds the payload and compares the hashes. It never executes the code.
            </p>
            <p>
              A match proves the source corresponds to the bookmarklet. It does not prove that the
              code is safe or trustworthy.
            </p>
          </div>
        </section>
      </PageStyled>
    )
  }
}

export default VerifiableBookmarkletsPage
