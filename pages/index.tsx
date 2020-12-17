import { NextPage } from "next";
import React from "react";
import { State, wrapper } from "~/createStore";
import { getAction } from "~/store/action";
import { connect } from "react-redux";

const Index: NextPage<State> = () => {
  // const dispatch = useDispatch();
  // dispatch(getAction());

  return <div></div>;
};

export default connect((state: State) => state)(Index);
