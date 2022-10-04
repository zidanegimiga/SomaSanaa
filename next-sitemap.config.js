const siteURL = "https://www.somasanaa.com";

module.exports = {
  siteURL,
  generateRobotTxt: true,
  robotsTxtOptions: {
    policies: [{ userAgent: "*", allow: "/" }],
    additionalSiteMaps: [`${siteURL}/server-sitemap.xml`],
  },
  exclude: [""],
};
