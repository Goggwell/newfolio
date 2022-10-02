import type { NextPage } from 'next'
import styles from '@/styles/Home.module.scss'
import FileGrid from '@/components/FileGrid/FileGrid'
import File from '@/components/File/File'
import Program from '@/components/Program/Program'
import Taskbar from '@/components/Taskbar/Taskbar'
import TaskbarItem from '@/components/TaskbarItem/TaskbarItem'
import Clock from '@/components/Clock/Clock'
import Head from 'next/head'

const files = {
  about: 'placeholder',
  work: 'placeholder',
  experience: 'placeholder',
  chat: 'placeholder',
  contact: 'placeholder',
}

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Samuel&apos;s Portfolio</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <main className={styles.main}>
        <FileGrid>
          {Object.keys(files).map((key) => {
            return <File key={key} name={key} />
          })}
        </FileGrid>
        <Taskbar>
          {Object.keys(files).map((key) => {
            return <TaskbarItem key={key} name={key} />
          })}
        </Taskbar>
        <Clock />
        <Program name="Test App">
          <h1>This is a test program that will be changed later.</h1>
        </Program>
      </main>
    </div>
  )
}

export default Home
