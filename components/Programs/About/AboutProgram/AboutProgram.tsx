import styles from './AboutProgram.module.scss'
import NextImage from 'next/future/image'
import clsx from 'clsx'

const AboutProgram = () => {
  return (
    <section className={styles.aboutProgram}>
      <picture className={styles.aboutProgram__image}>
        <NextImage
          src="/avatar.png"
          alt="Samuel Yusuf"
          width={256}
          height={256}
          placeholder="blur"
          blurDataURL="/avatar_small.png"
        />
      </picture>
      <ul className={styles.aboutProgram__list}>
        <li className={clsx(styles.aboutProgram__list_item, styles.main)}>
          <h3>
            My name is Samuel Yusuf, and I&apos;m a software engineer for the
            web.
          </h3>
        </li>
        <li className={styles.aboutProgram__list_item}>
          <p>
            I am self-taught, and specialize in frontend technologies. I
            primarily use React with TypeScript, and style with SCSS modules. I
            am also currently obsessed with NextJS and implementing backend
            technologies like tRPC and Prisma!
          </p>
        </li>
        <li className={styles.aboutProgram__list_item}>
          <p>
            I currently reside in Indonesia, where I work as a frontend
            developer in charge of maintaining the frontend logic of all apps
            and using best practices to create performant and reliable web-based
            solutions.
          </p>
        </li>
        <li className={styles.aboutProgram__list_item}>
          <p>
            In my spare time, I also enjoy gaming and working on side projects!
            My favorite game is currently a draw between Disco Elysium and Elden
            Ring.
          </p>
        </li>
      </ul>
    </section>
  )
}

export default AboutProgram
