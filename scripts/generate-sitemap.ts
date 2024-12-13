import { writeFileSync } from 'fs'

async function generateSitemap() {
  const baseUrl = 'https://barware.io'
  
  // Define apps directly here instead of importing
  const apps = [
    { slug: 'catbar' },
    { slug: 'barmarks' },
    { slug: 'dogbar' },
    { slug: 'bartactoe' }
  ]
  
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${baseUrl}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>${baseUrl}/apps</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.8</priority>
  </url>
  ${apps.map((app) => `
  <url>
    <loc>${baseUrl}/apps/${app.slug}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>
  `).join('')}
</urlset>`

  writeFileSync('public/sitemap.xml', sitemap)
  console.log('Sitemap generated!')
}

generateSitemap() 