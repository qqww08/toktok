import React from "react";
import styled from "styled-components";
import themes from "~/styles/themes";
interface Props {
  text: {
    name: string;
    value?: string | boolean;
  };
  width: string;
  on: boolean;
  onClick?: () => void;
}
const Button = ({ text, width, on, onClick }: Props) => {
  return (
    <__ButtonWrapper
      width={width}
      on={on}
      onClick={() => onClick()}
      type="button"
    >
      {text.name}
    </__ButtonWrapper>
  );
};
const __ButtonWrapper = styled.button<{ width: string; on: boolean }>`
  font-size: 1.5rem;
  font-weight: bold;
  line-height: 2.2rem;
  width: ${(props) => props.width};
  height: 4.7rem;
  border: 0.1rem solid ${themes.color.darkSkyBlue};
  color: ${(props) =>
    props.on ? themes.color.white : themes.color.darkSkyBlue};
  background: ${(props) =>
    props.on ? themes.color.darkSkyBlue : themes.color.white};
  border-radius: 8px;
`;
export default Button;
