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

export const Secondary = Template.bind({})
Secondary.args = {
  children: 'Sekundærknapp',
  variant: 'secondary',
}

export const Disabled = Template.bind({})
Disabled.args = {
  children: 'Deaktivert',
  disabled: true,
}

export const IconLeft = Template.bind({})
IconLeft.args = {
  children: 'Ikon',
  iconLeft: <Image />,
}

export const IconRight = Template.bind({})
IconRight.args = {
  children: 'Ikon',
  iconRight: <Image />,
}

export const Small = Template.bind({})
Small.args = {
  children: 'Small',
  size: 'small',
}

export const Large = Template.bind({})
Large.args = {
  children: 'Large',
  size: 'large',
}
