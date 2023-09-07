import React from 'react'
import { Card, CardProps } from '.'
import { Meta, StoryFn } from '@storybook/react'

const meta: Meta<typeof Card> = {
  title: 'Atoms/Card',
  component: Card,
}

export default meta

const Template: StoryFn<typeof Card> = (args: CardProps) => <Card {...args} />

export const Primary = Template.bind({})

Primary.args = {
  label: 'Primary Card',
  variant: 'primary',
  size: 'xs',
}

export const Secondary = Template.bind({})

Secondary.args = {
  label: 'Secondary Card',
  variant: 'secondary',
  size: 'xs',
}
