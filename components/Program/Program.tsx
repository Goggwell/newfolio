import React, { MouseEventHandler, ReactNode, useState } from 'react'
import Draggable from 'react-draggable'
import clsx from 'clsx'
import styles from './Program.module.scss'
import MinimizeIcon from '../Icons/MinimizeIcon'
import CloseIcon from '../Icons/CloseIcon'

export interface IProgram {
  name?: string
  children?: ReactNode | JSX.Element
  onClose?: MouseEventHandler<HTMLLIElement>
}

const Program = ({ name, children, onClose }: IProgram) => {
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
    <Draggable handle=".toolbar" onDrag={handleDrag} bounds="parent">
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
            <MinimizeIcon />
          </li>
          <li className={styles.program__toolbar__title}>{name}</li>
          <li className={styles.program__toolbar__icon} onClick={onClose}>
            <CloseIcon />
          </li>
        </menu>
        <dialog className={styles.program__content}>{children}</dialog>
      </aside>
    </Draggable>
  )
}

export default Program
