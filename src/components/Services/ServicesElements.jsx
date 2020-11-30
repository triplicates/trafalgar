import styled from "styled-components";
import { Title, Wrapper, Subtitle } from "components/GlobalStyles/GlobalStyles";

export let Services = styled.section`
  width: 100%;
  height: 100%;
`;

export let ServicesWrapper = styled(Wrapper)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export let ServicesTitle = styled(Title)`
  margin: 26px 0;
`;

export let ServicesSubtitle = styled(Subtitle)`
  text-align: center;
  margin-bottom: 20px;
`;
