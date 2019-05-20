const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-pages-index-js": hot(preferDefault(require("/home/erika/Documents/tests/gatsby-material-kit-react-master/src/pages/index.js"))),
  "component---src-pages-landing-page-jsx": hot(preferDefault(require("/home/erika/Documents/tests/gatsby-material-kit-react-master/src/pages/LandingPage.jsx"))),
  "component---src-pages-product-section-jsx": hot(preferDefault(require("/home/erika/Documents/tests/gatsby-material-kit-react-master/src/pages/ProductSection.jsx"))),
  "component---src-pages-skills-section-jsx": hot(preferDefault(require("/home/erika/Documents/tests/gatsby-material-kit-react-master/src/pages/SkillsSection.jsx"))),
  "component---src-pages-work-section-jsx": hot(preferDefault(require("/home/erika/Documents/tests/gatsby-material-kit-react-master/src/pages/WorkSection.jsx")))
}

