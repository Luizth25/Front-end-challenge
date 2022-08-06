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
  flex-wrap: wrap;
  margin-left: 10px;
  margin-top: 10px;
  gap: 5px;
`;

export const ListCommit = styled.ol`
  ${({ theme }) => css`
    background-color: ${theme.colors.componentColor};
    display: flex;
    max-width: 600px;
    flex-direction: column;
    margin-left: 15px;
    list-style: decimal-leading-zero;
    border-radius: 5px;
  `}
`;

export const ListItem = styled.li`
  ${({ theme }) => css`
    border-bottom: 2px solid ${theme.colors.borderColor};
  `}
`;
