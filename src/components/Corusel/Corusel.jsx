import React, { useState } from "react";
import PropTypes, { string } from "prop-types";
import { CoruselBox, CoruselPictures, PictureWrapper } from "./CoruselElements";

let propTypes = {
  pictures: PropTypes.arrayOf(string).isRequired,
};

export default function Corusel({ pictures }) {
  let [picture, setPicture] = useState("");
  let addRadio = () => {
    let radio = [];
    for (let i = 0; i < pictures.length; i++) {
      radio.push(<input key={i} name="corusel" type="radio" />);
    }
    return radio;
  };

  let slide = () => {};
  return (
    <>
      <CoruselBox>
        <CoruselPictures>
          <PictureWrapper>
            <picture>
              <img src={picture} alt="#" />
            </picture>
          </PictureWrapper>
        </CoruselPictures>
        <div className="corusel-nav">{addRadio()}</div>
      </CoruselBox>
    </>
  );
}

Corusel.propTypes = propTypes;
