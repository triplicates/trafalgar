import React, { useState } from "react";
import { MobileContext } from "components/Context/MobileContext";
import {
  Header as HeaderComponent,
  HeaderWrapper,
  HeaderNavigation,
  HeaderUl,
  HeaderList,
} from "./HeaderElements";
import DataLinks from "components/Data/HeaderLinks";
import Logo from "img/logo.png";
import { Link } from "react-router-dom";
import MenuButton from "components/MenuButton/MenuButton";
import MobileMenu from "components/MobileMenu/MobileMenu";

export default function Header() {
  const LINKS = DataLinks,
    [isOpen, setIsOpen] = useState(false);

  let controlMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <MobileContext.Consumer>
        {(isMobile) => {
          if (isMobile) {
            return (
              <HeaderComponent>
                <HeaderWrapper className="margin-top_56">
                  <picture>
                    <img src={Logo} alt="trafalgar logo" />
                  </picture>
                  <MenuButton hundleClick={controlMenu} />
                </HeaderWrapper>
                {isOpen && <MobileMenu controlMenu={controlMenu} />}
              </HeaderComponent>
            );
          }
          return (
            <HeaderComponent>
              <HeaderWrapper className="margin-top_56">
                <picture>
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
