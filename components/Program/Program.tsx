import Draggable from 'react-draggable'
import clsx from 'clsx'
import styles from './Program.module.scss'
import { ReactNode, useState } from 'react'
import Minimize from '@icons/minimize-2.svg'
import Close from '@icons/x.svg'

export interface IProgram {
  name?: string
  children?: ReactNode | JSX.Element
}

const Program = ({ name, children }: IProgram) => {
  // key identifier for test purposes (since we can't read element pos)
  const [dragKey, setDragKey] = useState(false)
  const [minimized, setMinimized] = useState(false)

  const handleDrag = () => {
    setDragKey(true)
  }

  const handleMinimize = () => {
    setMinimized(!minimized)
  }

  return (
    <Draggable
      defaultPosition={{ x: 0, y: 0 }}
      handle=".toolbar"
      onDrag={handleDrag}
      bounds="parent"
    >
      <aside
        data-testid="program"
        className={clsx(
          styles.program,
          dragKey && `dragged`,
          minimized && `${styles.minimized} minimized`
        )}
      >
        <menu
          data-testid="toolbar"
          className={clsx(styles.program__toolbar, `toolbar`)}
        >
          <li
            className={styles.program__toolbar__icon}
            onClick={handleMinimize}
          >
            <Minimize />
          </li>
          <li className={styles.program__toolbar__title}>{name}</li>
          <li className={styles.program__toolbar__icon}>
            <Close />
          </li>
        </menu>
        <dialog className={styles.program__content}>{children}</dialog>
      </aside>
    </Draggable>
  )
}

export default Program
