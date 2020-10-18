import styled from "styled-components";
import { Wrapper, Subtitle as Sb, Button } from "../Styles/GlobalStyles.jsx";

export const PromoWrapper = styled(Wrapper)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media only screen and (max-width: 768px) {
    height: 400px;
    position: relative;
  }
`;

export const Subtitle = styled(Sb)`
  margin-top: 25px;
`;

export const Btn = styled(Button)`
  margin-top: 45px;
`;

export const Text = styled.div`
  @media only screen and (min-width: 769px) and (max-width: 960px) {
    position: absolute;
    bottom: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
  @media only screen and (max-width: 768px) {
    position: absolute;
    bottom: 0;
    background: linear-gradient(
      -180deg,
      rgba(255, 255, 255, 0),
      rgba(255, 255, 255, 1) 50%
    );
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;

export const PromoBg = styled.picture`
  width: 700px;
  flex-shrink: 0;
  @media only screen and (max-width: 768px) {
    width: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: -1;
  }
`;
