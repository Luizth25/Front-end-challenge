import styled, { css } from "styled-components";
const Title = styled.h1`
  ${({ theme }) => css`
    ${theme.fontStyles.title}
    text-align:center;
  `}
`;
export default Title;
