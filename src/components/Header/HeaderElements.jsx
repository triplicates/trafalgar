import styled from "styled-components";
import { Wrapper } from "../Styles/GlobalStyles.jsx";
import { Link as Links } from "react-router-dom";

export const Header = styled.header`
  width: 100%;
  min-height: 60px;
`;

export const HeaderContainer = styled(Wrapper)`
  padding: 60px 0 40px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.picture`
  flex-shrink: 0;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  @media only screen and (max-width: 768px) {
    display: none;
  }
  @media only screen and (min-width: 769px) and (max-width: 960px) {
    display: none;
  }
`;
export const Ul = styled.ul`
  display: flex;
`;

export const Li = styled.li`
  margin-left: 20px;
`;

export const Link = styled(Links)`
  font-family: "Mulish";
  font-weight: ${({ primary }) => (primary ? "bold" : "300")};
  color: #1f1534;
  text-decoration: none;
  font-size: 18px;
  transition: color 0.4s;
  &:hover {
    color: blue;
  }
`;
