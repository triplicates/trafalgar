import React from "react";
import {
  Service as ServiceWrapper,
  ServiceInner,
  ServicePicture,
  ServiceText,
  ServiceTitle,
  ServiceSubtitle,
} from "./ServiceElements.jsx";
import PropTypes from "prop-types";
import Services from "../Services/Services.jsx";

let propTypes = {
  obj: PropTypes.object.isRequired,
};

export default Service = ({ obj }) => {
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
};

Services.propTypes = propTypes;
