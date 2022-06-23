import React, { FC } from 'react';
import classNames from 'classnames';

export interface ButtonProps {
  fontSize?: '16px' | '18px';
  variation?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export const Button: FC<ButtonProps> = ({
  variation,
  size,
  fontSize,
  children,
}) => {
  const classes = classNames('dds-button', {
    'dds-button--secondary': variation === 'secondary',
    'dds-button--sm': size === 'sm',
    'dds-button--lg': size === 'lg',
    'dds-text-interface-400': fontSize === '18px',
  });

  return <button className={classes}>{children}</button>;
};
