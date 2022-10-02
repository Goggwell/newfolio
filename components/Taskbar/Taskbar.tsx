import { ReactNode } from 'react'
import styles from './Taskbar.module.scss'

export interface ITaskbar {
  children?: ReactNode | JSX.Element
}

const Taskbar = ({ children }: ITaskbar) => {
  return (
    <nav className={styles.taskbar}>
      <ul className={styles.taskbar__list}>{children}</ul>
    </nav>
  )
}

export default Taskbar
