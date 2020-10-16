import React from "react";
import {
  Menu,
  MenuWrapper,
  MenuNav,
  MenuUl,
  MenuLi,
} from "./MobileMenuElements.jsx";
import { BrowserRouter as Router } from "react-router-dom";
import { Link } from "../Header/HeaderElements.jsx";

export default function MobileMenu({ visible, showMenu }) {
  return (
    <Menu visible={visible} onClick={showMenu}>
      <MenuWrapper>
        <Router>
          <MenuNav>
            <MenuUl>
              <MenuLi>
                <Link>Home</Link>
              </MenuLi>
              <MenuLi>
                <Link>Find a doctor</Link>
              </MenuLi>
              <MenuLi>
                <Link>Apps</Link>
              </MenuLi>
              <MenuLi>
                <Link>Testimonials</Link>
              </MenuLi>
              <MenuLi>
                <Link>About us</Link>
              </MenuLi>
            </MenuUl>
          </MenuNav>
        </Router>
      </MenuWrapper>
    </Menu>
  );
}
