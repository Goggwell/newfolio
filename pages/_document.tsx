import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en" dir="ltr">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300;600&display=swap"
          rel="stylesheet"
        />
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/icons/icon-192x192.png" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="application-name" content="Samuel's Portfolio" />
        <meta name="title" property="og:title" content="Samuel's Portfolio" />
        <meta name="type" property="og:type" content="website" />
        <meta
          name="site_name"
          property="og:site_name"
          content="Samuel's Portfolio"
        />
        <meta name="author" property="og:author" content="Samuel Yusuf" />
        <meta
          name="image"
          property="og:image"
          content="https://www.samlikescode.dev/screenshot.png"
        />
        <meta
          name="description"
          property="og:description"
          content="The latest portfolio of Samuel, a Software Engineer that primarily builds with TypeScript and React. It is styled in reference to desktop operating systems, and similarly functions as such. Open and drag around as many programs as you wish!"
        />
        <meta
          name="url"
          property="og:url"
          content="https://www.samlikescode.dev"
        />
        <meta
          name="publish_date"
          property="og:publish_date"
          content="2022-10-11T00:00:00-0600"
        />
        <meta name="theme-color" content="#da4167" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
