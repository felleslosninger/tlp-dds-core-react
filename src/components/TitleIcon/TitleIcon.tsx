import React, { FC } from 'react';
import styled from 'styled-components';
import { Heading } from '../Typography';
import FeatherIcon from 'feather-icons-react';

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
      <FeatherIcon icon="arrow-right" />
    </Styled.Heading>
  );
};
