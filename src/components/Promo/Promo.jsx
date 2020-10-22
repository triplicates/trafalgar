import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import {
  Promo as PromoSection,
  PromoWrapper,
  Text,
  Subtitle,
  PromoLink,
  Picture,
} from "./PromoElements.jsx";

import { Title } from "../Styles/GlobalStyles.jsx";
import picture from "../../assets/bg.png";

export default function Promo() {
  return (
    <PromoSection>
      <PromoWrapper>
        <Text>
          <Title size="big">Virtual healthcare for you</Title>
          <Subtitle size="big">
            Trafalgar provides progressive, and affordable healthcare,
            accessible on mobile and online for everyone
          </Subtitle>
          <Router>
            <PromoLink to="#" primary="true">
              Consult today
            </PromoLink>
          </Router>
        </Text>
        <Picture>
          <img src={picture} alt="Background picture" />
        </Picture>
      </PromoWrapper>
    </PromoSection>
  );
}
