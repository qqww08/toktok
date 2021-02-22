import React from "react";
import styled from "styled-components";
import themes from "~/styles/themes";
interface Props {
  onClick: () => void;
}
const AddCarBtn = ({ onClick }: Props) => {
  return (
    <>
      <__Button onClick={() => onClick()}>
        <__Img src="/images/blue-plus.png" />
        <__Text>중고 차량 추가하기</__Text>
      </__Button>
    </>
  );
};
const __Button = styled.a`
  margin-top: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 4.7rem;
  border-radius: 8px;
  background: #f7f7f7;
`;
const __Img = styled.img`
  width: 2.4rem;
  height: 2.4rem;
`;
const __Text = styled.p`
  font-size: 1.5rem;
  line-height: 2.2rem;
  letter-spacing: -0.62px;
  color: ${themes.color.darkSkyBlue};
`;
export default AddCarBtn;
