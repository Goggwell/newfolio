import clsx from 'clsx'
import React, { useState } from 'react'
import Image from 'next/image'
import styles from './File.module.scss'

export interface IFile {
  name?: string
  image?: string
}

/**
 * File component
 * @function File
 * @param {MouseEventHandler<HTMLButtonElement>?} onClick - handler for button click events
 * @param {string?} name - name of file
 * @param {string?} image - image URL of file
 * @returns {JSX.Element} - Rendered component
 */
const File = ({ name = 'GotG', image = '/gotg.jpg' }: IFile) => {
  const [selected, setSelected] = useState(false)

  // change selected state of File component based on mouse clicks (single or double click)
  const addSelectedState = () => {
    setSelected(true)
  }
  const removeSelectedState = () => {
    setSelected(false)
  }

  return (
    <figure
      data-testid="file"
      // adding extra class here just to satisfy the unit test (since original className will be obfuscated)
      className={clsx(styles.file, selected && `${styles.selected} selected`)}
      onClick={addSelectedState}
      onDoubleClick={removeSelectedState}
    >
      <Image
        src={image}
        alt="My GotG screenshot"
        className={styles.file__icon}
        width="70"
        height="70"
      />
      <figcaption className={styles.file__name}>{name}</figcaption>
    </figure>
  )
}

export default File
