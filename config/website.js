const tailwind = require('../tailwind')

module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "/portfolio"

  siteTitle: 'Avi Nerenberg | Portfolio', // Navigation and Site Title
  siteTitleAlt: 'Avi', // Alternative Site title for SEO
  siteTitleShort: 'AviN', // short_name for manifest
  siteHeadline: 'Creating brilliant user experiences', // Headline for schema.org JSONLD
  siteUrl: 'https://avinerenberg.com', // Domain of your site. No trailing slash!
  siteLanguage: 'en', // Language Tag on <html> element
  siteLogo: '/logo.jpg', // Used for SEO and manifest
  siteDescription: "Avi Nerenberg's Portfolio",
  author: 'Avi Nerenberg', // Author for schema.org JSONLD

  // siteFBAppID: '123456789', // Facebook App ID - Optional
  userTwitter: '@avinerenberg', // Twitter Username
  ogSiteName: 'avinerenberg', // Facebook Site Name
  ogLanguage: 'en_US', // Facebook Language
  googleAnalyticsID: '',

  // Manifest and Progress color
  themeColor: tailwind.colors.orange,
  backgroundColor: tailwind.colors.blue,
}
