/** @type {import('next').NextConfig} */
const nextTranslate = require('next-translate')
const path = require('path')

module.exports = nextTranslate({
  reactStrictMode: true,
  swcMinify: true,
  sassOptions: {
    includePaths: [path.join(__dirname), 'styles'],
    prependData: `@import "variables.module.scss";`,
  },
})
