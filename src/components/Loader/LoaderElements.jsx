import styled, { keyframes } from "styled-components";
import { Wrapper } from "../Styles/GlobalStyles.jsx";

export const LoaderWrapper = styled(Wrapper)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  min-height: 200px;
`;

const loaderAnim = keyframes`
    0%{
        opacity: 0;
    }
    100%{
        opacity: 1;
    }
`;

export const Dots = styled.div`
  background: #458ff6;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  margin-left: 5px;
  animation: ${loaderAnim} 1s infinite;
  transition: animation 0.4s;
  &#${(props) => props.id} {
    animation-delay: ${({ delay }) => delay}s;
  }
`;
