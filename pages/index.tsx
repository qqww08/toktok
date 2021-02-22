import { NextPage } from "next";
import React from "react";
import { WithReduxNextPageContext } from "~/interfaces";
import MainPage from "~/components/Template/Main/MainPage";
import Header from "~/layout/Header";

const Index: NextPage = () => {
  return (
    <Header>
      <MainPage />
    </Header>
  );
};
Index.getInitialProps = async ({ store, req }: WithReduxNextPageContext) => {
  return {};
};
export default Index;
