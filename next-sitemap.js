const siteUrl = "https://www.somasanaa.com";

module.exports = {
  siteUrl,
  generateRobotTxt: true,
  robotsTxtOptions: {
    policies: [{ userAgent: "*", allow: "/" }],
    additionalSiteMaps: [`${siteUrl}/server-sitemap.xml`],
  },
  exclude: [""],
};
