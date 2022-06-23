import React from 'react';
import { Meta, Story } from '@storybook/react';
import { TeaserCard, TeaserCardProps } from '../../../index';

const meta: Meta = {
  title: 'Web/Teaser Card',
  component: TeaserCard,
  argTypes: {
    children: {
      control: {
        type: 'text',
      },
    },
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<TeaserCardProps> = args => <TeaserCard {...args} />;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

Default.args = {
  imageSrc: 'img/png/five.jpg',
  alignment: 'vertical',
  metaItems: ['16. des 2022'],
};
