const path = require('path');
const fs = require('fs');
const { execSync } = require('child_process');
const XLSX = require('xlsx');

// Cached news dates from public/data/info.xlsx
let newsDateMap = null;
function getNewsDateMap() {
  if (newsDateMap) return newsDateMap;
  newsDateMap = new Map();
  try {
    const file = path.join(__dirname, 'public', 'data', 'info.xlsx');
    if (fs.existsSync(file)) {
      const wb = XLSX.readFile(file);
      if (wb.SheetNames.includes('news')) {
        const rows = XLSX.utils.sheet_to_json(wb.Sheets['news']);
        for (const row of rows) {
          if (row.slug && row.date) {
            newsDateMap.set(row.slug, new Date(row.date).toISOString());
          }
        }
      }
    }
  } catch (err) {
    console.warn('Error reading news dates for sitemap:', err);
  }
  return newsDateMap;
}

// Route priority and changefreq rules
const ROUTE_CONFIG = {
  '/': { priority: 1.0, changefreq: 'weekly' },
  '/research': { priority: 0.9, changefreq: 'monthly' },
  '/pi': { priority: 0.9, changefreq: 'monthly' },
  '/publications': { priority: 0.9, changefreq: 'monthly' },
  '/team': { priority: 0.8, changefreq: 'monthly' },
  '/facilities': { priority: 0.8, changefreq: 'monthly' },
  '/news': { priority: 0.8, changefreq: 'weekly' },
  '/publications/journals': { priority: 0.8, changefreq: 'monthly' },
  '/publications/conferences': { priority: 0.8, changefreq: 'monthly' },
  '/publications/patents': { priority: 0.8, changefreq: 'monthly' },
  '/publications/books': { priority: 0.8, changefreq: 'monthly' },
  '/collaborators': { priority: 0.7, changefreq: 'monthly' },
  '/blog': { priority: 0.7, changefreq: 'weekly' },
  '/join': { priority: 0.7, changefreq: 'monthly' },
  '/gallery': { priority: 0.6, changefreq: 'monthly' },
};

// Helper to determine meaningful lastmod
function getPageLastmod(urlPath) {
  // 1. If it's a news article, use the verified publication date
  if (urlPath.startsWith('/news/')) {
    const slug = urlPath.replace(/^\/news\//, '').replace(/\/$/, '');
    const map = getNewsDateMap();
    if (map.has(slug)) {
      return map.get(slug);
    }
  }

  // 2. For static pages, determine modification date from git commit or file mtime
  let relFile = 'src/app' + urlPath + '/page.tsx';
  if (urlPath === '/') {
    relFile = 'src/app/page.tsx';
  }
  const filePath = path.join(__dirname, relFile);

  if (fs.existsSync(filePath)) {
    try {
      const gitDate = execSync(`git log -1 --format=%cI -- "${relFile}"`, {
        cwd: __dirname,
        encoding: 'utf8',
        stdio: ['pipe', 'pipe', 'ignore'],
      }).trim();
      if (gitDate) {
        return new Date(gitDate).toISOString();
      }
    } catch {
      // Fallback to file mtime if git is not available (e.g. shallow build)
    }
    try {
      return fs.statSync(filePath).mtime.toISOString();
    } catch {
      // ignore
    }
  }

  return undefined;
}

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://sre2lab.org.tr",
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  exclude: ["/icon.png", "/apple-icon.png", "/icon", "/apple-icon"],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
  },
  transform: async (config, urlPath) => {
    // Determine priority and changefreq based on route hierarchy
    let priority = 0.7;
    let changefreq = 'monthly';

    if (ROUTE_CONFIG[urlPath]) {
      priority = ROUTE_CONFIG[urlPath].priority;
      changefreq = ROUTE_CONFIG[urlPath].changefreq;
    } else if (urlPath.startsWith('/news/')) {
      priority = 0.7;
      changefreq = 'monthly';
    }

    // Determine meaningful lastmod
    const lastmod = getPageLastmod(urlPath);

    return {
      loc: urlPath,
      changefreq,
      priority,
      lastmod,
    };
  },
};
