const path = require('path')
const withPlugins = require('next-compose-plugins')
const { withContentlayer } = require('next-contentlayer')
const withPwa = require('next-pwa')({
  dest: 'public',
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === 'development',
})
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['cdn.discordapp.com'],
  },
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
}

module.exports = withPlugins(
  [[withBundleAnalyzer], [withContentlayer], [withPwa]],
  nextConfig
)
