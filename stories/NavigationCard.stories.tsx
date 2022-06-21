import React from 'react';
import { Story } from '@storybook/react';
import {
  NavigationCard,
  NavigationCardProps,
} from '../src/components/NavigationCard/NavigationCard';
import FeatherIcon from 'feather-icons-react';

export default {
  title: 'Navigation Card',
  component: NavigationCard,
};

const Template: Story<NavigationCardProps> = args => (
  <NavigationCard {...args} />
);

export const Default = Template.bind({});

Default.args = {
  backgroundColor: 'yellow',
  icon: <FeatherIcon size="40" icon="sun" />,
};
