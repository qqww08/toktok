import React, { ReactNode, useEffect, useState } from "react";
import Category from "~/components/Module/Main/Category";
import AccidentHistory from "~/components/Module/Main/AccidentHistory";
import RepairHistory from "~/components/Module/Main/RepairHistory";
import ForeignCarCheck from "~/components/Module/Main/ForeignCarCheck";
import MadeBtnWrapper from "~/components/Template/Main/MadeBtnWrapper";
import CarPhotos from "~/components/Module/Main/CarPhotos";
import PriceInput from "~/components/Module/Main/PriceInput";
import styled from "styled-components";
import { getCarData } from "~/store/global/actions";
import Button from "~/components/Module/Main/Button";
import { useDispatch, useSelector } from "react-redux";
import { State } from "~/interfaces";
import MaximumPhoto from "~/components/Module/Main/MaximumPhoto";
import useLocalStorage from "~/hooks/useLocalStorage";
import Snackbar, { SnackbarOrigin } from "@material-ui/core/Snackbar";
import themes from "~/styles/themes";
import { __Snackbar } from "~/styles/global-styles";
import moment from "moment";
export interface AlertState extends SnackbarOrigin {
  open: boolean;
}
const FormWrapper = ({ idx }: { idx: number }) => {
  const carData = useSelector((state: State) => state.getGlobal.carData);
  const dispatch = useDispatch();
  const [message, setMessage] = useState<boolean>(false);
  const [foreign, setForeign] = useState<boolean>(false);
  const [accident, setAccident] = useState<boolean>(true);
  const [repair, setRepair] = useState<string>("");
  const [made, setMade] = useState<string>("");
  const [price, setPrice] = useState<string>("");
  const [photo, setPhoto] = useState<string[] | null>(null);
  const [forceUpdate, setForceUpdate] = useState<boolean>(false);
  const [state, setState] = useState<AlertState>({
    open: false,
    vertical: "bottom",
    horizontal: "center",
  });
  // 로컬스토리지 hooks
  const [, setLocal] = useLocalStorage(`save`, true);
  useEffect(() => {
    const state = {
      accident: accident,
      repair: repair,
      made: made,
      price: price,
      photo: photo,
    };

    carData[idx] = state;
    dispatch(getCarData([...carData, ...carData.splice(idx, 0, state)]));
  }, [accident, repair, price, made, photo]);
  // 초기화 기능
  const resetHandler = () => {
    setForceUpdate(!forceUpdate);
    setForeign(false);
  };
  //임시저장 기능
  const localStorageHandler = () => {
    setState({ ...state, open: true });
    setTimeout(() => {
      setState({ ...state, open: false });
    }, 3000);
    setMessage(true);
    setLocal(carData[idx]);
  };
  const { vertical, horizontal, open } = state;
  return (
    <__Form>
      <Category name={"사고이력"}>
        <AccidentHistory
          valueProps={(val) => setAccident(val)}
          forceUpdate={forceUpdate}
        />
      </Category>
      {carData[idx].accident && (
        <Category name={"수리내역"}>
          <RepairHistory
            valueProps={(val) => setRepair(val)}
            forceUpdate={forceUpdate}
          />
        </Category>
      )}
      <Category<ReactNode>
        name={"제조사"}
        feature={
          <ForeignCarCheck
            onChange={() => setForeign(!foreign)}
            idx={idx}
            forceUpdate={forceUpdate}
          />
        }
      >
        <MadeBtnWrapper
          valueProps={(val) => setMade(val)}
          foreign={foreign}
          forceUpdate={forceUpdate}
        />
      </Category>
      <Category<ReactNode>
        name={"차량 사진"}
        feature={<MaximumPhoto idx={idx} />}
      >
        <CarPhotos
          valueProps={(val) => setPhoto(val)}
          idx={idx}
          forceUpdate={forceUpdate}
        />
      </Category>
      <Category<string>
        name={"가격 제시하기"}
        feature={"희망 가격을 제시해 주세요"}
      >
        <PriceInput
          valueProps={(val) => setPrice(val)}
          forceUpdate={forceUpdate}
        />
      </Category>
      <__Footer>
        <Button
          text={{ name: "초기화", value: "" }}
          width={"100%"}
          on={false}
          onClick={() => {
            resetHandler();
          }}
        />
        <Button
          text={{ name: "임시저장", value: "" }}
          width={"100%"}
          on={true}
          onClick={localStorageHandler}
        />
      </__Footer>
      {message && (
        <__SaveMessage>{`${moment().format(
          "YYYY.MM.DD HH:DD"
        )}에 임시저장 되었습니다.`}</__SaveMessage>
      )}
      <Snackbar
        className="snackbar"
        anchorOrigin={{ vertical, horizontal }}
        open={open}
        message={`${moment().format(
          "YYYY.MM.DD HH:DD"
        )}에 임시저장 되었습니다.`}
        key={vertical + horizontal}
      />
    </__Form>
  );
};

const __Form = styled.form`
  width: 100%;
  ${__Snackbar}
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
const __SaveMessage = styled.p`
  margin-top: 1.7rem;
  text-align: center;
  font-size: 1.3rem;
  line-height: 2.2rem;
  letter-spacing: -0.46px;
  color: ${themes.color.brownGrey};
`;
export default FormWrapper;
