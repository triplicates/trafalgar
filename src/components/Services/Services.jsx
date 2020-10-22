import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import {
  Services as ServicesSection,
  WrapperFlex,
  Subtitle,
  WrapperGrid,
  ServiceLink,
} from "./ServicesElements.jsx";
import { Title } from "../Styles/GlobalStyles.jsx";
import Service from "../Service/Service.jsx";
import PropTypes from "prop-types";

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
                key={element.id}
                picture={element.picture}
                title={element.title}
                text={element.text}
              />
            );
          })}
        </WrapperGrid>
        <Router>
          <ServiceLink to="#">Learn more</ServiceLink>
        </Router>
      </WrapperFlex>
    </ServicesSection>
  );
}

Services.propTypes = {
  data: PropTypes.array.isRequired,
};
