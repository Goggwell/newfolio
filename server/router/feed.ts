import { TRPCError } from '@trpc/server'
import { z } from 'zod'
import { createRouter } from './context'

export const feedRouter = createRouter()
  .query('getAll', {
    async resolve({ ctx }) {
      try {
        return await ctx.prisma.feed.findMany({
          select: {
            name: true,
            message: true,
            createdAt: true,
          },
          orderBy: {
            createdAt: 'desc',
          },
        })
      } catch (error) {
        console.log('error', error)
      }
    },
  })
  .middleware(async ({ ctx, next }) => {
    // Any queries or mutations after this middleware will
    // raise an error unless there is a current session
    if (!ctx.session) {
      throw new TRPCError({ code: 'UNAUTHORIZED' })
    }
    return next()
  })
  .mutation('postMessage', {
    input: z.object({
      name: z.string(),
      message: z.string(),
    }),
    async resolve({ ctx, input }) {
      try {
        await ctx.prisma.feed.create({
          data: {
            name: input.name,
            message: input.message,
          },
        })
      } catch (error) {
        console.log(error)
      }
    },
  })
