import React, { ReactNode } from "react";
import styled from "styled-components";
import themes from "~/styles/themes";

interface Props<T> {
  name: string;
  feature?: T;
  children: ReactNode;
}
function Category<T>({ name, feature, children }: Props<T>) {
  return (
    <>
      <__CategoryWrapper>
        <__Name>{name}</__Name>
        {feature && <__Features>{feature}</__Features>}
      </__CategoryWrapper>
      <__Contents>{children}</__Contents>
    </>
  );
}
const __CategoryWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.2rem;
`;
const __Name = styled.p`
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 2.2rem;
  color: ${themes.color.greyishBrown};
`;
const __Features = styled.div`
  font-size: 1.3rem;
  line-height: 2.2rem;
  color: ${themes.color.brownGrey};
  letter-spacing: -0.46pt;
`;
const __Contents = styled.div`
  margin-bottom: 2rem;
`;
export default Category;
