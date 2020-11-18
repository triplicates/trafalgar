import React from "react";
import { MobileContext } from "../Context/MobileContext";
import "./header.scss";
import Logo from "img/logo.png";
export default function Header() {
  return (
    <>
      <MobileContext.Consumer>
        {(isMobile) => {
          if (isMobile) {
            return (
              <>
                <header className="header">
                  <div className="header__inner">
                    <picture>
                      <img src={Logo} alt="trafalgar logo" />
                    </picture>
                  </div>
                </header>
              </>
            );
          }
          return (
            <>
              <header className="header">
                <div className="header__inner">
                  <picture>
                    <img src={Logo} alt="trafalgar logo" />
                  </picture>
                </div>
              </header>
            </>
          );
        }}
      </MobileContext.Consumer>
    </>
  );
}
