import { Post } from 'contentlayer/generated'
import styles from './JournalProgram.module.scss'
import React, { useState } from 'react'
import { useMDXComponent } from '@/utils/useMDXComponent'
import JournalEntryListItem from '../JournalEntryListItem/JournalEntryListItem'
import JournalElements from '../JournalElements/JournalElements'
import { samplePost } from 'data/samplePost'

const JournalProgram = ({ posts }: { posts?: Post[] }) => {
  const [entryID, setEntryID] = useState('')
  // samplePost required since useMDXComponent hook cannot take undefined
  const singlePost = posts?.find((post) => post._id === entryID) || samplePost

  const MDXContent = useMDXComponent(singlePost.body.code)

  const handleClick = (id: string) => {
    setEntryID(id)
  }

  return (
    <section className={styles.journalProgram}>
      <ul className={styles.journalProgram__list}>
        {posts && (
          <>
            {posts.map((post) => (
              <li
                key={post._id}
                onClick={() => handleClick(post._id)}
                className={styles.journalProgram__list_item}
              >
                <JournalEntryListItem {...post} />
              </li>
            ))}
          </>
        )}
      </ul>
      <article className={styles.journalProgram__entry}>
        {singlePost && <MDXContent components={JournalElements} />}
      </article>
    </section>
  )
}

export default JournalProgram
