import type { NextPage } from 'next'
import styles from '@/styles/Home.module.scss'
import FileGrid from '@/components/FileGrid/FileGrid'
import File from '@/components/File/File'
import Program from '@/components/Program/Program'
import Taskbar from '@/components/Taskbar/Taskbar'
import TaskbarItem from '@/components/TaskbarItem/TaskbarItem'
import Clock from '@/components/Clock/Clock'
import ThemeProgram from '@/components/ThemeProgram/ThemeProgram'
import FeedProgram from '@/components/FeedProgram/FeedProgram'
import JournalProgram from '@/components/JournalProgram/JournalProgram'
import { programsData } from 'data/programs'
import Head from 'next/head'
import { useState } from 'react'
import { compareDesc } from 'date-fns'
import { allPosts, Post } from 'contentlayer/generated'

export async function getStaticProps() {
  const posts: Post[] = allPosts.sort((a, b) => {
    return compareDesc(new Date(a.date), new Date(b.date))
  })
  return { props: { posts } }
}

const Home: NextPage = ({ posts }: { posts?: Post[] }) => {
  const [files, setFiles] = useState(programsData)

  const openProgram = (value: number) => {
    const newFiles = [...files]
    newFiles[value].isOpen = true
    newFiles[value].isSelected = true

    setFiles(newFiles)
  }

  const closeProgram = (value: number) => {
    const newFiles = [...files]
    newFiles[value].isOpen = false
    newFiles[value].isSelected = false

    setFiles(newFiles)
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Samuel&apos;s Portfolio</title>
        <meta
          name="viewport"
          content="minimum-scale=1.0, initial-scale=1.0, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
        />
      </Head>
      <main className={styles.main}>
        <FileGrid>
          {files.map((file, index) => {
            return (
              !file.isTask && (
                <File
                  key={index}
                  name={file.name}
                  isSelected={file.isSelected}
                  onClick={() => openProgram(index)}
                />
              )
            )
          })}
        </FileGrid>
        <Taskbar>
          {files.map((file, index) => {
            return (
              file.isTask && (
                <TaskbarItem
                  key={index}
                  name={file.name}
                  onClick={() => openProgram(index)}
                />
              )
            )
          })}
        </Taskbar>
        <Clock />
        {files.map((file, index) => {
          return (
            file.isOpen && (
              <Program
                name={file.name}
                maxWidth={file.maxWidth}
                onClose={() => closeProgram(index)}
              >
                {file.name === 'Themes' && <ThemeProgram />}
                {file.name === 'Feed' && <FeedProgram />}
                {file.name === 'Journal' && <JournalProgram posts={posts} />}
              </Program>
            )
          )
        })}
      </main>
    </div>
  )
}

export default Home
