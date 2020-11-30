import styled from "styled-components";
import {
  Wrapper as WrapperGlobal,
  Button,
  Subtitle,
  Title,
} from "components/GlobalStyles/GlobalStyles";

export let PromoSection = styled.section`
  width: 100%;
  min-height: calc(100vh - 98px);
  padding-top: 40px;
`;

export let PromoWrapper = styled(WrapperGlobal)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media only screen and (max-width: 960px) {
    min-height: calc(100vh - 160px);
    justify-content: center;
  }
`;

export let PromoText = styled.div`
  max-width: 420px;
  @media only screen and (max-width: 960px) {
    max-width: 100%;
    text-align: center;
  }
`;

export let PromoTitle = styled(Title)``;
export let PromoSubtitle = styled(Subtitle)`
  font-family: "Mulish";
  font-weight: 300;
  font-size: 21px;
  color: var(--textColor);
  &.margin-top_25 {
    margin-top: 25px;
  }
`;

export let PromoPicture = styled.picture`
  @media only screen and (max-width: 960px) {
    display: none;
  }
`;

export let PromoButton = styled(Button)`
  &.margin-top_48 {
    margin-top: 48px;
  }
`;
