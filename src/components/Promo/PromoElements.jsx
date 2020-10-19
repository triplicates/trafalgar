import styled from "styled-components";
import {
  Wrapper,
  Subtitle as Sb,
  Button as Bt,
} from "../Styles/GlobalStyles.jsx";

export const Promo = styled.section`
  width: 100%;
  height: 100%;
`;
export const PromoWrapper = styled(Wrapper)`
  overflow: hidden;
  position: relative;
  height: 600px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media only screen and (max-width: 768px) {
  }
`;

export const Text = styled.div`
  flex-basis: 440px;
  flex-shrink: 0;
  @media only screen and (max-width: 768px) {
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-basis: 100%;
    height: 100%;
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0),
      rgba(255, 255, 255, 1)
    );
  }
`;

export const Picture = styled.picture`
  flex-shrink: 0;
  width: 600px;
  @media only screen and (max-width: 768px) {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: -1;
    width: 400px;
  }
`;

export const Subtitle = styled(Sb)`
  margin-top: 25px;
  @media only screen and (max-width: 768px) {
    font-size: 16px;
  }
`;
export const Button = styled(Bt)`
  margin-top: 30px;
`;
