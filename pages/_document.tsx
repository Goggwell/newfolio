import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <title>Samuel&apos;s Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300;600&display=swap"
          rel="stylesheet"
        />
        <meta name="title" property="og:title" content="Samuel's Portfolio" />
        <meta name="type" property="og:type" content="website" />
        <meta name="image" property="og:image" content="/gotg.jpg" />
        <meta
          name="description"
          property="og:description"
          content="The latest portfolio of Samuel, a Software Engineer that primarily builds with TypeScript and React"
        />
        <meta
          name="url"
          property="og:url"
          content="https://www.samlovescode.dev"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
