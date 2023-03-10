import { Meta, Story } from '@storybook/react'
import { Button } from './Button.component'
import { ButtonProps } from './Button.types'

export default {
  title: 'Button/Button',
  component: Button,
  argTypes: {
    label: {
      description: 'Button label.',
    },
    variant: {
      description: 'Controls button appearance',
      options: ['primary', 'outline'],
      control: {
        type: 'select',
      },
    },
  },
} as Meta<ButtonProps>

export const Template: Story<ButtonProps> = args => (
  <Button {...args} label="Text label" />
)

export const Primary = Template.bind({})
Primary.args = {
  variant: 'primary',
  label: 'Primary label',
}

export const Outline = Template.bind({})
Outline.args = {
  variant: 'outline',
  label: 'Outline label',
}
