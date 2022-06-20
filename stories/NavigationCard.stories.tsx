import React from 'react';
import { Story } from '@storybook/react';
import { NavigationCard, NavigationCardProps } from "../src/components/NavigationCard/NavigationCard";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import tokens from "../src/utils/tokens";
import {faAlicorn} from '@fortawesome/pro-light-svg-icons'

export default {
    title: 'Navigation Card',
    component: NavigationCard
};

const Template: Story<NavigationCardProps> = args => <NavigationCard {...args} />;

export const Default = Template.bind({});

Default.args = {
    backgroundColor: 'yellow',
    icon: <FontAwesomeIcon color={tokens.color.neutral.grey["800"]} fontSize="40px" icon={faAlicorn} />
};
