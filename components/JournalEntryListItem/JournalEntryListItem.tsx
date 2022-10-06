import { format, parseISO } from 'date-fns'
import { Post } from 'contentlayer/generated'
import styles from './JournalEntryListItem.module.scss'
import React from 'react'

const JournalEntryListItem = (post: Post) => {
  return (
    <li>
      <time dateTime={post.date}>
        {format(parseISO(post.date), 'LLLL d, yyyy')}
      </time>
      <span>{post.title}</span>
    </li>
  )
}

export default JournalEntryListItem
