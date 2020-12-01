import React from "react";
import {} from "./PromoElements";
import {
  PromoSection,
  PromoWrapper,
  PromoText,
  PromoTitle,
  PromoSubtitle,
  PromoButton,
  PromoPicture,
} from "./PromoElements";

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
          <img src="src/assets/images/bg.png" alt="background image" />
        </PromoPicture>
      </PromoWrapper>
    </PromoSection>
  );
}
