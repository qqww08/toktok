import React, { ReactNode } from "react";
import styled from "styled-components";
import themes from "~/styles/themes";
interface Props {
  children: ReactNode;
}
const Header = ({ children }: Props) => {
  return (
    <__HeaderWrapper>
      <__Title>똑똑한 중고차</__Title>
      {children}
    </__HeaderWrapper>
  );
};
const __HeaderWrapper = styled.div`
  padding: 0.6rem 1.6rem 7rem;
`;
const __Title = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  color: ${themes.color.darkSkyBlue};
  line-height: 2.9rem;
  text-align: center;
`;
export default Header;
