import React, {FC} from 'react';
import styled, {css} from "styled-components";
import tokens from '@digdir/ds-tokens/build/tokens';

export interface ButtonProps {
    fontSize?: string;
    type1?: string;
    size?: string;
    text?: string;
}

const MyButton = styled.button<ButtonProps>`
  background-color: ${tokens.color.neutral.grey["800"]};
  border: 2px solid ${tokens.color.neutral.grey["800"]};
  color: white;
  display: inline-block;
  border-radius: 100px;
  transition: 0.15s all;
  cursor: pointer;
  font-weight: 500;
  height: 40px;
  padding: 0 20px;
  font-size: ${props => props.fontSize === '18px' ? "18px" : "16px"};

  &:hover {
    background-color: ${tokens.color.interface["interaction-light"]};
    color: ${tokens.color.neutral.grey["800"]};
  }

  // Secondary
  ${props => props.type1 === 'secondary' && css`
    background: white;
    color: ${tokens.color.neutral.grey["800"]};
  `}

  // Sizes
  ${props => props.size === 'md' && css`
    padding: 0 32px;
    height: 48px;
  `}

  ${props => props.size === 'lg' && css`
    height: 56px;
    padding: 0 40px;
  `}

`

export const Button: FC<ButtonProps> = ({fontSize, type1, size, text}) => {

    return (
        <MyButton fontSize={fontSize} type1={type1} size={size}>
            {text}
        </MyButton>
    );
};