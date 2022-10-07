import { Post } from 'contentlayer/generated'
import styles from './JournalProgram.module.scss'
import React, { useState } from 'react'
import JournalEntryListItem from '../JournalEntryListItem/JournalEntryListItem'

const JournalProgram = ({ posts }: { posts?: Post[] }) => {
  const [entryID, setEntryID] = useState('')
  const singlePost = posts?.find((post) => post._id === entryID)

  const handleClick = (id: string) => {
    setEntryID(id)
  }

  return (
    <ul>
      <li>
        <span>here are some entries</span>
      </li>
      {posts && (
        <>
          {posts.map((post) => (
            <li key={post._id} onClick={() => handleClick(post._id)}>
              <JournalEntryListItem {...post} />
            </li>
          ))}
        </>
      )}
      {singlePost && (
        <div dangerouslySetInnerHTML={{ __html: singlePost.body.html }} />
      )}
    </ul>
  )
}

export default JournalProgram
