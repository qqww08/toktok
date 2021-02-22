import React from "react";
import styled from "styled-components";
import { FlexCenter } from "~/styles/global-styles";

const CarPhotos = () => {
  return (
    <>
      <__Input id="photo" type="file" hidden />
      <__Label htmlFor="photo">
        <__ImgWrapper>
          <img src="/images/grey-plus.png" />
        </__ImgWrapper>
      </__Label>
    </>
  );
};
const __Label = styled.label`
  background: black;
  img {
    height: 3rem;
    width: 3rem;
  }
`;
const __ImgWrapper = styled.a`
  ${FlexCenter};
  border-radius: 10px;
  background: rgba(34, 148, 227, 0.2);
  height: 11.5rem;
  width: 11.5rem;
  margin-right: 1rem;
`;
const __Input = styled.input``;
export default CarPhotos;
