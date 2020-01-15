const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-components-post-layout-js": hot(preferDefault(require("/Users/stefanosugbit/Desktop/newgatsbyblog/src/components/postLayout.js"))),
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/stefanosugbit/Desktop/newgatsbyblog/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/stefanosugbit/Desktop/newgatsbyblog/src/pages/404.js"))),
  "component---src-pages-about-js": hot(preferDefault(require("/Users/stefanosugbit/Desktop/newgatsbyblog/src/pages/about.js"))),
  "component---src-pages-company-team-js": hot(preferDefault(require("/Users/stefanosugbit/Desktop/newgatsbyblog/src/pages/company/team.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/stefanosugbit/Desktop/newgatsbyblog/src/pages/index.js"))),
  "component---src-pages-page-2-js": hot(preferDefault(require("/Users/stefanosugbit/Desktop/newgatsbyblog/src/pages/page-2.js")))
}

