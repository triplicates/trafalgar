import React, { useState } from "react";
import { Button } from "./MobileBtnElements.jsx";
import PropTypes from "prop-types";

export default function MobileBtn({ show }) {
  return (
    <Button onClick={show}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384.97 384.97">
        <path d="M12.03 120.303h360.909c6.641 0 12.03-5.39 12.03-12.03 0-6.641-5.39-12.03-12.03-12.03H12.03c-6.641 0-12.03 5.39-12.03 12.03s5.39 12.03 12.03 12.03zM372.939 180.455H12.03c-6.641 0-12.03 5.39-12.03 12.03s5.39 12.03 12.03 12.03h360.909c6.641 0 12.03-5.39 12.03-12.03s-5.389-12.03-12.03-12.03zM372.939 264.667H132.333c-6.641 0-12.03 5.39-12.03 12.03 0 6.641 5.39 12.03 12.03 12.03h240.606c6.641 0 12.03-5.39 12.03-12.03.001-6.641-5.389-12.03-12.03-12.03z" />
      </svg>
    </Button>
  );
}
MobileBtn.propTypes = {
  show: PropTypes.func.isRequired,
};
