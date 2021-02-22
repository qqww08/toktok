import React, { ReactNode, useEffect, useState } from "react";
import Category from "~/components/Module/Main/Category";
import AccidentHistory from "~/components/Module/Main/AccidentHistory";
import RepairHistory from "~/components/Module/Main/RepairHistory";
import ForeignCarCheck from "~/components/Module/Main/ForeignCarCheck";
import MadeBtnWrapper from "~/components/Module/Main/MadeBtnWrapper";
import CarPhotos from "~/components/Module/Main/CarPhotos";
import PriceInput from "~/components/Module/Main/PriceInput";
import FormFooter from "~/components/Module/Main/FormFooter";
import styled from "styled-components";
import { getCarData } from "~/store/global/actions";
import Button from "~/components/Module/Main/Button";
import { useDispatch, useSelector } from "react-redux";
import { State } from "~/interfaces";

const FormWrapper = ({ idx }: { idx: number }) => {
  const carData = useSelector((state: State) => state.getGlobal.carData);
  const dispatch = useDispatch();
  const [obj, setObj] = useState({
    accident: true,
    repair: "",
    made: "",
    price: "",
  });
  //
  useEffect(() => {
    // console.log((carData[idx] = obj));

    carData[idx] = obj;
    dispatch(getCarData([...carData, ...carData.splice(idx, 0, obj)]));
  }, [obj]);
  return (
    <__Form>
      <Category name={"사고이력"}>
        <AccidentHistory
          valueProps={(val) => setObj({ ...obj, accident: val })}
        />
      </Category>
      {obj.accident && (
        <Category name={"수리내역"}>
          <RepairHistory
            valueProps={(val) => setObj({ ...obj, repair: val })}
          />
        </Category>
      )}
      <Category<ReactNode> name={"제조사"} feature={<ForeignCarCheck />}>
        <MadeBtnWrapper valueProps={(val) => setObj({ ...obj, made: val })} />
      </Category>
      <Category<string> name={"차량 사진"} feature={"10개 등록 가능"}>
        <CarPhotos />
      </Category>
      <Category<string>
        name={"가격 제시하기"}
        feature={"희망 가격을 제시해 주세요"}
      >
        <PriceInput valueProps={(val) => setObj({ ...obj, price: val })} />
      </Category>
      <__Footer>
        <Button
          text={{ name: "초기화", value: "" }}
          width={"100%"}
          on={false}
          onClick={() =>
            setObj({
              accident: true,
              repair: "",
              made: "",
              price: "",
            })
          }
        />
        <Button
          text={{ name: "임시저장", value: "" }}
          width={"100%"}
          on={true}
        />
      </__Footer>
    </__Form>
  );
};

const __Form = styled.form`
  width: 100%;
  & > div:first-child {
    margin-top: 1.7rem;
  }
`;
const __Footer = styled.div`
  display: flex;
  justify-content: space-between;

  button {
    flex-basis: 49%;
  }
`;
export default FormWrapper;
