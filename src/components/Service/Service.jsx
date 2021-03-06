import React from "react";
import {
  Service as ServiceWrapper,
  ServiceInner,
  ServicePicture,
  ServiceText,
  ServiceTitle,
  ServiceSubtitle,
} from "./ServiceElements.jsx";

export default function Service({ obj }) {
  let { img, alt, title, subtitle } = obj;
  return (
    <ServiceWrapper>
      <ServiceInner>
        <ServicePicture>
          <picture>
            <img src={img} alt={alt} />
          </picture>
        </ServicePicture>
        <ServiceText>
          <ServiceTitle size="medium">{title}</ServiceTitle>
          <ServiceSubtitle>{subtitle}</ServiceSubtitle>
        </ServiceText>
      </ServiceInner>
    </ServiceWrapper>
  );
}
