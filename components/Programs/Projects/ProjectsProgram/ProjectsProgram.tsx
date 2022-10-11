import styles from './ProjectsProgram.module.scss'
import { projectsData } from 'data/projects'
import Link from 'next/link'
import NextImage from 'next/future/image'

export interface IProjectCard {
  name: string
  projectTags?: string[]
  link: string
  description?: string
}

const ProjectCard = ({
  name,
  projectTags,
  link,
  description,
}: IProjectCard) => {
  const tags: JSX.Element[] = []
  projectTags?.forEach((tag) => {
    tags.push(<li className={styles.projectCard__list_item}>{tag}</li>)
  })

  return (
    <aside className={styles.projectCard__container}>
      <figure className={styles.projectCard}>
        <picture className={styles.projectCard__image}>
          <NextImage src="/gotg.jpg" alt="sample" fill placeholder="blur" />
        </picture>
        <figcaption className={styles.projectCard__name}>
          <Link href={link}>
            <a>{name}</a>
          </Link>
        </figcaption>
      </figure>
      <ul className={styles.projectCard__list}>{tags}</ul>
      <p className={styles.projectCard__description}>{description}</p>
    </aside>
  )
}

const ProjectsProgram = () => {
  return (
    <section className={styles.projectsProgram}>
      {projectsData.map((project, idx) => (
        <ProjectCard
          key={idx}
          name={project.name}
          projectTags={project.tags}
          link={project.link}
          description={project.description}
        />
      ))}
    </section>
  )
}

export default ProjectsProgram
