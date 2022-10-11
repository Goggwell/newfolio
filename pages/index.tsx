import type { GetStaticProps, NextPage } from 'next'
import styles from '@/styles/Home.module.scss'
import FileGrid from '@/components/FileGrid/FileGrid'
import File from '@/components/File/File'
import Taskbar from '@/components/Taskbar/Taskbar'
import TaskbarItem from '@/components/TaskbarItem/TaskbarItem'
import { programsData } from 'data/programs'
import Head from 'next/head'
import { useState } from 'react'
import { compareDesc } from 'date-fns'
import { allPosts, Post } from 'contentlayer/generated'
import { useWindowSize } from '@/hooks/index'
import Program from '@/components/Program/Program'
import {
  AboutProgram,
  ContactProgram,
  ExperienceProgram,
  FeedProgram,
  JournalProgram,
  ProjectsProgram,
  ThemeProgram,
} from '@/components/Programs'
import { DynamicClock } from '@/components/dynamicExport'

export const getStaticProps: GetStaticProps = async () => {
  const posts: Post[] = allPosts.sort((a, b) => {
    return compareDesc(new Date(a.date), new Date(b.date))
  })

  return { props: { posts } }
}

const Home: NextPage = ({ posts }: { posts?: Post[] }) => {
  const [files, setFiles] = useState(programsData)
  const { width, height } = useWindowSize()

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
          content="minimum-scale=1.0, initial-scale=1.0, width=device-width, shrink-to-fit=no, viewport-fit=cover"
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
        {width > 768 && (
          <>
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
            <DynamicClock />
          </>
        )}
        {files.map((file, index) => {
          return (
            file.isOpen && (
              <Program
                name={file.name}
                maxWidth={file.maxWidth}
                onClose={() => closeProgram(index)}
              >
                {file.name === 'About' && <AboutProgram />}
                {file.name === 'Experience' && <ExperienceProgram />}
                {file.name === 'Contact' && <ContactProgram />}
                {file.name === 'Themes' && <ThemeProgram />}
                {file.name === 'Feed' && <FeedProgram />}
                {file.name === 'Journal' && <JournalProgram posts={posts} />}
                {file.name === 'Projects' && <ProjectsProgram />}
              </Program>
            )
          )
        })}
      </main>
    </div>
  )
}

export default Home
