import React, { FC } from 'react';
import styled, { css } from 'styled-components';
import tokens from '../../utils/tokens';

export interface ButtonProps {
  fontSize?: '16px' | '18px';
  type1?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

const S = {
  Button: styled.button<ButtonProps>`
    border: 2px solid ${tokens.color.neutral.grey['800']};
    display: inline-block;
    border-radius: 56px;
    transition: 0.15s all;
    cursor: pointer;
    font-weight: 500;
    font-size: ${props => props.fontSize};

    background-color: ${props =>
      props.type1 === 'primary' ? tokens.color.neutral.grey['800'] : 'white'};

    color: ${props =>
      props.type1 === 'primary' ? 'white' : tokens.color.neutral.grey['800']};

    &:hover {
      background-color: ${tokens.color.interface['interaction-light']};
      color: ${tokens.color.neutral.grey['800']};
    }

    ${props => {
      switch (props.size) {
        case 'sm':
          return css`
            height: 40px;
            padding: 0 20px;
          `;
        case 'md':
          return css`
            height: 48px;
            padding: 0 32px;
          `;
        default:
          return css`
            height: 56px;
            padding: 0 40px;
          `;
      }
    }}
  `,
};
export const Button: FC<ButtonProps> = ({
  fontSize,
  type1,
  size,
  children,
}) => {
  return (
    <S.Button fontSize={fontSize} type1={type1} size={size}>
      {children}
    </S.Button>
  );
};
