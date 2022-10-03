// offline page for PWA
import Head from 'next/head'

const Fallback = () => (
  <>
    <Head>
      <title>offline PWA</title>
    </Head>
    <h1>Howdy, you are currently offline!</h1>
  </>
)

export default Fallback
