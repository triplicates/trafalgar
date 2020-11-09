import React from "react";
import { Article, Picture, Title, Subtitle } from "./ServiceElements.jsx";
import PropTypes from "prop-types";

let propTypes = {
  picture: PropTypes.string.isRequired,
  title: PropTypes.string,
  text: PropTypes.string,
};

export default function Service({ picture, title, text }) {
  return (
    <Article>
      <Picture srcSet={picture}>
        <img src={picture} alt="service picture" />
      </Picture>
      <Title>{title}</Title>
      <Subtitle>{text}</Subtitle>
    </Article>
  );
}

Service.propTypes = propTypes;
