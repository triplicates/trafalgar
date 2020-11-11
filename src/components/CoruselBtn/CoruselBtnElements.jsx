import styled from "styled-components";

export let Btn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background: none;
  cursor: pointer;
  &:disabled {
    cursor: default;
    svg {
      fill: #7fb3fd;
    }
  }
  svg {
    transform: ${({ reverse }) => (reverse ? "rotate(180deg)" : "")};
    fill: #458ff6;
  }
`;
