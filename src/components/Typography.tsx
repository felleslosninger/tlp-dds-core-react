import React, {FC} from "react";
import styled, {css} from "styled-components";
import tokens from "../utils/tokens";

export interface HeadingProps {
    /*
     * HTML heading tag between 1 and 6
     */
    level?: 1 | 2 | 3 | 4 | 5 | 6;
    /*
     * 500: 20px --- 600: 24px --- 700: 28px --- 800: 32px --- 900: 36px
    */
    size?: "500" | "600" | "700" | "800" | "900";
    children?: React.ReactNode;
    className?: string;
}

export interface IngressProps {
    /*
     * 500: 20px --- 600: 24px
     */
    size?: "500" | "600";
    children?: React.ReactNode;
}

export interface BodyProps {
    /*
     * 100: 12px --- 200: 14px --- 300: 16px --- 400: 18px
    */
    size?: "100" | "200" | "300" | "400";
    children?: React.ReactNode;
}

export interface InterfaceProps {
    /*
    * 200: 14px --- 300: 16px --- 400: 18px
    */
    size?: "200" | "300" | "400";
    children?: React.ReactNode;
}

const StyledHeading = styled.h1<HeadingProps>`
  font-weight: 500;
  margin-top: 0;
  margin-bottom: 16px;

  ${({size}) => size === '500' && css`
    font-size: ${tokens.font.size["500"]};
    line-height: ${tokens.font.line.height["20"]};
  `}

  ${({size}) => size === '600' && css`
    font-size: ${tokens.font.size["600"]};
    line-height: ${tokens.font.line.height["20"]};
  `}

  ${({size}) => size === '700' && css`
    font-size: ${tokens.font.size["700"]};
    line-height: ${tokens.font.line.height["20"]};
  `}

  ${({size}) => size === '800' && css`
    font-size: ${tokens.font.size["800"]};
    line-height: ${tokens.font.line.height["10"]};
  `}

  ${({size}) => size === '900' && css`
    font-size: ${tokens.font.size["900"]};
    line-height: ${tokens.font.line.height["10"]};
  `}
`

const StyledIngress = styled.p<IngressProps>`
  font-weight: 400;
  font-size: ${tokens.font.size["500"]};
  line-height: ${tokens.font.line.height["30"]};

  ${({size}) => size === '600' && css`
    font-size: ${tokens.font.size["600"]};
    line-height: ${tokens.font.line.height["40"]};
  `}
`

const StyledBody = styled.p<BodyProps>`
  font-weight: 400;
  font-size: ${tokens.font.size["100"]};
  line-height: ${tokens.font.line.height["20"]};
  margin-bottom: 16px;

  ${({size}) => size === '200' && css`
    font-size: ${tokens.font.size["200"]};
    line-height: ${tokens.font.line.height["30"]};
  `}

  ${({size}) => size === '300' && css`
    font-size: ${tokens.font.size["300"]};
    line-height: ${tokens.font.line.height["30"]};
  `}

  ${({size}) => size === '400' && css`
    font-size: ${tokens.font.size["400"]};
    line-height: ${tokens.font.line.height["30"]};
  `}
`

const StyledInterface = styled.p<InterfaceProps>`
  font-weight: 500;
  font-size: ${tokens.font.size["200"]};
  line-height: ${tokens.font.line.height["10"]};

  ${({size}) => size === '300' && css`
    font-size: ${tokens.font.size["300"]};
    line-height: ${tokens.font.line.height["10"]};
  `}

  ${({size}) => size === '400' && css`
    font-size: ${tokens.font.size["400"]};
    line-height: ${tokens.font.line.height["10"]};
  `}
`

export const Heading: FC<HeadingProps> = ({level = 1, size = '900', className, children}) => {
    return (
        <StyledHeading as={`h${level}` as "h1"} level={level} size={size} className={className}>
            {children}
        </StyledHeading>
    );
};

export const Ingress: FC<IngressProps> = ({size = '600', children}) => {
    return (
        <StyledIngress size={size}>
            {children}
        </StyledIngress>
    );
};

export const Body: FC<BodyProps> = ({size = '400', children}) => {
    return (
        <StyledBody size={size}>
            {children}
        </StyledBody>
    );
};

export const Interface: FC<InterfaceProps> = ({size = '400', children}) => {
    return (
        <StyledInterface size={size}>
            {children}
        </StyledInterface>
    );
};