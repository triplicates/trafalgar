import styled, { keyframes } from "styled-components";
import { Wrapper as GlobalWrapper } from "components/GlobalStyles/GlobalStyles";
import { Link } from "react-router-dom";

let showMenu = keyframes`
  from{
    opacity: 0;
  }
  to{
    opacity: 1;
  }
`;

let closeMenu = keyframes`
  from{
    opacity: 1;
  }
  to{
    opacity: 0;
  }
`;

export let Menu = styled.div`
  position: fixed;
  z-index: 9999;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  animation: 0.4s ${showMenu} forwards;
  &.menu_closed {
    animation: 0.6s ${closeMenu} forwards;
  }
`;

export let MenuWrapper = styled(GlobalWrapper)`
  position: relative;
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  & .menu__close-button {
    margin-top: 40px;
    font-family: "Mulish";
    font-weight: 300;
    font-size: 32px;
    border: none;
    background: none;
    color: silver;
  }
  & .menu__list {
    text-align: center;
  }
  & .menu__list:nth-child(1n + 2) {
    margin-top: 14px;
  }
`;

export let MenuLink = styled(Link)`
  font-family: "Mulish";
  text-decoration: none;
  color: var(--mainColor);
`;

export let CloseButton = styled.button``;
