import React, { ReactNode, useEffect, useState } from "react";
import Detail from "~/components/Module/Main/Detail";
import AddCarBtn from "~/components/Module/Main/AddCarBtn";
import { useDispatch, useSelector } from "react-redux";
import { State } from "~/interfaces";
import { getCarData } from "~/store/global/actions";

const MainPage = () => {
  const carData = useSelector((state: State) => state.getGlobal.carData);
  const dispatch = useDispatch();
  const [dummy, setDummy] = useState([""]);
  const pageAdd = () => {
    console.log(carData);

    setDummy([...dummy, ""]);
    dispatch(
      getCarData([
        ...carData,
        {
          accident: true,
          repair: "",
          made: "",
          price: "",
        },
      ])
    );
  };
  return (
    <>
      {dummy.map((item, index) => (
        <Detail key={index} idx={index} />
      ))}

      {/*<Detail />*/}
      <AddCarBtn onClick={() => pageAdd()} />
    </>
  );
};

export default MainPage;
