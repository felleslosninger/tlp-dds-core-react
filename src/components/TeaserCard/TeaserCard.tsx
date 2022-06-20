import React, { FC } from 'react';
import styled, { css } from 'styled-components';
import tokens from '../../utils/tokens';
import { TitleIcon } from '../TitleIcon/TitleIcon';
import { Body } from '../Typography';

export interface TeaserCardProps {
  title?: string;
  desc?: string;
  imageSrc?: string;
  alignment?: 'vertical' | 'horizontal';
}

export interface Test {
  alignment?: 'vertical' | 'horizontal';
}

const defaultTitle: string = 'Her er årets tre beste offentlige innovasjone';
const defaultDesc: string =
  'I august blir det klart hvem som har gjennomført det aller beste digitaliseringsprosjektet i offentlig sektor. Nå er de tre finalistene til Digitaliseringsprisen 2022 klare.';

const S = {
  Card: styled.div<TeaserCardProps>`
    box-shadow: 0 0 0 1px ${tokens.color.neutral.grey['400']};
    border-radius: 8px;
    display: flex;

    ${props => css`
      flex-direction: ${props.alignment === 'vertical' ? 'column' : 'row'};
      max-width: ${props.alignment === 'vertical' ? '600px' : '1200px'};
    `}
    &:hover {
      box-shadow: 0 0 0 2px ${tokens.color.neutral.grey['800']};
    }
  `,
  Link: styled.a<TeaserCardProps>`
    background-color: white;
    border-radius: 8px;
    transition: 0.15s all;
    cursor: pointer;
    color: inherit;
    text-decoration: none;
    display: flex;
    align-items: center;

    &:hover {
      color: inherit;
    }

    ${props => css`
      flex-direction: ${props.alignment === 'vertical' ? 'column' : 'row'};
    `}
  `,
  ImageContainer: styled.div`
    flex: 0 0 50%;
    img {
      width: 100%;
      border-radius: 8px 8px 0 0;
      display: block;
    }
  `,
  TextContainer: styled.div`
    padding: 32px;
    flex: 1 1 50%;

    p {
      margin-bottom: 0;
    }
  `,
};

export const TeaserCard: FC<TeaserCardProps> = ({
  title = defaultTitle,
  desc = defaultDesc,
  imageSrc,
  alignment = 'vertical',
}) => {
  return (
    <S.Card alignment={alignment}>
      <S.Link alignment={alignment}>
        {imageSrc && (
          <S.ImageContainer>
            <img src={imageSrc} alt="dsd" />
          </S.ImageContainer>
        )}
        <S.TextContainer>
          <TitleIcon>{title}</TitleIcon>
          <Body size="300">{desc}</Body>
        </S.TextContainer>
      </S.Link>
    </S.Card>
  );
};
