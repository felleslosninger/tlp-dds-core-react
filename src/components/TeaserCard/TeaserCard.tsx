import React, { FC } from 'react';
import styled, { css } from 'styled-components';
import tokens from '../../utils/tokens';
import { TitleIcon } from '../TitleIcon/TitleIcon';
import { Body } from '../Typography';

export interface TeaserCardProps {
  title?: string;
  desc?: string;
  imageSrc?: string;
  metaItems?: string[];
  alignment?: 'vertical' | 'horizontal';
}

interface CardProps {
  alignment?: 'vertical' | 'horizontal';
}

interface LinkProps {
  alignment?: 'vertical' | 'horizontal';
}

interface ImageContainerProps {
  alignment?: 'vertical' | 'horizontal';
}

interface ImageProps {
  alignment?: 'vertical' | 'horizontal';
}

const defaultTitle: string = 'Her er årets tre beste offentlige innovasjone';
const defaultDesc: string =
  'I august blir det klart hvem som har gjennomført det aller beste digitaliseringsprosjektet i offentlig sektor. Nå er de tre finalistene til Digitaliseringsprisen 2022 klare.';

const Card = styled.div<CardProps>`
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
`;

const Link = styled.a<LinkProps>`
  background-color: white;
  border-radius: 8px;
  transition: 0.15s all;
  cursor: pointer;
  color: inherit;
  text-decoration: none;
  display: flex;
  align-items: center;
  height: 100%;
  margin-bottom: 0;

  &:hover {
    color: inherit;
    background-color: ${tokens.color.brand.third['200']};
  }

  ${props => css`
    flex-direction: ${props.alignment === 'vertical' ? 'column' : 'row'};
  `}
`;

const ImageContainer = styled.div<ImageContainerProps>`
  flex: ${props => (props.alignment === 'vertical' ? 'auto' : '0 0 50%')};
`;

const Image = styled.img<ImageProps>`
  width: 100%;
  border-radius: ${props =>
    props.alignment === 'vertical' ? '8px 8px 0 0' : '8px 0 0 8px'};
  display: block;
`;

const TextContainer = styled.div`
  padding: 32px;
  flex: 1 1 50%;
`;

const MetaContainer = styled.div`
  display: flex;
`;

const MetaItem = styled(Body)`
  margin-right: 16px;
  margin-top: -8px;
  &:last-child {
    margin-right: 0;
  }
`;

export const TeaserCard: FC<TeaserCardProps> = ({
  title = defaultTitle,
  desc = defaultDesc,
  imageSrc,
  alignment = 'vertical',
  metaItems = [],
}) => {
  const getMetaItems = metaItems.map(item => (
    <MetaItem key={item} size="200">
      {item}
    </MetaItem>
  ));
  return (
    <Card alignment={alignment}>
      <Link alignment={alignment}>
        {imageSrc && (
          <ImageContainer alignment={alignment}>
            <Image alignment={alignment} src={imageSrc} alt="" />
          </ImageContainer>
        )}
        <TextContainer>
          <TitleIcon>{title}</TitleIcon>
          {metaItems.length > 0 && (
            <MetaContainer>{getMetaItems}</MetaContainer>
          )}
          <Body size={alignment === 'vertical' ? '300' : '400'}>{desc}</Body>
        </TextContainer>
      </Link>
    </Card>
  );
};
