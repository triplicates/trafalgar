import React, { useState, useRef, useEffect } from "react";
import PropTypes, { string } from "prop-types";
import CoruselBtn from "$components/CoruselBtn/CoruselBtn";
import {
  CoruselBox,
  CoruselPictures,
  PictureWrapper,
  CoruselNav,
  CoruselRadio,
  CoruselRadios,
} from "./CoruselElements";

let propTypes = {
  pictures: PropTypes.arrayOf(string).isRequired,
};

export default function Corusel({ pictures }) {
  let [picture, setPicture] = useState(pictures),
    pictureRef = useRef(),
    radioRef = useRef();

  let initRadio = () => {
    return pictures.map((el, index) => (
      <CoruselRadio key={index}>
        <input
          id={`corusel_id-${index}`}
          data-corusel-picture={index}
          key={index}
          onClick={slide}
          name="corusel"
          type="radio"
        />
        <label htmlFor={`corusel_id-${index}`}></label>
      </CoruselRadio>
    ));
  };

  let slide = ({ target }) => {
    let attr = target.getAttribute("data-corusel-picture");
    pictureRef.current.setAttribute("src", picture[attr]);
  };

  // TODO FIX it

  useEffect(() => {
    let coruselRadio = radioRef.current.children[0].children[0];
    coruselRadio.setAttribute("checked", "true");
  }, []);

  return (
    <>
      <CoruselBox>
        <CoruselPictures>
          <PictureWrapper>
            <picture>
              <img ref={pictureRef} src={pictures[0]} alt="corusel picture" />
            </picture>
          </PictureWrapper>
        </CoruselPictures>
        <CoruselNav>
          <CoruselBtn hundleClick={slideToPrev} reverse={true} />
          <CoruselRadios ref={radioRef}>{initRadio()}</CoruselRadios>
          <CoruselBtn hundleClick={slideToNext} />
        </CoruselNav>
      </CoruselBox>
    </>
  );
}

Corusel.propTypes = propTypes;
