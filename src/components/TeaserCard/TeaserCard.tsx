import React, { FC } from 'react';
import styled, { css } from 'styled-components';
import tokens from '../../utils/tokens';
import { TitleIcon } from '../TitleIcon/TitleIcon';
import { Body } from '../Typography';

export interface TeaserCardProps {
  title?: string;
  desc?: string;
  imageSrc?: string;
  meta?: string[];
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
    height: 100%;

    ${props => css`
      flex-direction: ${props.alignment === 'vertical' ? 'column' : 'row'};
      max-width: ${props.alignment === 'vertical' ? '600px' : '1320px'};
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
    height: 100%;

    &:hover {
      color: inherit;
    }

    ${props => css`
      flex-direction: ${props.alignment === 'vertical' ? 'column' : 'row'};
    `}
  `,
  ImageContainer: styled.div<TeaserCardProps>`
    flex: ${props => (props.alignment === 'vertical' ? 'auto' : '0 0 50%')};
  `,
  Image: styled.img<TeaserCardProps>`
    width: 100%;
    border-radius: ${props =>
      props.alignment === 'vertical' ? '8px 8px 0 0' : '8px 0 0 8px'};
    display: block;
  `,
  TextContainer: styled.div`
    padding: 32px;
    flex: 1 1 50%;

    p {
      margin-bottom: 0;
    }
  `,
  MetaContainer: styled.div`
    display: flex;
  `,
  MetaItem: styled(Body)`
    margin-right: 16px;
    margin-top: -8px;
    &:last-child {
      margin-right: 0;
    }
  `,
};

export const TeaserCard: FC<TeaserCardProps> = ({
  title = defaultTitle,
  desc = defaultDesc,
  imageSrc,
  alignment = 'vertical',
  meta = [],
}) => {
  const metaItems = meta.map(item => (
    <S.MetaItem key={item} size="200">
      {item}
    </S.MetaItem>
  ));
  return (
    <S.Card alignment={alignment}>
      <S.Link alignment={alignment}>
        {imageSrc && (
          <S.ImageContainer alignment={alignment}>
            <S.Image alignment={alignment} src={imageSrc} alt="" />
          </S.ImageContainer>
        )}
        <S.TextContainer>
          <TitleIcon>{title}</TitleIcon>
          {meta.length > 0 && <S.MetaContainer>{metaItems}</S.MetaContainer>}
          <Body size={alignment === 'vertical' ? '300' : '400'}>{desc}</Body>
        </S.TextContainer>
      </S.Link>
    </S.Card>
  );
};
