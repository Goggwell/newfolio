import React, { MouseEventHandler, ReactNode, useState, useRef } from 'react'
import Draggable from 'react-draggable'
import clsx from 'clsx'
import styles from './Program.module.scss'
import MinimizeIcon from '../Icons/MinimizeIcon'
import CloseIcon from '../Icons/CloseIcon'

export interface IProgram {
  name?: string
  children?: ReactNode | JSX.Element
  onClose?: MouseEventHandler<HTMLLIElement>
  maxWidth?: number
}

const Program = ({ name, children, onClose, maxWidth = 900 }: IProgram) => {
  // key identifier for test purposes (since we can't read element pos)
  const [dragKey, setDragKey] = useState(false)
  const [minimized, setMinimized] = useState(false)
  const programRef = useRef<HTMLElement>(null)

  const handleDrag = () => {
    setDragKey(true)
  }

  const handleMinimize = () => {
    setMinimized(!minimized)
  }

  const handleMouseDown = () => {
    const programs = document.querySelectorAll<HTMLElement>('.react-draggable')
    if (programRef.current) {
      programs.forEach((program) => {
        program.style.zIndex = '0'
      })
      programRef.current.style.zIndex = '1'
    }
  }

  return (
    <Draggable
      handle=".toolbar"
      onDrag={handleDrag}
      onMouseDown={handleMouseDown}
      bounds="parent"
    >
      <aside
        data-testid="program"
        ref={programRef}
        className={clsx(
          styles.program,
          dragKey && `dragged`,
          minimized && `${styles.minimized} minimized`
        )}
        style={{
          maxWidth: `${maxWidth}px`,
        }}
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
