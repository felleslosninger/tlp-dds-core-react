import React, { FC } from 'react';
import styled from 'styled-components';
import { Heading } from '../../Typography';
import { ArrowRight } from 'react-feather';

export interface TitleIconProps {
  children: React.ReactNode;
}
const Styled = {
  Heading: styled(Heading)`
    svg {
      margin-left: 8px;
    }
  `,
};

export const TitleIcon: FC<TitleIconProps> = ({ children }) => {
  return (
    <Styled.Heading size="500">
      {children}
      <ArrowRight />
    </Styled.Heading>
  );
};
