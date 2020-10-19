import styled from "styled-components";

export const Button = styled.button`
  display: none;
  border: none;
  background: transparent;
  width: 52px;
  height: 52px;
  @media only screen and (max-width: 960px) {
    display: block;
  }
`;
