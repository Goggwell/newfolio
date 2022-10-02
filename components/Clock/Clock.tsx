import styles from './Clock.module.scss'
import React, { useEffect, useState } from 'react'

const Clock = () => {
  const [time, setTime] = useState('')

  useEffect(() => {
    setInterval(() => {
      const date = new Date()
      setTime(date.toLocaleTimeString())
    }, 1000)
  }, [])

  return (
    <aside className={styles.time__container}>
      <time className={styles.time}>{time}</time>
    </aside>
  )
}

export default Clock
