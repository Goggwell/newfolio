import styles from './ProjectsProgram.module.scss'
import { projectsData } from 'data/projects'
import Link from 'next/link'
import Image from 'next/image'
import useSWR from 'swr'

export interface IProjectCard {
  name: string
  projectTags?: string[]
  link: string
  description?: string
  image: string
}

const ProjectCard = ({
  name,
  projectTags,
  link,
  description,
  image,
}: IProjectCard) => {
  const tags: JSX.Element[] = []
  projectTags?.forEach((tag) => {
    tags.push(<li className={styles.projectCard__list_item}>{tag}</li>)
  })

  const baseUrl =
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:3000'
      : process.env.NEXT_PUBLIC_VERCEL_URL

  const fetcher = (...args) => fetch(...args).then((res) => res.json())
  const { data, error } = useSWR(
    `/api/blur/${encodeURIComponent(baseUrl + '/' + image).toString()}`,
    fetcher
  )

  if (!data) return <div>Loading...</div>

  return (
    <aside className={styles.projectCard__container}>
      <figure className={styles.projectCard}>
        <picture className={styles.projectCard__image}>
          <Image
            src={'/' + image}
            alt="sample"
            fill
            placeholder="blur"
            blurDataURL={data.blurDataURL}
            objectFit="cover"
            objectPosition="center"
          />
        </picture>
        <figcaption className={styles.projectCard__name}>
          <Link href={link}>{name}</Link>
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
          image={project.image}
        />
      ))}
    </section>
  )
}

export default ProjectsProgram
