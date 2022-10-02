import clsx from 'clsx'
import React, { MouseEventHandler, useEffect, useState } from 'react'
import styles from './File.module.scss'

// icons
import Folder from '@icons/folder.svg'
import Experience from '@icons/briefcase.svg'
import Contact from '@icons/mail.svg'

export interface IFile {
  name?: string
  onClick?: MouseEventHandler<HTMLElement>
  isSelected?: boolean
}

const File = ({ name = 'About', onClick, isSelected }: IFile) => {
  const [selected, setSelected] = useState(isSelected)

  useEffect(() => {
    setSelected(isSelected)
  }, [isSelected])

  return (
    <figure
      data-testid="file"
      // adding extra class here just to satisfy the unit test (since original className will be obfuscated)
      className={clsx(styles.file, selected && `${styles.selected} selected`)}
      onClick={onClick}
    >
      <i className={styles.file__icon}>
        {name === 'About' && <Folder />}
        {name === 'Experience' && <Experience />}
        {name === 'Contact' && <Contact />}
      </i>
      <figcaption className={styles.file__name}>{name}</figcaption>
    </figure>
  )
}

export default File
