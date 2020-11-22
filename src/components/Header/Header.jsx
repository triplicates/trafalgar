import React from "react";
import { Link } from "react-router-dom";
import {
  Header as HeaderComponent,
  HeaderWrapper,
  HeaderNavigation,
  HeaderUl,
  HeaderList,
} from "./HeaderElements";
import Logo from "img/logo.png";
import { MobileContext } from "components/Context/MobileContext";
import MenuButton from "components/MenuButton/MenuButton";
import DataLinks from "components/Data/HeaderLinks";

export default function Header() {
  const LINKS = DataLinks;

  return (
    <>
      <MobileContext.Consumer>
        {(isMobile) => {
          if (isMobile) {
            return (
              <HeaderComponent>
                <HeaderWrapper className="margin-top_56">
                  <picture className="header__logo">
                    <img src={Logo} alt="trafalgar logo" />
                  </picture>
                  <MenuButton />
                </HeaderWrapper>
              </HeaderComponent>
            );
          }
          return (
            <HeaderComponent>
              <HeaderWrapper className="margin-top_56">
                <picture className="header__logo">
                  <img src={Logo} alt="trafalgar logo" />
                </picture>
                <HeaderNavigation>
                  <HeaderUl>
                    {LINKS.map((el) => {
                      return (
                        <HeaderList
                          key={el.id}
                          className={
                            window.location.pathname === el.path &&
                            "header__link_marked"
                          }
                        >
                          <Link to={el.path}>{el.name}</Link>
                        </HeaderList>
                      );
                    })}
                  </HeaderUl>
                </HeaderNavigation>
              </HeaderWrapper>
            </HeaderComponent>
          );
        }}
      </MobileContext.Consumer>
    </>
  );
}
