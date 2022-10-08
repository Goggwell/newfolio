import { signIn, signOut, useSession } from 'next-auth/react'
import { useState, Suspense } from 'react'
import { trpc } from '@/utils/trpc'
import FeedItem from '../FeedItem/FeedItem'
import styles from './FeedProgram.module.scss'

const FeedProgram = () => {
  const { data: messages } = trpc.useQuery(['feed.getAll'])
  const { data: session, status } = useSession()
  const [message, setMessage] = useState('')
  const ctx = trpc.useContext()
  const postMessage = trpc.useMutation('feed.postMessage', {
    onMutate: () => {
      ctx.cancelQuery(['feed.getAll'])

      const optimisticUpdate = ctx.getQueryData(['feed.getAll'])
      if (optimisticUpdate) {
        ctx.setQueryData(['feed.getAll'], optimisticUpdate)
      }
    },
    onSettled: () => {
      ctx.invalidateQueries(['feed.getAll'])
    },
  })

  if (status === 'loading') return <section>Loading...</section>

  return (
    <section>
      <h3>Check the worldwide feed</h3>
      {session ? (
        <div>
          <p>hi {session.user?.name}</p>

          <button onClick={() => signOut({ redirect: false })}>Sign Out</button>

          <form
            onSubmit={(event) => {
              event.preventDefault()

              postMessage.mutate({
                name: session.user?.name as string,
                message,
              })

              setMessage('')
            }}
          >
            <input
              type="text"
              value={message}
              placeholder="Your message..."
              maxLength={100}
              onChange={(event) => setMessage(event.target.value)}
            />
            <button type="submit">Submit</button>
          </form>
        </div>
      ) : (
        <>
          <button onClick={() => signIn('discord')}>Login with Discord</button>
          <button onClick={() => signIn('github')}>Login with GitHub</button>
        </>
      )}
      <Suspense fallback={null}>
        {messages?.map((msg, index) => {
          return (
            <FeedItem
              key={index}
              name={msg.name}
              message={msg.message}
              createdAt={msg.createdAt}
            />
          )
        })}
      </Suspense>
    </section>
  )
}

export default FeedProgram
