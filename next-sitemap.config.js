const siteURL = "https://www.somasanaa.com";

module.exports = {
  siteURl,
  generateRobotTxt: true,
  robotsTxtOptions: {
    policies: [{ userAgent: "*", allow: "/" }],
    additionalSiteMaps: [`${siteURL}/server-sitemap.xml`],
  },
  exclude: [""],
};
