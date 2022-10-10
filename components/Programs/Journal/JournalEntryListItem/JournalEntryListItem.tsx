import { format, parseISO } from 'date-fns'
import { Post } from 'contentlayer/generated'
import styles from './JournalEntryListItem.module.scss'
import React from 'react'

const JournalEntryListItem = (post: Post) => {
  return (
    <li className={styles.journalItem}>
      <h3>{post.title}</h3>
      <time dateTime={post.date}>
        {format(parseISO(post.date), 'LLLL d, yyyy')}
      </time>
    </li>
  )
}

export default JournalEntryListItem
