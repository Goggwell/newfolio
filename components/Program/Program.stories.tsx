import { ComponentMeta, ComponentStory } from '@storybook/react'
import Program, { IProgram } from './Program'
import { mockProgramProps } from './Program.mocks'

export default {
  title: 'Components/Program',
  component: Program,
  argTypes: {},
} as ComponentMeta<typeof Program>

const Template: ComponentStory<typeof Program> = (args) => <Program {...args} />

export const Base = Template.bind({})

Base.args = {
  ...mockProgramProps.base,
} as IProgram
