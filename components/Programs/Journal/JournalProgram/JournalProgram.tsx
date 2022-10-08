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
      {singlePost && <MDXContent components={JournalElements} />}
    </ul>
  )
}

export default JournalProgram
