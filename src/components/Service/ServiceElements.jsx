import styled from "styled-components";
import { Title, Subtitle } from "components/GlobalStyles/GlobalStyles";

export let Service = styled.div`
  background: #fff;
  border-radius: 20px;
  box-shadow: 10px 40px 50px rgba(229, 233, 246, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export let ServiceInner = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(100% - 40px);
  height: calc(100% - 40px);
  @media only screen and (max-width: 768px) {
    align-items: center;
  }
`;
export let ServicePicture = styled.div`
  height: 90px;
  & > picture img {
    height: 100%;
  }
`;

export let ServiceText = styled.div`
  width: 266px;
  margin-top: 20px;
  height: 100%;
`;

export let ServiceTitle = styled(Title)`
  margin-bottom: 20px;
  @media only screen and (max-width: 768px) {
    text-align: center;
  }
`;
export let ServiceSubtitle = styled(Subtitle)`
  line-height: 28px;
  @media only screen and (max-width: 768px) {
    text-align: center;
  }
`;
