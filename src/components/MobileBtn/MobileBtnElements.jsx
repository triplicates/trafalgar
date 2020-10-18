import styled from "styled-components";

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  background: transparent;
  display: none;
  width: 52px;
  height: 52px;
  @media only screen and (max-width: 768px) {
    display: block;
  }
  @media only screen and (min-width: 769px) and (max-width: 960px) {
    display: block;
  }
`;
