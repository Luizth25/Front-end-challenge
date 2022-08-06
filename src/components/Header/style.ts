import styled, { css } from "styled-components";

export const Title = styled.h1`
  ${({ theme }) => css`
    ${theme.fontStyles.title}
  `}
`;

export const Headers = styled.header`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    background-color: #eed7a5;
    box-shadow: 2px 2px 2px ${theme.colors.borderColor};
  `}
`;
