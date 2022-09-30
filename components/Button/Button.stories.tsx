import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Button from './Button'

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    title: {
      description: 'Title of button',
    },
    backgroundColor: {
      control: 'color',
    },
    padding: {
      control: {
        type: 'range',
        min: 1,
        max: 30,
        step: 1,
      },
    },
  },
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Base = Template.bind({})

Base.args = {
  title: 'Default',
}
