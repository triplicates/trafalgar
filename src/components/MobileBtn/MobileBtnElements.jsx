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
`;
