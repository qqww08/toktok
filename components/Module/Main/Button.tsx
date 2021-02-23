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
/**
 * Custom Button
 * @param text = 문구
 * @param width = width 크기
 * */
const Button = ({ text, width, on, onClick }: Props) => {
  return (
    <__ButtonWrapper
      width={width}
      on={on.toString()}
      onClick={() => onClick()}
      type="button"
    >
      {text.name}
    </__ButtonWrapper>
  );
};
const __ButtonWrapper = styled.button<{ width: string; on: string }>`
  font-size: 1.5rem;
  font-weight: bold;
  line-height: 2.2rem;
  width: ${(props) => props.width};
  height: 4.7rem;
  border: 0.1rem solid ${themes.color.darkSkyBlue};
  color: ${(props) =>
    props.on === "true" ? themes.color.white : themes.color.darkSkyBlue};
  background: ${(props) =>
    props.on === "true" ? themes.color.darkSkyBlue : themes.color.white};
  border-radius: 8px;
`;
export default Button;
