import React from "react";
import {
  Promo as PromoSection,
  PromoWrapper,
  Text,
  Subtitle,
  Button,
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
          <Button primary>Consult today</Button>
        </Text>
        <Picture>
          <img src={picture} alt="Background picture" />
        </Picture>
      </PromoWrapper>
    </PromoSection>
  );
}
