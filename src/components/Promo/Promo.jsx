import React from "react";
import {
  PromoSection,
  PromoWrapper,
  PromoText,
  PromoTitle,
  PromoSubtitle,
  PromoButton,
  PromoPicture,
} from "./PromoElements";

import backgroundImage from "images/bg.png"

export default function Promo() {
  return (
    <PromoSection>
      <PromoWrapper>
        <PromoText>
          <PromoTitle size="big">Virtual healthcare for you</PromoTitle>
          <PromoSubtitle size="big" className="margin-top_25">
            Trafalgar provides progressive, and affordable healthcare,
            accessible on mobile and online for everyone
          </PromoSubtitle>
          <PromoButton className="margin-top_48" primary>
            Consult today
          </PromoButton>
        </PromoText>
        <PromoPicture>
          <img src={backgroundImage} alt="background image" />
        </PromoPicture>
      </PromoWrapper>
    </PromoSection>
  );
}
