import styled from "styled-components";
import { Wrapper } from "../Styles/GlobalStyles.jsx";

export const Menu = styled.div`
  display: ${({ visible }) => (visible ? "flex" : "none")};
  align-items: center;
  background: rgba(255, 255, 255, 0.6);
  position: fixed;
  z-index: 99999;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
`;

export const MenuWrapper = styled(Wrapper)`
  display: flex;
  justify-content: center;
  height: 400px;
  align-items: center;
`;

export const MenuNav = styled.nav`
  display: flex;
`;

export const MenuUl = styled.ul`
  display: flex;
  flex-direction: column;
`;

export const MenuLi = styled.li`
  text-align: center;
  margin-top: 20px;
`;
