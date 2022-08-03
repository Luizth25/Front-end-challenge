import styled, { css } from "styled-components";

export const UserAvatar = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
`;

export const UserData = styled.p`
  ${({ theme }) => css`
    ${theme.fontStyles.paragraph}
    padding:5px
  `}
`;

export const Username = styled.h3`
  font-size: 20px;
`;

export const UserRepo = styled.h1`
  ${({ theme }) => css`
    ${theme.fontStyles.heading}
    padding:5px
  `}
`;
