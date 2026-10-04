/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || "https://sre2lab.org.tr",
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  exclude: ["/icon.png", "/apple-icon.png"],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
  },
};
