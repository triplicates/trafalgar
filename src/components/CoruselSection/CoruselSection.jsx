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
        <Corusel
          pictures={[
            "./assets/corusel.png",
            "./assets/picture5.png",
            "./assets/picture4.png",
            "./assets/picture3.png",
            "./assets/picture1.png",
          ]}
        />
      </SectionWrapper>
    </Section>
  );
}
