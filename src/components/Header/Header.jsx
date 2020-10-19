import React from "react";
import {
  Header as Head,
  HeaderContainer,
  Logo,
  Nav,
  Ul,
  Li,
  Link,
} from "./HeaderElements.jsx";
import logo from "../../assets/logo.png";
import { BrowserRouter as Router } from "react-router-dom";
import MobileBtn from "../MobileBtn/MobileBtn.jsx";
import PropTypes from "prop-types";

export default function Header({ isMobile, hundler }) {
  return (
    <>
      <Head>
        <HeaderContainer>
          <Logo>
            <source srcSet={logo} />
            <img src={logo} alt="trafalgar logo" />
          </Logo>
          <Router>
            <Nav>
              <Ul>
                <Li>
                  <Link
                    primary={window.location.pathname === "/" ? 1 : 0}
                    to="/"
                  >
                    Home
                  </Link>
                </Li>
                <Li>
                  <Link
                    to="#"
                    primary={window.location.pathname === "/doctor" ? 1 : 0}
                  >
                    Find a doctor
                  </Link>
                </Li>
                <Li>
                  <Link
                    to="#"
                    primary={window.location.pathname === "/apps" ? 1 : 0}
                  >
                    Apps
                  </Link>
                </Li>
                <Li>
                  <Link
                    to="#"
                    primary={
                      window.location.pathname === "/testimonials" ? 1 : 0
                    }
                  >
                    Testimonials
                  </Link>
                </Li>
                <Li>
                  <Link
                    to="#"
                    primary={window.location.pathname === "/about" ? 1 : 0}
                  >
                    About us
                  </Link>
                </Li>
              </Ul>
            </Nav>
          </Router>
          {isMobile ? <MobileBtn show={hundler} /> : ""}
        </HeaderContainer>
      </Head>
    </>
  );
}

Header.propTypes = {
  isMobile: PropTypes.bool,
  hundled: PropTypes.func,
};
