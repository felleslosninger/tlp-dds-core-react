import React, {FC} from 'react';
import styled, {css} from 'styled-components';
import {Heading, Body} from "../Typography";
import tokens from "../../utils/tokens";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  regular } from '@fortawesome/fontawesome-svg-core/import.macro'

export interface NavigationCardProps {
    title?: string;
    desc?: string;
    backgroundColor?: "yellow" | "white";
}

const Link = styled.a<NavigationCardProps>`
  background-color: white;
  box-shadow: 0 0 0 1px ${tokens.color.neutral.grey["400"]};
  border-radius: 8px;
  padding: 32px;
  display: block;
  width: 400px;
  text-align: center;
  transition: 0.15s all;
  cursor: pointer;

  &:hover {
    box-shadow: 0 0 0 2px ${tokens.color.neutral.grey["800"]};
  }

  ${({backgroundColor}) => backgroundColor === 'yellow' && css`
    background: ${tokens.color.brand.second["200"]};
    color: ${tokens.color.neutral.grey["800"]};
  `}
`

export const NavigationCard: FC<NavigationCardProps> = ({title = "Title", desc= "Desc", backgroundColor = "white"}) => {
    return (
        <Link backgroundColor={backgroundColor}>
            <Heading level={3} size="600">{title}</Heading>
            <Body size="300">{desc}</Body>
            <FontAwesomeIcon icon={regular('coffee')} />
        </Link>
    );
};