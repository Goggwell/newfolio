import Draggable from 'react-draggable'
import clsx from 'clsx'
import styles from './Program.module.scss'
import { ReactNode, useState } from 'react'

export interface IProgram {
  name?: string
  children?: ReactNode | JSX.Element
}

const Program = ({ name, children }: IProgram) => {
  // key identifier for test purposes (since we can't read element pos)
  const [dragKey, setDragKey] = useState(false)

  const handleDrag = () => {
    setDragKey(true)
  }

  return (
    <Draggable
      defaultPosition={{ x: 0, y: 0 }}
      handle=".toolbar"
      onDrag={handleDrag}
    >
      <aside
        data-testid="program"
        className={clsx(styles.program, dragKey && `dragged`)}
      >
        <menu
          data-testid="toolbar"
          className={clsx(styles.program__toolbar, `toolbar`)}
        >
          <li className={styles.program__toolbar__icon}>_</li>
          <li className={styles.program__toolbar__title}>{name}</li>
          <li className={styles.program__toolbar__icon}>_</li>
        </menu>
        <dialog className={styles.program__content}>{children}</dialog>
      </aside>
    </Draggable>
  )
}

export default Program
