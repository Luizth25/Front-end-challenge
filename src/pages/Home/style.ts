import styled from "styled-components";

export const NavBar = styled.nav`
  display: flex;
  justify-content: flex-start;
  padding-left: 20px;
  gap: 20px;

  @media (max-width: 480px) {
    padding: 10px;
    gap: 15px;
  }
`;
export const UserContainer = styled.main`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 2px;
`;

export const UserAvatar = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
`;
