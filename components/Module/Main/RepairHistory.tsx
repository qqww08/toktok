import React, { useEffect, useState } from "react";
import styled from "styled-components";
import themes from "~/styles/themes";

const RepairHistory = ({ valueProps }) => {
  const [value, setValue] = useState<string>("");
  useEffect(() => {
    valueProps(value);
  }, [value]);
  return (
    <__TextArea
      placeholder="구체적인 수리 내역을 작성해 주세요."
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};
const __TextArea = styled.textarea`
  padding: 1.1rem 1.3rem;
  resize: none;
  width: 100%;
  height: 9.9rem;
  background: #f7f7f7;
  border: none;
  border-radius: 8px;
  font-size: 1.5rem;
  line-height: 2.2rem;
  color: ${themes.color.black};
  &::placeholder {
    font-size: 1.5rem;
    line-height: 2.2rem;
    color: ${themes.color.brownGrey};
  }
`;
export default RepairHistory;
