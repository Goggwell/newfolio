import { ComponentMeta, ComponentStory } from '@storybook/react'
import File, { IFile } from './File'
import { mockFileProps } from './File.mocks'

export default {
  title: 'Components/File',
  component: File,
  argTypes: {},
} as ComponentMeta<typeof File>

const Template: ComponentStory<typeof File> = (args) => <File {...args} />

export const Base = Template.bind({})

Base.args = {
  ...mockFileProps.base,
} as IFile
