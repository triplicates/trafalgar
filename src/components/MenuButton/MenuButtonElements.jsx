import styled, { keyframes } from "styled-components";
import { MenuButton } from "components/GlobalStyles/GlobalStyles";

let AnimateShow = keyframes`
    from{
        opacity: 0;
        transform: translateX(200px);
    }
    to{
        opacity: 1;
        transform: translateX(0);
    }
`;
export let Btn = styled(MenuButton)`
  transition: transform 0.2s;
  animation: ${AnimateShow} 0.4s forwards;
`;
