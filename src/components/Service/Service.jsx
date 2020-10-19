import React from "react";
import { Article, Picture, Title, Subtitle } from "./ServiceElements.jsx";

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
