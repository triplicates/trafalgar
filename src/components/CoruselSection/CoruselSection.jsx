import React from "react";
import Corusel from "$components/Corusel/Corusel.jsx";
import {
  CoruselSection as Section,
  SectionWrapper,
} from "./CoruselSectionElements";

export default function CoruselSection() {
  return (
    <Section>
      <SectionWrapper>
        <Corusel pictures={["./assets/corusel.png", "./assets/picture5.png"]} />
        <h3>asd</h3>
      </SectionWrapper>
    </Section>
  );
}
