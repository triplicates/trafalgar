import React from "react";
import { Btn } from "./CoruselBtnElements";
import PropTypes from "prop-types";

let propTypes = {
  reverse: PropTypes.bool,
  disable: PropTypes.bool,
};

export default function CoruselBtn({ reverse, disabled, hundleClick }) {
  return (
    <Btn onClick={hundleClick} reverse={reverse} disabled={disabled}>
      <svg
        width="29"
        height="19"
        viewBox="0 0 29 19"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M1.73745 11.2373L22.7834 11.2373L18.1596 15.8611C17.5219 16.4988 17.5219 17.4555 18.1596 18.0932C18.7974 18.731 19.754 18.731 20.3918 18.0932L27.726 10.759C28.3637 10.1213 28.3637 9.16464 27.726 8.52689L20.3918 1.1927C19.754 0.55495 18.7974 0.55495 18.1596 1.1927C17.5219 1.83046 17.5219 2.78709 18.1596 3.42485L22.7834 8.04857L1.73745 8.04857C0.940251 8.04857 0.143058 8.68633 0.143058 9.64296C0.143058 10.5996 0.940251 11.2373 1.73745 11.2373Z" />
      </svg>
    </Btn>
  );
}

CoruselBtn.propTypes = propTypes;
