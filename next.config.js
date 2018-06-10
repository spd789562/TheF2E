// methods
const nib = require('nib')
// response library
const rupture = require('rupture')
const withStylus = require('@zeit/next-stylus')
const poststylus = require('poststylus')
const autoprefixer = require('autoprefixer')

module.exports = withStylus({
  stylusLoaderOptions: {
    use: [
      nib(),
      rupture(),
      poststylus([
        autoprefixer({
          browsers: ['ff >= 3.5', 'Chrome > 3.5', 'iOS < 7', 'ie < 9']
        }),
      ])
    ]
  }
})