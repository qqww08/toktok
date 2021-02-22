import { Action, actionTypes } from "./actions";

export interface GlobalInterfaces {
  carData: any;
}

export const initialState: any = {
  carData: [
    {
      accident: true,
      repair: "",
      made: "",
      price: "",
    },
  ],
};

const getGlobal = (state = initialState, action: Action): GlobalInterfaces => {
  console.log(state);
  switch (action.type) {
    case actionTypes.GET_CAR:
      return {
        ...state,
        carData: action.carData,
      };

    default:
      return state;
  }
};

export default getGlobal;
