import React, {FC} from 'react';
import styled from 'styled-components';
import tokens from "../../utils/tokens";

export interface BannerProps {

}

const Link = styled.div<BannerProps>`
  background-color: ${tokens.color.brand.second["300"]};
  height: 400px;
`

export const Banner: FC<BannerProps> = ({}) => {
    return (
        <Link>

        </Link>
    );
};
