import styled, { css } from "styled-components";

export const Paragraph = styled.p`
  ${({ theme }) => css`
    ${theme.fontStyles.paragraph}
    padding:5px
  `}
`;

export const Username = styled.h3`
  ${({ theme }) => css`
    ${theme.fontStyles.heading}
    font-size: 20px;
  `}
`;
