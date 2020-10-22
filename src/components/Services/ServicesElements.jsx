import styled from "styled-components";
import {
  Wrapper,
  Subtitle as Sb,
  CustomLink,
} from "../Styles/GlobalStyles.jsx";

export const Services = styled.section`
  margin-top: 120px;
  width: 100%;
  height: 100%;
`;

export const WrapperFlex = styled(Wrapper)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const WrapperGrid = styled(Wrapper)`
  margin-top: 60px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 350px);
  grid-gap: 20px;
  @media only screen and (max-width: 768px) {
    max-width: 100%;
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(1, 350px);
    grid-gap: 0;
    grid-row-gap: 40px;
  }
  @media only screen and (min-width: 769px) and (max-width: 960px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(1, 350px);
  }
`;

export const Subtitle = styled(Sb)`
  font-size: 18px;
  text-align: center;
`;

export const ServiceLink = styled(CustomLink)`
  margin-top: 25px;
`;
