const siteURL = "https://www.somasanaa.com";

module.exports = {
  siteUrl,
  generateRobotTxt: true,
  robotsTxtOptions: {
    policies: [{ userAgent: "*", allow: "/" }],
    additionalSiteMaps: [`${siteURL}/server-sitemap.xml`],
  },
  exclude: [""],
};
