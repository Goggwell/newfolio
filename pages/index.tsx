import type { NextPage } from 'next'
import styles from '@/styles/Home.module.scss'
import FileGrid from '@/components/FileGrid/FileGrid'
import File from '@/components/File/File'
import Program from '@/components/Program/Program'
import Taskbar from '@/components/Taskbar/Taskbar'
import TaskbarItem from '@/components/TaskbarItem/TaskbarItem'
import Clock from '@/components/Clock/Clock'
import Head from 'next/head'
import { useState } from 'react'

const Home: NextPage = () => {
  const [files, setFiles] = useState([
    {
      name: 'About',
      isTask: false,
      isOpen: false,
      isSelected: false,
    },
    {
      name: 'Experience',
      isTask: false,
      isOpen: false,
      isSelected: false,
    },
    {
      name: 'Blog',
      isTask: true,
      isOpen: false,
      isSelected: false,
    },
    {
      name: 'Chat',
      isTask: true,
      isOpen: false,
      isSelected: false,
    },
    {
      name: 'Contact',
      isTask: false,
      isOpen: false,
      isSelected: false,
    },
    {
      name: 'Themes',
      isTask: true,
      isOpen: false,
      isSelected: false,
    },
  ])

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
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
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
              <Program name={file.name} onClose={() => closeProgram(index)}>
                <h1>This is a test program that will be changed later.</h1>
              </Program>
            )
          )
        })}
      </main>
    </div>
  )
}

export default Home
