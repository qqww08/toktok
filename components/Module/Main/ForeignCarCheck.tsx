import React from "react";
import styled from "styled-components";
import themes from "~/styles/themes";

const ForeignCarCheck = () => {
  return (
    <__Wrapper>
      <__Text>외제차의 경우 체크하세요</__Text>
    </__Wrapper>
  );
};
const __Wrapper = styled.div``;
const __Text = styled.p`
  font-size: 1.3rem;
  line-height: 2.2rem;
  color: ${themes.color.brownGrey};
`;
export default ForeignCarCheck;
