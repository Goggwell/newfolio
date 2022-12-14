import styles from './TaskbarItem.module.scss'

// icons
import JournalIcon from '../Icons/JournalIcon'
import ChatIcon from '../Icons/ChatIcon'
import SlidersIcon from '../Icons/SlidersIcon'
import FeedIcon from '../Icons/FeedIcon'
import { MouseEventHandler } from 'react'

export interface ITaskbarItem {
  name?: string
  onClick?: MouseEventHandler<HTMLLIElement>
}

const TaskbarItem = ({ name = 'Journal', onClick }: ITaskbarItem) => {
  return (
    <li className={styles.taskbarItem} onClick={onClick}>
      <i className={styles.taskbarItem__icon}>
        {name === 'Journal' && <JournalIcon />}
        {name === 'Chat' && <ChatIcon />}
        {name === 'Themes' && <SlidersIcon />}
        {name === 'Feed' && <FeedIcon />}
      </i>
      <span className={styles.taskbarItem__name}>{name}</span>
    </li>
  )
}

export default TaskbarItem
