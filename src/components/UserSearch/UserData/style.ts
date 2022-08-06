import styled, { css } from "styled-components";

export const ListUser = styled.ol`
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

export const Input = styled.input`
  margin-bottom: 10px;
`;

export const UserAvatar = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
`;
