import styled from "styled-components";

export let ServicesBlock = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(3, minmax(350px, 1fr));
  grid-template-rows: repeat(2, minmax(350px, 1fr));
  grid-gap: 20px;
  @media only screen and (max-width: 768px) {
    grid-template-columns: repeat(1, minmax(350px, 1fr));
    grid-template-rows: repeat(6, minmax(350px, 1fr));
  }
  @media only screen and (min-width: 768px) and (max-width: 1024px) {
    grid-template-columns: repeat(2, minmax(350px, 1fr));
    grid-template-rows: repeat(3, minmax(350px, 1fr));
  }
`;
