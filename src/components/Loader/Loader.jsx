import React from "react";
import styled from "styled-components";

let LoaderWrapper = styled.div`
  overflow: hidden;
  background: silver;
  min-width: inherit;
  min-height: inherit;
`;

export default function Loader() {
  return <LoaderWrapper></LoaderWrapper>;
}
