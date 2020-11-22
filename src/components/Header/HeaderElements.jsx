import styled from "styled-components";

import {
  Wrapper,
  Navigation as NavigationGlobal,
  Ul as UlGlobal,
  List as ListGlobal,
} from "components/GlobalStyles/GlobalStyles";

export let Header = styled.header`
  width: 100%;
  height: 42px;
`;

export let HeaderWrapper = styled(Wrapper)`
  overflow: hidden;
  display: flex;
  justify-content: space-between;
  align-items: center;
  &.margin-top_56 {
    margin-top: 56px;
  }
`;

export let HeaderNavigation = styled(NavigationGlobal)``;
export let HeaderUl = styled(UlGlobal)`
  display: flex;
  align-items: center;
`;
export let HeaderList = styled(ListGlobal)`
  & a {
    font-family: "Mulish";
    font-weight: 400;
    transition: color 0.4s;
    text-decoration: none;
    color: var(--headerLinks);
    font-size: 18px;
  }
  &:nth-child(1n + 1) {
    margin-left: 40px;
  }
  &.header__link_marked a {
    font-weight: bold;
  }
  &:hover a {
    color: var(--mainColor);
  }
`;
