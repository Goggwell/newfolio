import styles from './ProjectsProgram.module.scss'
import { projectsData } from 'data/projects'

export interface IProjectCard {
  projectName?: string
  projectTags?: string[]
}

const ProjectCard = ({ projectName, projectTags }: IProjectCard) => {
  const tags: JSX.Element[] = []
  projectTags?.forEach((tag) => {
    tags.push(<li className={styles.projectCard__list_item}>{tag}</li>)
  })

  return (
    <figure className={styles.projectCard}>
      <figcaption>{projectName}</figcaption>
      <ul className={styles.projectCard__list}>{tags}</ul>
    </figure>
  )
}

const ProjectsProgram = () => {
  return (
    <section className={styles.projectsProgram}>
      {projectsData.map((project, idx) => (
        <ProjectCard
          key={idx}
          projectName={project.name}
          projectTags={project.tags}
        />
      ))}
    </section>
  )
}

export default ProjectsProgram
