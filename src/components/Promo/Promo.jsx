import React from "react";
import {
  PromoWrapper,
  Text,
  PromoBg,
  Subtitle,
  Btn,
} from "./PromoElements.jsx";
import { Title } from "../Styles/GlobalStyles.jsx";
import bg from "../../assets/bg.png";

export default function Promo() {
  return (
    <PromoWrapper>
      {/*TODO Check it !*/}
      <Text>
        <Title>Virtual healthcare for you</Title>
        <Subtitle>
          Trafalgar provides progressive, and affordable healthcare, accessible
          on mobile and online for everyone
        </Subtitle>
        <Btn primary>Click</Btn>
      </Text>
      <PromoBg srcSet={bg}>
        <img src={bg} alt="" />
      </PromoBg>
    </PromoWrapper>
  );
}
