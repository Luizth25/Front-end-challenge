import styled, { css } from "styled-components";

export const Title = styled.h1`
  ${({ theme }) => css`
    ${theme.fontStyles.title}
    text-align:center;
  `}
`;

export const CommitsContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
`;
