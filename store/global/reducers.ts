import { Action, actionTypes } from "./actions";

export interface GlobalInterfaces {
  carData: any;
  update: null | number;
}

export const initialState: any = {
  carData: [
    {
      accident: true,
      repair: "",
      made: "",
      price: "",
      photo: null,
    },
  ],
  update: null,
};

const getGlobal = (state = initialState, action: Action): GlobalInterfaces => {
  switch (action.type) {
    case actionTypes.GET_CAR:
      return {
        ...state,
        carData: action.carData,
      };
    case actionTypes.FORCE_UPDATE:
      return {
        ...state,
        update: action.update,
      };

    default:
      return state;
  }
};

export default getGlobal;
