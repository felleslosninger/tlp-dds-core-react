import React from 'react';
import { Story } from '@storybook/react';
import { Button, ButtonProps } from '../src';

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    text: {
      control: {
        type: 'text',
      },
    },
    type1: {
      options: ['primary', 'secondary'],
      control: { type: 'radio' },
    },
    size: {
      options: ['sm', 'md', 'lg'],
      control: { type: 'radio' },
    },
    fontSize: {
      options: ['16px', '18px'],
      control: { type: 'radio' },
    },
  },
  parameters: {
    controls: { expanded: true },
  },
};

const Template: Story<ButtonProps> = args => (
  <Button {...args}>Click here</Button>
);

export const Primary = Template.bind({});
Primary.args = {
  type1: 'primary',
  size: 'md',
  fontSize: '16px',
};

export const Secondary = Template.bind({});
Secondary.args = {
  type1: 'secondary',
  size: 'md',
  fontSize: '16px',
};
