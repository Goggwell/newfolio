import NextAuth, { type NextAuthOptions, User as NextAuthUser } from 'next-auth'
import GithubProvider from 'next-auth/providers/github'

// Prisma adapter for NextAuth, optional and can be removed
import { PrismaAdapter } from '@next-auth/prisma-adapter'
import { prisma } from '@/server/db/client'
import { env } from '@/env/server.mjs'

interface NextAuthUserWithStringId extends NextAuthUser {
  id: string
}

export const authOptions: NextAuthOptions = {
  // Include user.id on session
  callbacks: {
    session({ session, user }) {
      if (session.user) {
        session.user.id = user.id
      }
      return session
    },
  },
  // Configure one or more authentication providers
  adapter: PrismaAdapter(prisma),
  providers: [
    GithubProvider({
      clientId: env.GITHUB_CLIENT_ID,
      clientSecret: env.GITHUB_CLIENT_SECRET,
      profile(profile) {
        return {
          id: profile.id.toString(),
          name: profile.name || profile.login,
          email: profile.email,
          image: profile.avatar_url,
        } as NextAuthUserWithStringId
      },
    }),
    // ...add more providers here
  ],
}

export default NextAuth(authOptions)
