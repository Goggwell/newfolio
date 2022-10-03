import styles from './Clock.module.scss'
import React, { useEffect, useState } from 'react'

const Clock = () => {
  const [time, setTime] = useState('')

  useEffect(() => {
    // initDate so that clock renders instantly instead of waiting 1 second to render
    const initDate = new Date()
    setTime(initDate.toLocaleTimeString())
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
