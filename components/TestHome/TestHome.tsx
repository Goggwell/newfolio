// Test Homepage component, since Jest cannot read contentlayer/client

import FileGrid from '@/components/FileGrid/FileGrid'
import File from '@/components/File/File'
import { useState } from 'react'
import { programsData } from 'data/programs'

const TestHome = () => {
  const [files, setFiles] = useState(programsData)

  const openProgram = (value: number) => {
    const newFiles = [...files]
    newFiles[value].isOpen = true
    newFiles[value].isSelected = true

    setFiles(newFiles)
  }

  return (
    <div>
      <FileGrid>
        {files.map((file, index) => {
          return (
            !file.isTask && (
              <File
                key={index}
                name={file.name}
                isSelected={file.isSelected}
                onClick={() => openProgram(index)}
              />
            )
          )
        })}
      </FileGrid>
    </div>
  )
}

export default TestHome
