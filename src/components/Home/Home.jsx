import React from "react";
import Header from "../Header/Header.jsx";
import Promo from "../Promo/Promo.jsx";
import Services from "../Services/Services.jsx";

export default function Home() {
  document.title = "Home";
  const services = [
    {
      id: 1,
      picture: "./assets/picture.png",
      title: "Search doctor",
      text:
        "Choose your doctor from thousands of specialist, general, and trusted hospitals",
    },
    {
      id: 2,
      picture: "./assets/picture2.png",
      title: "Online pharmacy",
      text:
        "Buy  your medicines with our mobile application with a simple delivery system",
    },
    {
      id: 3,
      picture: "./assets/picture3.png",
      title: "Consultation",
      text:
        "Free consultation with our trusted doctors and get the best recomendations",
    },
    {
      id: 4,
      picture: "./assets/picture4.png",
      title: "Details info",
      text:
        "Free consultation with our trusted doctors and get the best recomendations",
    },
    {
      id: 5,
      picture: "./assets/picture5.png",
      title: "Emergency care",
      text:
        "You can get 24/7 urgent care for yourself or your children and your lovely family",
    },
    {
      id: 6,
      picture: "./assets/picture6.png",
      title: "Tracking",
      text: "Track and save your medical history and health data ",
    },
  ];
  return (
    <>
      <section>
        <Header />
        <Promo />
        <Services data={services} />
      </section>
    </>
  );
}
