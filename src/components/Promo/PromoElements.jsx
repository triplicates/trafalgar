import styled from "styled-components";
import { Wrapper, Subtitle as Sb, Button } from "../Styles/GlobalStyles.jsx";

export const PromoWrapper = styled(Wrapper)`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Subtitle = styled(Sb)`
  margin-top: 25px;
`;

export const Btn = styled(Button)`
  margin-top: 20px;
`;

/*TODO Change !!!! */

export const Text = styled.div`
  @media only screen and (max-width: 768px) {
    position: absolute;
    top: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;

export const PromoBg = styled.picture`
  flex-shrink: 0;
  @media only screen and (max-width: 768px) {
    position: absolute;
    top: 0px;
    z-index: -1;
  }
`;
