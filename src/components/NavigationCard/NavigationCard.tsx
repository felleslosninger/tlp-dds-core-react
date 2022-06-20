import React, { FC } from 'react';
import styled, { css } from 'styled-components';
import { Heading, Body } from '../Typography';
import tokens from '../../utils/tokens';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/pro-regular-svg-icons';

export interface NavigationCardProps {
  title?: string;
  desc?: string;
  backgroundColor?: 'yellow' | 'white';
  icon: React.ReactNode;
}

const defaultTitle: string = 'Sammenhengende tjenester';
const defaultDesc: string =
  'Få veiledning og råd om hvordan skape sammenhengende tjenester i samarbeid mellom flere virksomheter.';

const S = {
  Card: styled.a<NavigationCardProps>`
    box-shadow: 0 0 0 1px ${tokens.color.neutral.grey['400']};
    border-radius: 8px;
    padding: 40px;
    display: block;
    text-align: center;
    transition: 0.15s all;
    cursor: pointer;
    color: ${tokens.color.neutral.grey['800']};
    text-decoration: none;

    &:hover {
      box-shadow: 0 0 0 2px ${tokens.color.neutral.grey['800']};
      color: inherit;
    }

    ${({ backgroundColor }) =>
      backgroundColor === 'yellow' &&
      css`
        background: ${tokens.color.brand.second['200']};
      `}
  `,
  Heading: styled(Heading)`
    margin-top: 24px;
  `,
};

export const NavigationCard: FC<NavigationCardProps> = ({
  title = defaultTitle,
  desc = defaultDesc,
  backgroundColor = 'white',
  icon,
}) => {
  return (
    <S.Card backgroundColor={backgroundColor} icon={icon}>
      {icon}
      <S.Heading level={3} size="600">
        {title}
      </S.Heading>
      <Body size="300">{desc}</Body>
      <FontAwesomeIcon fontSize="24px" icon={faArrowRight} />
    </S.Card>
  );
};
