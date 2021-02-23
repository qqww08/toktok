import React, { useEffect, useState } from "react";
import Button from "~/components/Module/Main/Button";
import styled from "styled-components";
import useFormForceReset from "~/hooks/useFormForceReset";
import { ValueProps } from "~/interfaces";

const text = [
  { name: "사고 이력 있음", value: true },
  { name: "사고 이력 없음", value: false },
];
/**
 * 사고이력
 * @param valueProps = data props
 * @param forceUpdate = update
 * */
const AccidentHistory = ({ valueProps, forceUpdate }: ValueProps<boolean>) => {
  const [on, setOn] = useState<number>(0);
  useFormForceReset<number>(setOn, forceUpdate, 0);
  useEffect(() => {
    valueProps(text[on].value);
  }, [on]);
  useEffect(() => {
    setOn(0);
  }, [forceUpdate]);
  return (
    <__AccidentWrapper>
      {text.map((item, index) => (
        <Button
          width="100%"
          on={on === index}
          text={item}
          key={index}
          onClick={() => setOn(index)}
        />
      ))}
    </__AccidentWrapper>
  );
};
const __AccidentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  button {
    flex-basis: 48.98%;
  }
`;
export default AccidentHistory;
