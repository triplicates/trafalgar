import React, { useEffect, useRef, useState } from "react";
import {
  Dot,
  CoruselWrapper,
  CoruselBlock,
  CoruselPicture,
  CoruselPanel,
} from "./CoruselElements";

export default function Corusel({ pictures }) {
  let [picture, setPictures] = useState(pictures);
  let radionsRef = useRef(null);
  let imgRef = useRef(null);

  useEffect(() => {
    let arr = [...radionsRef.current.children];
    arr.forEach((btn) => {
      btn.addEventListener("click", function () {
        getImgUrl(this);
      });
    });
  }, []);

  let createRadios = (pictures) => {
    return pictures.map((i, index) => {
      return <Dot name="corusel" key={index + 1} data-corusel-radio={index} />;
    });
  };

  let getImgUrl = (btn) => {
    let radio = btn.getAttribute("data-corusel-radio"),
      url = picture[radio].url;
    changeSrc(url);
  };

  let changeSrc = (url) => {
    imgRef.current.setAttribute("src", url);
  };

  let slideToNext = () => {
    let arr = [{ test: 1 }];
    let src = imgRef.current.getAttribute("src");
    let index = arr.indexOf({ url: src });
    console.log(index);
  };

  let slideToPrev = () => {
    console.log("prev");
  };

  let hundleChange = (e) => {
    console.log(picture.length - 1);
    console.log(e.target);
  };

  return (
    <CoruselWrapper>
      <CoruselBlock>
        <CoruselPicture>
          <img ref={imgRef} src={picture[0].url} alt="" />
        </CoruselPicture>
        <CoruselPanel>
          <picture onClick={slideToPrev}>pref</picture>
          <div onChange={hundleChange} ref={radionsRef}>
            {createRadios(pictures)}
          </div>
          <picture onClick={slideToNext}>next</picture>
        </CoruselPanel>
      </CoruselBlock>
    </CoruselWrapper>
  );
}
