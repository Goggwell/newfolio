import styles from './TaskbarItem.module.scss'

// icons
import Blog from '@icons/edit.svg'
import Chat from '@icons/message-square.svg'
import Sliders from '@icons/sliders.svg'
import { MouseEventHandler } from 'react'

export interface ITaskbarItem {
  name?: string
  onClick?: MouseEventHandler<HTMLLIElement>
}

const TaskbarItem = ({ name = 'Blog', onClick }: ITaskbarItem) => {
  return (
    <li className={styles.taskbarItem} onClick={onClick}>
      <i className={styles.taskbarItem__icon}>
        {name === 'Blog' && <Blog />}
        {name === 'Chat' && <Chat />}
        {name === 'Themes' && <Sliders />}
      </i>
      <span className={styles.taskbarItem__name}>{name}</span>
    </li>
  )
}

export default TaskbarItem
