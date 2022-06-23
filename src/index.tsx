import { HTMLAttributes, ReactChild } from 'react';
export * from './core/components/Button/Button';
export * from './web/components/TeaserCard/TeaserCard';
export * from './web/components/NavigationCard/NavigationCard';
export * from './web/components/Banner/Banner';
export * from './web/components/Section/Section';
export * from './web/components/Header/Header';
export * from './web/components/ImageSection/ImageSection';

export interface Props extends HTMLAttributes<HTMLDivElement> {
  /** custom content, defaults to 'the snozzberries taste like snozzberries' */
  children?: ReactChild;
}
