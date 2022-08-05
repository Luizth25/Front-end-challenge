import styled, { css } from "styled-components";

const SButton = styled.button`
  ${({ theme }) => css`
    background-color: ${theme.colors.background};
    color: ${theme.colors.fontColor};
    border: 3px solid ${theme.colors.borderColor};
    border-radius: 5px;
    cursor: pointer;
  `}
  &:hover {
    ${({ theme }) => css`
      background-color: ${theme.colors.componentColor};
      color: ${theme.colors.fontColor};
    `}
  }
`;
export default SButton;
