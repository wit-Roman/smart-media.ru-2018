module.exports = {
	poweredByHeader: false,
    exportPathMap: function () {
      return {
        '/': { page: '/' }
      }
    }
}
const withSass = require('@zeit/next-sass')
const withCSS = require('@zeit/next-css')
module.exports = withCSS(withSass())