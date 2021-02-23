import React from "react";

import styled from "styled-components";
import { useSelector } from "react-redux";
import { State } from "~/interfaces";
import themes from "~/styles/themes";
/**
 * 차량 사진 sub category
 * @param idx = detail index
 * */
const MaximumPhoto = ({ idx }) => {
  const carData = useSelector((state: State) => state.getGlobal.carData);
  return (
    <__Wrapper>
      <__Title>10개 등록 가능 </__Title>
      <__Number>
        {carData[idx]?.photo === null ? 0 : carData[idx]?.photo.length}/10
      </__Number>
    </__Wrapper>
  );
};
const __Wrapper = styled.div`
  display: flex;
`;
const __Title = styled.p`
  margin-right: 0.9rem;
`;
const __Number = styled.p`
  font-size: 1.3rem;
  line-height: 2.2rem;
  letter-spacing: -0.46px;
  color: ${themes.color.darkSkyBlue};
  font-weight: bold;
`;
export default MaximumPhoto;
