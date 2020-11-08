import styled from "styled-components";
import {
  Wrapper,
  Subtitle as sb,
  CustomLink as cl,
} from "../Styles/GlobalStyles.jsx";

export const Article = styled.section`
  margin-top: 120px;
  width: 100%;
  height: 100%;
`;

export const UnitWrapper = styled(Wrapper)`
  display: flex;
  justify-content: center;
  @media only screen and (max-width: 960px) {
    max-width: 100%;
  }
`;

export const Unit = styled.article`
  overflow: hidden;
  display: flex;
  flex-direction: ${({ isReversed }) => (isReversed ? "row-reverse" : "row")};
  justify-content: space-space-between;
  align-items: center;
  height: 100%;
  @media only screen and (max-width: 960px) {
    position: relative;
    min-height: 400px;
  }
`;

export const UnitText = styled.div`
  margin-left: ${({ isReversed }) => (isReversed ? "30px" : "")};
  flex-basis: 40%;
  @media only screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0),
      rgba(255, 255, 255, 1) 70%
    );
    flex-basis: 100%;
    min-height: 400px;
  }
`;

export const UnitPicture = styled.picture`
  @media only screen and (max-width: 960px) {
    position: absolute;
    left: 50%;
    transform: translate(-50%);
    z-index: -1;
  }
`;

export const Subtitle = styled(sb)`
  margin-top: 30px;
`;

export const CustomLink = styled(cl)`
  margin-top: 25px;
`;
