import React from "react";
import Header from "../Header/Header.jsx";
import Promo from "../Promo/Promo.jsx";

export default function Home() {
  document.title = "Home";
  return (
    <>
      <section>
        <Header />
        <Promo />
      </section>
    </>
  );
}
