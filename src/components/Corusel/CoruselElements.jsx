import styled from "styled-components";

export let CoruselBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 900px;
  height: 400px;
`;

export let PictureWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  width: 100%;
  height: 100%;
`;

export let CoruselPictures = styled.div`
  overflow: hidden;
  width: 100%;
  height: 100%;
`;

export let CoruselNav = styled.div`
  display: flex;
  min-width: 220px;
  justify-content: center;
  align-items: center;
`;

export let CoruselRadio = styled.div`
  box-sizing: border-box;
  display: flex;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  &:nth-child(1n + 2) {
    margin-left: 6px;
  }
  input[type="radio"] {
    appearance: none;
    opacity: 0;
    margin: 0;
    padding: 0;
  }
  input[type="radio"]:checked + label {
    background: #519bf4;
  }
  input[type="radio"]:focus + label {
    outline: 2px solid #000;
  }
  input[type="radio"] + label {
    box-sizing: border-box;
    padding: 0;
    background: #cee1fc;
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
`;

export let CoruselRadios = styled.div`
  display: flex;
  margin: 0 20px;
`;
