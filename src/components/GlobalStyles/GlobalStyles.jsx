import styled from "styled-components";

export let Wrapper = styled.div`
  width: 1170px;
  max-width: calc(100% - 40px);
  margin: 0 auto;
  height: 100%;
`;

export let MenuButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background: transparent;
  border: none;
`;
export let Button = styled.button`
  font-family: "Mulish";
  font-weight: bold;
  width: 200px;
  height: 56px;
  border-radius: 55px;
  background: ${({ primary }) => (primary ? "#1F7CFE" : "#fff")};
  color: ${({ primary }) => (primary ? "#fff" : "#1F7CFE")};
  border: ${({ primary }) => (primary ? "none" : "1px solid #1F7CFE")};
  transition: background 0.4s, color 0.4s;
  cursor: pointer;
  &:hover {
    background: #4a94fc;
    color: #fff;
  }
`;

export let Title = styled.h2`
  position: relative;
  font-family: "Mulish";
  font-weight: bold;
  font-size: ${({ size }) =>
    size === "big" ? "36px" : size === "medium" ? "24px" : "21px"};
  ${({ line }) =>
    line &&
    `
    &{
      padding-bottom: 26px;
    }
    &:after {
      content: "";
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      bottom: 0;
      width: 56px;
      height: 2px;
      background: #000;
  }
  `}
`;

export let Subtitle = styled.p`
  font-family: "Mulish";
  font-weight: 300;
  color: var(--textColor);
  font-size: ${({ size }) =>
    size === "big" ? "21px" : size === "medium" ? "18px" : "16px"};
`;

export let Navigation = styled.nav``;
export let Ul = styled.ul``;
export let List = styled.li``;
