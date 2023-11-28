import NextImage from 'next/image'
import styles from './JournalElements.module.scss'

const Image: React.FC<{ src: string; alt: string }> = (props) => {
  return (
    <figure className={styles.journalImage__container}>
      <NextImage
        {...props}
        fill
        className={styles.journalImage}
        placeholder="blur"
      />
      <figcaption>{props.alt}</figcaption>
    </figure>
  )
}

const JournalElements = {
  img: Image,
}

export default JournalElements
