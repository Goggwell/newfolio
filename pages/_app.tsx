import '../styles/globals.scss'
import { httpBatchLink } from '@trpc/client/links/httpBatchLink'
import { loggerLink } from '@trpc/client/links/loggerLink'
import type { AppRouter } from '@/server/router'
import type { AppType } from 'next/app'
import type { Session } from 'next-auth'
import { ThemeProvider } from 'next-themes'
import { SessionProvider } from 'next-auth/react'
import { withTRPC } from '@trpc/next'
import superjson from 'superjson'

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
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
    </SessionProvider>
  )
}

const getBaseUrl = () => {
  if (typeof window !== 'undefined') return '' // browser should use relative url
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}` // SSR should use vercel url
  return `http://localhost:${process.env.PORT ?? 3000}` // dev SSR should use localhost
}

export default withTRPC<AppRouter>({
  config({ ctx }) {
    const url = `${getBaseUrl()}/api/trpc`

    return {
      links: [
        loggerLink({
          enabled: (opts) =>
            process.env.NODE_ENV === 'development' ||
            (opts.direction === 'down' && opts.result instanceof Error),
        }),
        httpBatchLink({ url }),
      ],
      url,
      transformer: superjson,
    }
  },
  ssr: false,
})(MyApp)
