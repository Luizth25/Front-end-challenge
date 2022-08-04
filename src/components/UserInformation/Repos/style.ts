import styled, { css } from "styled-components";

export const title = styled.h3`
  ${({ theme }) => css`
    ${theme.fontStyles.heading}
  `}
`;
