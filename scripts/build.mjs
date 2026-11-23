// index.json: what Émile reads to show these projects and to fetch one. Each
// project's files by path, size and SHA-256, its preview, its poster and its
// prompts (prompts/<id>.<language>.md, which emilefilm.com shows; they are not
// part of the project).
//
//   node scripts/build.mjs [--engine <Émile's engine folder>]   (default ../Emile/engine)
//
// Fails on a link, a file over 2 MB, a missing preview, words missing from
// projects.json and a project the engine refuses. The engine is asked in a
// home of its own (EMILE_HOME), so the person's library is left alone; the
// render tools and fonts this Mac has are used.

import { createHash } from 'node:crypto'
import { spawnSync } from 'node:child_process'
import fs from 'node:fs'
import os from 'node:os'
import path from 'node:path'
import { parseArgs } from 'node:util'

const ROOT = path.resolve(import.meta.dirname, '..')
const MAX_BYTES = 2 * 1024 * 1024
const PREVIEWS = ['preview.mp4', 'preview.jpg']
const LANGUAGES = ['en', 'zh']
const { values } = parseArgs({ options: { engine: { type: 'string', default: path.join(ROOT, '..', 'Emile', 'engine') } } })
const CLI = path.join(path.resolve(values.engine), 'emile', 'cli.mjs')

const faults = []
const entry = (dir, rel) => {
  const data = fs.readFileSync(path.join(dir, rel))
  if (data.length > MAX_BYTES) faults.push(`${path.relative(ROOT, path.join(dir, rel))} is over 2 MB`)
  return { path: rel, sha256: createHash('sha256').update(data).digest('hex'), bytes: data.length }
}
// Every file of a folder, by its path in it with forward slashes
function walk(dir, under = '') {
  return fs.readdirSync(path.join(dir, under), { withFileTypes: true }).sort((a, b) => (a.name < b.name ? -1 : 1)).flatMap(e => {
    const rel = under ? `${under}/${e.name}` : e.name
    if (e.name.startsWith('.')) return []
    if (e.isSymbolicLink()) { faults.push(`${path.relative(ROOT, path.join(dir, rel))} is a link`); return [] }
    return e.isDirectory() ? walk(dir, rel) : [rel]
  })
}

const home = fs.mkdtempSync(path.join(os.tmpdir(), 'emile-projects-'))
for (const n of ['bin', 'browsers', 'fonts']) {
  const from = path.join(os.homedir(), '.emile', n)
  if (fs.existsSync(from)) fs.symlinkSync(from, path.join(home, n))
}
function engine(...args) {
  const r = spawnSync(process.execPath, [CLI, ...args, '--json'], { encoding: 'utf8', env: { ...process.env, EMILE_HOME: home }, maxBuffer: 1 << 26 })
  const last = r.stdout.trim().split('\n').at(-1)
  try {
    return JSON.parse(last)
  } catch {
    return { type: 'error', message: r.stderr.trim() || last || r.error?.message || 'the engine said nothing' }
  }
}

const about = JSON.parse(fs.readFileSync(path.join(ROOT, 'projects.json'), 'utf8')).projects
const folders = fs.readdirSync(path.join(ROOT, 'projects'), { withFileTypes: true }).filter(e => e.isDirectory()).map(e => e.name)
for (const f of folders) if (!about.some(a => a.id === f)) faults.push(`projects/${f} has no words in projects.json`)

const projects = []
for (const a of about) {
  const dir = path.join(ROOT, 'projects', a.id)
  if (!fs.existsSync(path.join(dir, 'emile.json'))) { faults.push(`projects/${a.id} has no emile.json`); continue }
  for (const k of ['title', 'line', 'genre', 'kind', 'beats']) if (!a[k]) faults.push(`projects.json: ${a.id} has no ${k}`)
  const film = JSON.parse(fs.readFileSync(path.join(dir, 'emile.json'), 'utf8'))
  const check = engine('check', dir)
  if (check.type !== 'result' || !check.value.ok) faults.push(`projects/${a.id}: ${check.message ?? check.value.problems.map(p => p.message).join('; ')}`)
  else console.log(`${a.id}: checked`)
  const missing = PREVIEWS.filter(p => !fs.existsSync(path.join(dir, p)))
  if (missing.length) { faults.push(`projects/${a.id} has no ${missing.join(', ')}`); continue }
  const files = walk(dir).filter(p => !PREVIEWS.includes(p)).map(p => entry(dir, p))
  const vars = film.timeline.clips[0].vars ?? {}
  const prompts = {}
  for (const l of LANGUAGES) {
    const p = `prompts/${a.id}.${l}.md`
    if (!fs.existsSync(path.join(ROOT, p))) { faults.push(`${p} is missing`); continue }
    // Every variable of the clip is in the prompt, and nothing that isn't one
    const text = fs.readFileSync(path.join(ROOT, p), 'utf8'), said = new Set([...text.matchAll(/\{(\w+)\}/g)].map(m => m[1]))
    for (const k of Object.keys(vars)) if (!said.has(k)) faults.push(`${p} does not name {${k}}`)
    for (const k of said) if (!(k in vars) && k !== 'picture') faults.push(`${p} names {${k}}, which the clip has not`)
    if (said.has('picture') && !/^picture: ./m.test(text)) faults.push(`${p} names {picture} and does not say what it shows`)
    const { path: at, bytes, sha256 } = entry(ROOT, p)
    prompts[l] = { path: at, bytes, sha256 }
  }
  const last = Math.max(...film.timeline.clips.map(c => c.frames[1]))
  const shown = p => { const { sha256, bytes } = entry(dir, p); return { path: `projects/${a.id}/${p}`, bytes, sha256 } }
  projects.push({
    id: a.id, title: a.title, line: a.line, genre: a.genre, kind: a.kind,
    seconds: last * film.project.fps.den / film.project.fps.num, aspect: film.project.aspect,
    preview: shown('preview.mp4'), poster: shown('preview.jpg'), beats: a.beats, prompts, files
  })
}
fs.rmSync(home, { recursive: true, force: true })
if (faults.length) {
  console.error(faults.join('\n'))
  process.exit(1)
}
fs.writeFileSync(path.join(ROOT, 'index.json'), `${JSON.stringify({ version: 1, projects }, null, 2)}\n`)
console.log(`index.json: ${projects.length} projects, ${projects.reduce((n, p) => n + p.files.length, 0)} files`)
