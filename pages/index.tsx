import type { NextPage } from 'next'
import styles from '@/styles/Home.module.scss'
import FileGrid from '@/components/FileGrid/FileGrid'
import File from '@/components/File/File'
import Program from '@/components/Program/Program'
import Taskbar from '@/components/Taskbar/Taskbar'
import TaskbarItem from '@/components/TaskbarItem/TaskbarItem'
import Clock from '@/components/Clock/Clock'
import ThemeProgram from '@/components/ThemeProgram/ThemeProgram'
import { programsData } from 'data/programs'
import Head from 'next/head'
import { useState } from 'react'

const Home: NextPage = () => {
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
              </Program>
            )
          )
        })}
      </main>
    </div>
  )
}

export default Home
