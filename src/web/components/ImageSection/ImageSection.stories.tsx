import React from 'react';
import { Story } from '@storybook/react';
import { ImageSection, ImageSectionProps } from '../../../index';

export default {
  title: 'Web/Image Section',
  component: ImageSection,
  parameters: {
    layout: 'padded',
  },
};

const Template: Story<ImageSectionProps> = args => <ImageSection {...args} />;

export const Default = Template.bind({});

Default.args = {
  backgroundColor: 'grey',
};
