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
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    })

    return config
  },
})
