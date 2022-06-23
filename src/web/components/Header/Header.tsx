import React, { FC } from 'react';
import styled from 'styled-components';
import tokens from '../../../core/utils/tokens';

export interface HeaderProps {}

const Test = styled.div<HeaderProps>`
  height: 88px;
  border-bottom: 1px solid ${tokens.color.neutral.grey['300']};
`;

export const Header: FC<HeaderProps> = () => {
  return <Test></Test>;
};
