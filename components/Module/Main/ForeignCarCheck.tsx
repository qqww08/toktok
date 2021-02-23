import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import themes from "~/styles/themes";
import { FlexCenter } from "~/styles/global-styles";
import useFormForceReset from "~/hooks/useFormForceReset";
interface Props {
  onChange: () => void;
  forceUpdate: boolean;
  idx: number;
}
/**
 * 사고이력 카테고리
 * @param onChange = data props
 * @param forceUpdate = update
 * @param idx = detail index
 * */
const ForeignCarCheck = ({ onChange, forceUpdate, idx }: Props) => {
  const checkBoxRef = useRef<HTMLInputElement>(null);
  const [check, setCheck] = useState<boolean>(false);
  useFormForceReset<boolean>(setCheck, forceUpdate, false);
  return (
    <__Wrapper>
      <__Text>외제차의 경우 체크하세요</__Text>
      <__CheckboxLabel htmlFor={`ckbox${idx}`}>
        <__CheckBox
          id={`ckbox${idx}`}
          type="checkbox"
          checked={check}
          onChange={() => {
            onChange(), setCheck(!check);
          }}
          ref={checkBoxRef}
        />
        {check && <__Checked />}
      </__CheckboxLabel>
    </__Wrapper>
  );
};
// ✔
const __Wrapper = styled.div`
  display: flex;
  align-items: center;
`;
const __CheckboxLabel = styled.label`
  ${FlexCenter};
  position: relative;
  border: 0.1rem solid ${themes.color.veryLightPink};
  width: 1.8rem;
  height: 1.8rem;
`;
const __Checked = styled.div`
  &:before {
    z-index: 100;
    content: "✔";
    position: absolute;
    color: ${themes.color.darkSkyBlue};
    font-size: 2rem;
    left: 0;
    top: -0.5rem;
  }
`;
const __Text = styled.p`
  font-size: 1.3rem;
  line-height: 2.2rem;
  color: ${themes.color.brownGrey};
  margin-right: 1.1rem;
`;
const __CheckBox = styled.input`
  opacity: 0;
  margin: 0;
`;
export default ForeignCarCheck;
