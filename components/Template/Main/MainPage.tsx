import React, { ReactNode, useEffect, useState } from "react";
import Detail from "~/components/Module/Main/Detail";
import AddCarBtn from "~/components/Module/Main/AddCarBtn";
import { useDispatch, useSelector } from "react-redux";
import { State } from "~/interfaces";
import { getCarData } from "~/store/global/actions";
import styled from "styled-components";
import themes from "~/styles/themes";

const MainPage = () => {
  const carData = useSelector((state: State) => state.getGlobal.carData);
  const dispatch = useDispatch();
  const [dummy, setDummy] = useState([""]);
  // 페이지 추가
  const pageAdd = () => {
    setDummy([...dummy, ""]);
    dispatch(
      getCarData([
        ...carData,
        {
          accident: true,
          repair: "",
          made: "",
          price: "",
          photo: [],
        },
      ])
    );
  };
  //판매 등록
  const submit = () => {
    console.log(carData);
  };
  return (
    <__MainWrapper>
      {dummy.map((item, index) => (
        <Detail key={index} idx={index} />
      ))}
      <AddCarBtn onClick={() => pageAdd()} />
      <__Submit onClick={() => submit()}>판매 등록 하기</__Submit>
    </__MainWrapper>
  );
};
const __MainWrapper = styled.div``;
const __Submit = styled.button`
  position: fixed;
  padding: 1.8rem 0 1.7rem;
  width: 100%;
  bottom: 0;
  left: 0;
  font-size: 1.8rem;
  line-height: 2.2rem;
  letter-spacing: -1.1px;
  color: ${themes.color.white};
  background: ${themes.color.darkSkyBlue};
`;
export default MainPage;
