import styled from "styled-components";
import { Wrapper } from "components/GlobalStyles/GlobalStyles";

export let CoruselWrapper = styled(Wrapper)`
  display: flex;
  justify-content: center;
`;

export let Dot = styled.input.attrs(({ type }) => ({
  type: "radio",
}))`
  width: 14px;
  height: 14px;
  background: #5b9bf3;
  cursor: pointer;
  &:nth-child(1n + 2) {
    margin-left: 6px;
  }
`;

export let CoruselPicture = styled.picture`
  display: flex;
  justify-content: center;
  align-items: center;
  background: silver;
  flex-basis: 80%;
  overflow: hidden;
  border-radius: 24px;
  * > img {
    width: 100%;
    height: 100%;
  }
`;

export let CoruselPanel = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-basis: 20%;
`;

export let CoruselBlock = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1024px;
  height: 320px;
  max-height: 612px;
`;
