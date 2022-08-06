import styled, { css } from "styled-components";

export const SubTitle = styled.h3`
  ${({ theme }) => css`
    ${theme.fontStyles.heading}
  `}
`;
export const ListRepo = styled.ol`
  ${({ theme }) => css`
    background-color: ${theme.colors.componentColor};
    display: flex;
    max-width: 600px;
    flex-direction: column;
    margin-left: 20px;
    list-style: decimal-leading-zero;
    border-radius: 5px;
  `}
`;
