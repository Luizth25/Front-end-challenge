import styled, { css } from "styled-components";

export const UserContainer = styled.div`
  display: flex;
  width: 1000px;
  flex-direction: column;
`;
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
