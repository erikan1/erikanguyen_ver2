// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-pages-index-js": () => import("/home/erika/Documents/tests/gatsby-material-kit-react-master/src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */),
  "component---src-pages-landing-page-jsx": () => import("/home/erika/Documents/tests/gatsby-material-kit-react-master/src/pages/LandingPage.jsx" /* webpackChunkName: "component---src-pages-landing-page-jsx" */),
  "component---src-pages-product-section-jsx": () => import("/home/erika/Documents/tests/gatsby-material-kit-react-master/src/pages/ProductSection.jsx" /* webpackChunkName: "component---src-pages-product-section-jsx" */),
  "component---src-pages-skills-section-jsx": () => import("/home/erika/Documents/tests/gatsby-material-kit-react-master/src/pages/SkillsSection.jsx" /* webpackChunkName: "component---src-pages-skills-section-jsx" */),
  "component---src-pages-work-section-jsx": () => import("/home/erika/Documents/tests/gatsby-material-kit-react-master/src/pages/WorkSection.jsx" /* webpackChunkName: "component---src-pages-work-section-jsx" */)
}

exports.data = () => import(/* webpackChunkName: "pages-manifest" */ "/home/erika/Documents/tests/gatsby-material-kit-react-master/.cache/data.json")

