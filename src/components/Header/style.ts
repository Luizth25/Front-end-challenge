import styled, { css } from "styled-components";

export const Title = styled.h1`
  ${({ theme }) => css`
    ${theme.fontStyles.title}
    text-align:center;
  `}
`;

export const SHeader = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
`;
