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
    <section className={styles.feedProgram}>
      {session ? (
        <>
          <aside className={styles.feedProgram__user_container}>
            <h3 className={styles.feedProgram__title}>WORLDWIDE FEED</h3>
            <p>
              Thanks for signing in <br />
              <b>{session.user?.name}</b>
            </p>

            <button onClick={() => signOut({ redirect: false })}>
              Sign Out
            </button>
          </aside>
          <aside className={styles.feedProgram__feed_container}>
            <ul className={styles.feedProgram__feed}>
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
            </ul>
            <form
              className={styles.feedProgram__feed_form}
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
          </aside>
        </>
      ) : (
        <>
          <aside className={styles.feedProgram__user_container}>
            <h3 className={styles.feedProgram__title}>WORLDWIDE FEED</h3>
            <p>Sign in to share your thoughts with the feed of the world!</p>

            <button onClick={() => signIn('github')}>Login with GitHub</button>
          </aside>
          <aside className={styles.feedProgram__feed_container}>
            <ul className={styles.feedProgram__feed}>
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
            </ul>
            <form className={styles.feedProgram__feed_form}>
              <input
                type="text"
                value={message}
                placeholder="Sign in to post..."
                maxLength={100}
                onChange={(event) => setMessage(event.target.value)}
                disabled
              />
              <button type="submit" disabled>
                Submit
              </button>
            </form>
          </aside>
        </>
      )}
    </section>
  )
}

export default FeedProgram
