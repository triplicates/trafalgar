import React, { useState } from "react";
import Header from "components/Header/Header";
import Promo from "components/Promo/Promo";
import { MobileContext } from "components/Context/MobileContext";

export default function Home() {
  let [isMobile, setIsMobile] = useState(false);

  (function () {
    window.addEventListener("load", () => {
      window.innerWidth < 968 ? setIsMobile(true) : setIsMobile(false);
    });

    window.addEventListener("resize", () => {
      window.innerWidth < 968 ? setIsMobile(true) : setIsMobile(false);
    });
  })();

  return (
    <>
      <MobileContext.Provider value={isMobile}>
        <Header />
      </MobileContext.Provider>
    </>
  );
}
