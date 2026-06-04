/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://codingclub.nitp.ac.in',
  generateRobotsTxt: true,
  exclude: ['/api/*'],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/'],
      },
    ],
  },
};
