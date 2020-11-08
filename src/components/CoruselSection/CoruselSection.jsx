import React from "react";
import {
  CoruselSection as Section,
  SectionWrapper,
} from "./CoruselSectionElements";
import Corusel from "../Corusel/Corusel.jsx";

export default function CoruselSection() {
  return (
    <Section>
      <SectionWrapper>
        <Corusel pictures={["./assets/corusel.png", "./assets/picture5.png"]} />
      </SectionWrapper>
    </Section>
  );
}
