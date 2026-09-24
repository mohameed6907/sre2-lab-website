/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || "https://sre2-lab.vercel.app",
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  exclude: ["/icon.png", "/apple-icon.png"],
};
