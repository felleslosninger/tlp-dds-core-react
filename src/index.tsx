import { HTMLAttributes, ReactChild } from 'react';
export * from './components/Button/Button';
export * from './components/TeaserCard/TeaserCard';
export * from './components/NavigationCard/NavigationCard';
export * from './components/Banner/Banner';
export * from './components/Section/Section';
export * from './components/Header/Header';

export interface Props extends HTMLAttributes<HTMLDivElement> {
  /** custom content, defaults to 'the snozzberries taste like snozzberries' */
  children?: ReactChild;
}
