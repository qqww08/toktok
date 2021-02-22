import React, { useEffect, useState } from "react";
import Button from "~/components/Module/Main/Button";
import styled from "styled-components";
const text = [
  { name: "사고 이력 있음", value: true },
  { name: "사고 이력 없음", value: false },
];

const AccidentHistory = ({ valueProps }) => {
  const [on, setOn] = useState<number>(0);

  useEffect(() => {
    valueProps(text[on].value);
  }, [on]);
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
