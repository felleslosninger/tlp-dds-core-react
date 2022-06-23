import React from 'react';
import { Story } from '@storybook/react';
import { Sidebar, SidebarProps } from './Sidebar';

export default {
  title: 'Admin/Sidebar',
  component: Sidebar,
};

const Template: Story<SidebarProps> = args => <Sidebar {...args} />;

export const Default = Template.bind({});
