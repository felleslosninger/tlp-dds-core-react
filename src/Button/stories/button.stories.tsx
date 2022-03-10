import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Button from '../Button'
import Image from '@digdir/ds-icons/svg/image/outline.svg'

export default {
  title: 'Komponenter/Button',
  component: Button,
  args: {
    children: 'Knapp',
    disabled: false,
    variant: 'primary',
    size: 'medium',
  },
  argTypes: {
    iconLeft: {
      control: false,
    },
    iconRight: {
      control: false,
    },
  },
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
  children: 'Primærknapp',
}

export const IconLeft = Template.bind({})
IconLeft.args = {
  children: 'Primærknapp',
  iconLeft: <Image />,
}
