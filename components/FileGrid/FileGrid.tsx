import { ReactNode } from 'react'
import styles from './FileGrid.module.scss'

export interface IFileGrid {
  children?: ReactNode | JSX.Element
}

const FileGrid = ({ children }: IFileGrid) => {
  return <section className={styles.fileGrid}>{children}</section>
}

export default FileGrid
