import React from "react";
import { Btn } from "./MenuButtonElements";

export default function MenuButton({ hundleClick }) {
  return (
    <Btn onClick={hundleClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="rubicons align-right-alt"
        width="36"
        height="36"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path
          d="M3 7h18M13 12h8M7 17h14"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </svg>
    </Btn>
  );
}
