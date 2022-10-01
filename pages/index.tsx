import type { NextPage } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import styles from '@/styles/Home.module.scss'
import useTranslation from 'next-translate/useTranslation'
import Button from '@/components/Button/Button'
import { useState } from 'react'

const Home: NextPage = () => {
  const { t } = useTranslation('home')
  const description = t('description')
  const linkName = t('more-examples')

  const [btnTitle, setBtnTitle] = useState('This is a title')
  const changeBtnTitle = () => {
    setBtnTitle('This is a different title')
  }

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <nav>
          <Link href="/about">
            <a>About</a>
          </Link>
        </nav>

        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <h2>{description}</h2>
        <p>{linkName}</p>

        <Button title={btnTitle} onClick={changeBtnTitle} />

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.tsx</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

export default Home
