import React, { FC } from 'react';
import styled from 'styled-components';
import tokens from '../../utils/tokens';
import { Heading } from '../Typography';
import { faArrowRight } from '@fortawesome/pro-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
      <FontAwesomeIcon
        color={tokens.color.neutral.grey['800']}
        fontSize="20px"
        icon={faArrowRight}
      />
    </Styled.Heading>
  );
};
