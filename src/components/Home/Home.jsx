import React, { useState } from "react";
import Header from "../Header/Header.jsx";
import MobileMenu from "../MobileMenu/MobileMenu.jsx";
import Promo from "../Promo/Promo.jsx";
import Loader from "../Loader/Loader.jsx";
import CoruselSection from "$components/CoruselSection/CoruselSection";
import { services, unitFirst, unitSecond } from "../Data/Data.js";
const Services = React.lazy(() => import("../Services/Services.jsx"));
const Unit = React.lazy(() => import("../Article/Unit.jsx"));

export default function Home() {
  document.title = "Home";
  const [isMobile, setIsMobile] = useState(true);
  const [menu, setMenu] = useState(false);

  const hundleClick = () => {
    setMenu(!menu);
  };

  window.addEventListener("resize", () => {
    window.innerWidth <= 960 ? setIsMobile(true) : setIsMobile(false);
  });

  return (
    <>
      <Header isMobile={isMobile} hundler={hundleClick} />
      <Promo />
      <React.Suspense fallback={<Loader />}>
        <Services data={services} />
      </React.Suspense>
      <React.Suspense fallback={<Loader />}>
        <Unit options={unitFirst} />
        <Unit options={unitSecond} />
      </React.Suspense>
      {isMobile && menu && <MobileMenu visible={menu} hundler={hundleClick} />}
    </>
  );
}
