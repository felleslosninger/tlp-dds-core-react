import React from 'react';
import { Story } from '@storybook/react';
import { NavigationCard, NavigationCardProps } from '../../../index';
import { Sun } from 'react-feather';

export default {
  title: 'Web/Navigation Card',
  component: NavigationCard,
};

const Template: Story<NavigationCardProps> = args => (
  <NavigationCard {...args} />
);

export const Default = Template.bind({});

Default.args = {
  backgroundColor: 'yellow',
  icon: <Sun size={40} />,
};
