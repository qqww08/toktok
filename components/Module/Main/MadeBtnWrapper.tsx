import React, { useEffect, useState } from "react";
import Button from "~/components/Module/Main/Button";
import styled from "styled-components";
import useFormForceReset from "~/hooks/useFormForceReset";
import { ValueProps } from "~/interfaces";
const madeIn = [
  { name: "현대", value: "hyundai" },
  { name: "르노 삼성", value: "samsung", foreign: true },
  { name: "기아", value: "kia" },
  { name: "쌍용", value: "ssangyong" },
  { name: "GM 대우", value: "daewoo" },
  { name: "기타", value: "other" },
];
interface Props extends ValueProps<string> {
  foreign: boolean;
}
/**
 * 제조사 카테고리
 * @param valueProps = data props
 * @param forceUpdate = update
 * @param foreign = 외제차 확인
 * */
const MadeBtnWrapper = ({ valueProps, forceUpdate, foreign }: Props) => {
  const [on, setOn] = useState<number>(0);
  useFormForceReset<number>(setOn, forceUpdate, 0);
  useEffect(() => {
    valueProps(madeIn[on]?.value);
  }, [on]);
  return (
    <__Wrapper>
      {madeIn.map((item, index) =>
        foreign ? (
          item.foreign && (
            <Button
              width="100%"
              on={on === index}
              text={item}
              key={index}
              onClick={() => setOn(index)}
            />
          )
        ) : (
          <Button
            width="100%"
            on={on === index}
            text={item}
            key={index}
            onClick={() => setOn(index)}
          />
        )
      )}
    </__Wrapper>
  );
};
const __Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  button {
    flex-basis: 32.07%;
  }
  button:nth-child(-n + 3) {
    margin-bottom: 0.7rem;
  }
`;
export default MadeBtnWrapper;
