import styles from './ExperienceProgram.module.scss'
import { jobsData } from 'data/jobs'
import Link from 'next/link'
import { Url } from 'url'

export interface IJobCard {
  companyName: string
  dates?: string
  title?: string
  link: string
  description?: string
}

const JobCard = ({
  companyName,
  dates,
  title,
  link,
  description,
}: IJobCard) => {
  return (
    <li className={styles.jobCard}>
      <Link href={link}>
        <a>{companyName}</a>
      </Link>
      <p className={styles.jobCard__dates}>{dates}</p>
      <p className={styles.jobCard__title}>{title}</p>
      <p>{description}</p>
    </li>
  )
}

const ExperienceProgram = () => {
  return (
    <section className={styles.experienceProgram}>
      <ul className={styles.experienceProgram__list}>
        {jobsData.map((job, idx) => (
          <JobCard
            key={idx}
            companyName={job.company}
            dates={job.dates}
            title={job.title}
            link={job.link}
            description={job.description}
          />
        ))}
      </ul>
    </section>
  )
}

export default ExperienceProgram
