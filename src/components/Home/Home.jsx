import React, { useState } from "react";
import { MobileContext } from "components/Context/MobileContext";
import Header from "components/Header/Header";
import Promo from "components/Promo/Promo";
import Services from "components/Services/Services";
import Corusel from "components/Corusel/Corusel";
import Pictures from "components/Data/Pictures";

export default function Home() {
  let [isMobile, setIsMobile] = useState(false),
    dataOfPictures = Pictures;

  (function () {
    window.addEventListener("load", () => {
      window.innerWidth < 968 ? setIsMobile(true) : setIsMobile(false);
    });

    window.addEventListener("resize", () => {
      window.innerWidth < 968 ? setIsMobile(true) : setIsMobile(false);
    });
  })();

  return (
    <MobileContext.Provider value={isMobile}>
      <Header />
      <Promo />
      <Services />
      <Corusel pictures={dataOfPictures} />
    </MobileContext.Provider>
  );
}
