import React from "react";
import MenuButton from "components/MenuButton/MenuButton";
import { MobileContext } from "../Context/MobileContext";
import "./header.scss";
import Logo from "img/logo.png";
import { HeaderWrapper } from "./HeaderElements";
export default function Header() {
  return (
    <>
      <MobileContext.Consumer>
        {(isMobile) => {
          if (isMobile) {
            return (
              <>
                <header className="header header_margin-top_56">
                  <HeaderWrapper>
                    <picture className="header__logo">
                      <img src={Logo} alt="trafalgar logo" />
                    </picture>
                    <MenuButton />
                  </HeaderWrapper>
                </header>
              </>
            );
          }
          return (
            <>
              <header className="header header_margin-top_56">
                <HeaderWrapper>
                  <picture className="header__logo">
                    <img src={Logo} alt="trafalgar logo" />
                  </picture>
                  <nav className="header__navigation">
                    <ul className="header__navigation-ul">
                      <li className="header__navigation-list">
                        <a
                          className={`header__navigation-link ${
                            window.location.pathname === "/" &&
                            "header__navigation-link_marked"
                          }`}
                          href="#"
                        >
                          Home
                        </a>
                      </li>
                      <li className="header__navigation-list">
                        <a
                          className={`header__navigation-link ${
                            window.location.pathname === "/find-a-doctor" &&
                            "header__navigation-link_marked"
                          }`}
                          href="#"
                        >
                          Find a doctor
                        </a>
                      </li>
                      <li className="header__navigation-list">
                        <a
                          className={`header__navigation-link ${
                            window.location.pathname === "/apps" &&
                            "header__navigation-link_marked"
                          }`}
                          href="#"
                        >
                          Apps
                        </a>
                      </li>
                      <li className="header__navigation-list">
                        <a
                          className={`header__navigation-link ${
                            window.location.pathname === "/testimonials" &&
                            "header__navigation-link_marked"
                          }`}
                          href="#"
                        >
                          Testimonials
                        </a>
                      </li>
                      <li className="header__navigation-list">
                        <a
                          className={`header__navigation-link ${
                            window.location.pathname === "about-us" &&
                            "header__navigation-link_marked"
                          }`}
                          href="#"
                        >
                          About us
                        </a>
                      </li>
                    </ul>
                  </nav>
                </HeaderWrapper>
              </header>
            </>
          );
        }}
      </MobileContext.Consumer>
    </>
  );
}
