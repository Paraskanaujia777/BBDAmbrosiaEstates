module.exports = {
  siteUrl: "https://bbdvillas.in", // change this
  generateRobotsTxt: true, // this will create robots.txt also
  sitemapSize: 7000,

  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
  },
  additionalPaths: async (config) => [
    await config.transform(config, "/terms"),
    await config.transform(config, "/privacy"),
    await config.transform(config, "/cookies"),
  ],
};
