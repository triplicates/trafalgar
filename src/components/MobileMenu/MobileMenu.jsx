import React from "react";
import { Menu, MenuWrapper, MenuLink, CloseButton } from "./MobileMenuElements";
import { Navigation, Ul, List } from "components/GlobalStyles/GlobalStyles";
import { BrowserRouter as Router } from "react-router-dom";

export default function MobileMenu({ controlMenu }) {
  let menuRef = React.useRef();
  let closeMenu = () => {
    menuRef.current.classList.add("menu_closed");
    setTimeout(() => {
      controlMenu();
    }, 800);
  };
  return (
    <Menu ref={menuRef}>
      <MenuWrapper>
        <Navigation>
          <Router>
            <Ul>
              <List className="menu__list">
                <MenuLink to="#">Home</MenuLink>
              </List>
              <List className="menu__list">
                <MenuLink to="#">Find a doctor</MenuLink>
              </List>
              <List className="menu__list">
                <MenuLink to="#">Apps</MenuLink>
              </List>
              <List className="menu__list">
                <MenuLink to="#">Testimonials</MenuLink>
              </List>
              <List className="menu__list">
                <MenuLink to="#">About us</MenuLink>
              </List>
            </Ul>
          </Router>
        </Navigation>
        <CloseButton className="menu__close-button" onClick={closeMenu}>
          X
        </CloseButton>
      </MenuWrapper>
    </Menu>
  );
}
