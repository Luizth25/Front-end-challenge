import styled, { css } from "styled-components";

export const UserTittle = styled.h1`
  ${({ theme }) => css`
    ${theme.fontStyles.heading}
  `}
`;
