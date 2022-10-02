import styles from './TaskbarItem.module.scss'

// icons
import BlogIcon from '../Icons/BlogIcon'
import ChatIcon from '../Icons/ChatIcon'
import SlidersIcon from '../Icons/SlidersIcon'
import { MouseEventHandler } from 'react'

export interface ITaskbarItem {
  name?: string
  onClick?: MouseEventHandler<HTMLLIElement>
}

const TaskbarItem = ({ name = 'Blog', onClick }: ITaskbarItem) => {
  return (
    <li className={styles.taskbarItem} onClick={onClick}>
      <i className={styles.taskbarItem__icon}>
        {name === 'Blog' && <BlogIcon />}
        {name === 'Chat' && <ChatIcon />}
        {name === 'Themes' && <SlidersIcon />}
      </i>
      <span className={styles.taskbarItem__name}>{name}</span>
    </li>
  )
}

export default TaskbarItem
