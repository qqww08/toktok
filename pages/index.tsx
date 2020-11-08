import { NextPage } from 'next';
import React from 'react';
import { wrapper } from '../createStore';
import { getAction } from '../store/action';
import styled from '../styles/common/themed-components';

const Index: NextPage = () => {
  // const dispatch = useDispatch();
  // dispatch(getAction());
  const Input = styled.div`
    color: #6700ce;
  `;
  return (
    <div>
      <Input>123</Input>
    </div>
  );
};
wrapper.getServerSideProps(async (ctx) => {
  ctx.store.dispatch(getAction());
});
export default Index;
