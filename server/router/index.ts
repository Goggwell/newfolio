// src/server/router/index.ts
import superjson from 'superjson'
import { createRouter } from './context'
import { feedRouter } from './feed'

export const appRouter = createRouter()
  .transformer(superjson)
  .merge('feed.', feedRouter)

// export type definition of API
export type AppRouter = typeof appRouter
