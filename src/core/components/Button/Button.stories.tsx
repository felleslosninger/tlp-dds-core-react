import React from 'react';
import { Story } from '@storybook/react';
import { Button, ButtonProps } from '../../../index';

export default {
  title: 'Core/Button',
  component: Button,
  argTypes: {
    text: {
      control: {
        type: 'text',
      },
    },
    variation: {
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
  variation: 'primary',
  size: 'md',
  fontSize: '16px',
};

export const Secondary = Template.bind({});
Secondary.args = {
  variation: 'secondary',
  size: 'md',
  fontSize: '16px',
};
