import React from 'react'
import { Button, ButtonProps } from '.'
import { Meta, StoryFn } from '@storybook/react'

const meta: Meta<typeof Button> = {
  title: 'Atoms/Button',
  component: Button,
}

export default meta

const Template: StoryFn<typeof Button> = (args: ButtonProps) => <Button {...args}>This is a button</Button>

export const Primary = Template.bind({})

Primary.args = {
  label: 'Primary Button',
  variant: 'primary',
  onClick: () => alert('clicking primary'),
}

export const Secondary = Template.bind({})

Secondary.args = {
  label: 'Secondary Button',
  variant: 'secondary',
  onClick: () => alert('clicking secondary'),
}
