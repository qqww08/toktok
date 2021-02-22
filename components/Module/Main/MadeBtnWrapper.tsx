import React, { useEffect, useState } from "react";
import Button from "~/components/Module/Main/Button";
import styled from "styled-components";
const madeIn = [
  { name: "현대", value: "hyundai" },
  { name: "르노 삼성", value: "samsung" },
  { name: "기아", value: "kia" },
  { name: "쌍용", value: "ssangyong" },
  { name: "GM 대우", value: "daewoo" },
  { name: "기타", value: "other" },
];
const MadeBtnWrapper = ({ valueProps }) => {
  const [on, setOn] = useState<number>(0);
  useEffect(() => {
    valueProps(madeIn[on].value);
  }, [on]);
  return (
    <__Wrapper>
      {madeIn.map((item, index) => (
        <Button
          width="100%"
          on={on === index}
          text={item}
          key={index}
          onClick={() => setOn(index)}
        />
      ))}
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
