import React from "react";
import {
  Services as ServicesSection,
  WrapperFlex,
  Subtitle,
  WrapperGrid,
  ServiceBtn,
} from "./ServicesElements.jsx";
import { Title } from "../Styles/GlobalStyles.jsx";
import Service from "../Service/Service.jsx";

export default function Services({ data }) {
  return (
    <ServicesSection>
      <WrapperFlex>
        <Title>Our Services</Title>
        <Subtitle>
          We provide to you the best choiches for you. Adjust it to your health
          needs and make sure your undergo treatment with our highly qualified
          doctors you can consult with us which type of service is suitable for
          your health
        </Subtitle>
        <WrapperGrid>
          {data.map((element) => {
            return (
              <Service
                picture={element.picture}
                title={element.title}
                text={element.text}
              />
            );
          })}
        </WrapperGrid>
        <ServiceBtn>Learn more</ServiceBtn>
      </WrapperFlex>
    </ServicesSection>
  );
}
