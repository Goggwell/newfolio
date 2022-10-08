import styles from './ContactProgram.module.scss'
import { contactData } from 'data/contacts'
import Link from 'next/link'

const ContactProgram = () => {
  return (
    <section className={styles.contactProgram}>
      <h3>Contact Me</h3>
      <ul>
        {contactData.map((contact, idx) => (
          <li key={idx}>
            <Link href={contact.link}>
              <a>{contact.name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default ContactProgram
