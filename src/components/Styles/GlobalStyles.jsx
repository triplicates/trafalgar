import React from "react";
import styled from "styled-components";

const Btn = ({ className, children }) => {
  return <button className={className}>{children}</button>;
};

export const Wrapper = styled.div`
  width: 1170px;
  max-width: calc(100% - 40px);
  height: 100%;
  margin: 0 auto;
`;

export const Button = styled(Btn)`
  font-family: "Mulish";
  font-weight: bold;
  background: ${({ primary }) => (primary ? "#458ff6" : "#fff")};
  color: ${({ primary }) => (primary ? "#fff" : "#458ff6")};
  border: ${({ primary }) => (primary ? "none" : " 1px solid #458ff6")};
  border-radius: 25px;
  width: 200px;
  height: 52px;
  cursor: pointer;
  transition: all 0.2s;
  &:hover {
    background: #1f7cfe;
    color: #fff;
  }
`;

export const Title = styled.h1`
  color: #000000;
  font-size: 48px;
  font-family: "Mulish";
  font-weight: bold;
`;

export const Subtitle = styled.p`
  font-weight: 300;
  color: #7d7987;
  font-size: 21px;
`;
