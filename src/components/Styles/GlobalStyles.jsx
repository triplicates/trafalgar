import styled from "styled-components";
import { Link } from "react-router-dom";
import React from "react";

export const Main = styled.main`
  width: 100%;
  min-height: 100%;
`;

export const Wrapper = styled.div`
  width: 1170px;
  max-width: calc(100% - 40px);
  height: 100%;
  margin: 0 auto;
`;

export const CustomLink = styled(Link)`
  font-family: "Mulish";
  font-weight: bold;
  color: ${({ primary }) => (primary ? "#fff" : "#1f7cfe")};
  background: ${({ primary }) => (primary ? "#1f7cfe" : "#fff")};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 52px;
  border: 1px solid var(--mainColor);
  border-radius: 25px;
  text-decoration: none;
  transition: background 0.2s, color 0.2s;
  svg {
    fill: #458ff6;
    margin-left: 12px;
    transition: fill 0.2s;
  }
  &:hover {
    background: var(--hoverColor);
    color: #fff;
    svg {
      fill: #fff;
    }
  }
`;

export const Title = styled.h1`
  color: var(--titleColor);
  font-size: ${({ size }) =>
    size === "big" ? "48px" : size === "medium" ? "36px" : "22px"};
  font-family: "Mulish";
  font-weight: bold;
  @media only screen and (max-width: 768px) {
    font-size: ${({ size }) =>
      size === "big" ? "36px" : size === "medium" ? "24px" : "18px"};
  }
`;

export const Subtitle = styled.p`
  font-family: "Mulish";
  font-weight: 300;
  color: var(--subtitleColor);
  font-size: ${({ size }) =>
    size === "big" ? "22px" : size === "medium" ? "18px" : "16px"};
  @media only screen and (max-width: 768px) {
    font-size: 16px;
  }
`;
