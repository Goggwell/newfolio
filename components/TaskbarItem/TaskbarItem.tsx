import Image from 'next/image'
import styles from './TaskbarItem.module.scss'

export interface ITaskbarItem {
  name?: string
  image?: string
  alt?: string
}

const TaskbarItem = ({
  name = 'GotG',
  image = '/gotg.jpg',
  alt = 'My GotG screenshot',
}: ITaskbarItem) => {
  return (
    <li className={styles.taskbarItem}>
      <Image
        src={image}
        alt={alt}
        className={styles.taskbarItem__icon}
        width="40"
        height="40"
      />
      <span className={styles.taskbarItem__name}>{name}</span>
    </li>
  )
}

export default TaskbarItem
