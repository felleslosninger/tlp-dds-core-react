import { HTMLAttributes, ReactChild } from 'react';
export * from './components/Button/Button';

export interface Props extends HTMLAttributes<HTMLDivElement> {
  /** custom content, defaults to 'the snozzberries taste like snozzberries' */
  children?: ReactChild;
}
