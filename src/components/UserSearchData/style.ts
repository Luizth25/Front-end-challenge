import styled, { css } from "styled-components";

export const UserHeader = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const UserTittle = styled.h1`
  ${({ theme }) => css`
    ${theme.fontStyles.heading}
  `}
`;
