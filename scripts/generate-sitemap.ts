// scripts/generate-sitemap.ts
// Generates sitemap.xml for all static and dynamic routes
import { writeFileSync } from 'fs'
import path from 'path'
import { createRequire } from 'module'

const require = createRequire(import.meta.url)

// Only extract slugs from the apps data file, avoiding image imports
const appsPath = path.resolve(process.cwd(), 'data/apps.ts')
let appSlugs: string[] = []

try {
  // Read the file as text and extract slugs with regex (Node can't import TS with images)
  const file = require('fs').readFileSync(appsPath, 'utf-8')
  const slugMatches = [...file.matchAll(/slug:\s*['"]([a-zA-Z0-9_-]+)['"]/g)]
  appSlugs = slugMatches.map(m => m[1])
} catch (e) {
  console.error('Failed to extract app slugs:', e)
  process.exit(1)
}

const baseUrl = 'https://barware.io'
const now = new Date().toISOString()

const staticRoutes = [
  '/',
  '/about',
  '/contact',
  '/privacy',
  '/terms',
  '/apps',
]

function urlEntry(path: string, priority = 0.7, changefreq = 'weekly') {
  return `  <url>\n    <loc>${baseUrl}${path}</loc>\n    <lastmod>${now}</lastmod>\n    <changefreq>${changefreq}</changefreq>\n    <priority>${priority}</priority>\n  </url>`
}

async function generateSitemap() {
  const entries: string[] = []

  // Static pages
  entries.push(...staticRoutes.map((route, i) =>
    urlEntry(route, route === '/' ? 1.0 : 0.8, route === '/' ? 'daily' : 'weekly')
  ))

  // App pages
  for (const slug of appSlugs) {
    entries.push(urlEntry(`/apps/${slug}`))
    entries.push(urlEntry(`/apps/${slug}/privacy`, 0.6, 'monthly'))
  }

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${entries.join('\n')}\n</urlset>`

  writeFileSync('public/sitemap.xml', sitemap)
  console.log('Sitemap generated!')
}

generateSitemap() 