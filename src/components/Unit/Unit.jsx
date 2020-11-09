import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import PropTypes from "prop-types";

import {
  Unit as UnitBlock,
  UnitWrapper,
  Article,
  UnitText,
  UnitPicture,
  Subtitle,
  CustomLink,
} from "./UnitElements.jsx";
import { Title } from "$components/Styles/GlobalStyles.jsx";

let propTypes = {
  options: PropTypes.object.isRequired,
};

export default function Unit({ options }) {
  return (
    <UnitBlock>
      <UnitWrapper>
        <Article isReversed={options.reverse}>
          <UnitText>
            <Title size="medium">{options.title}</Title>
            <Subtitle>{options.text}</Subtitle>
            <Router>
              <CustomLink to={options.btnLink}>
                {options.btnText}
                {options.arrow && (
                  <svg
                    width="11"
                    height="16"
                    viewBox="0 0 11 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M4.81951 1.05554L4.81951 12.6308L2.27646 10.0877C1.92569 9.73698 1.39954 9.73698 1.04878 10.0877C0.698014 10.4385 0.698014 10.9647 1.04878 11.3154L5.08258 15.3492C5.43335 15.7 5.95949 15.7 6.31026 15.3492L10.3441 11.3154C10.6948 10.9647 10.6948 10.4385 10.3441 10.0877C9.9933 9.73698 9.46715 9.73698 9.11638 10.0877L6.57333 12.6308L6.57333 1.05554C6.57333 0.617083 6.22257 0.178627 5.69642 0.178627C5.17027 0.178627 4.81951 0.617083 4.81951 1.05554Z" />
                  </svg>
                )}
              </CustomLink>
            </Router>
          </UnitText>
          <UnitPicture>
            <img src={options.picture} alt="unit picture" />
          </UnitPicture>
        </Article>
      </UnitWrapper>
    </UnitBlock>
  );
}
Unit.propTypes = propTypes;
