import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider
      themes={[
        'dark',
        'coquelicot',
        'vice',
        'nostalgia',
        'forest',
        'lab',
        'zomp',
      ]}
    >
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
