import React from "react";
import { LoaderWrapper, Dots } from "./LoaderElements.jsx";

export default function Loader() {
  let createDots = (count, delay = 0) => {
    let content = [];
    for (let i = 0; i < count; i++) {
      content.push(
        <Dots
          className="dot"
          key={i}
          id={`dot_${i + 1}`}
          delay={(delay += 0.2)}
        />
      );
    }
    return content;
  };

  return <LoaderWrapper>{createDots(3)}</LoaderWrapper>;
}
