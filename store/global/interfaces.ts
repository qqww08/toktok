import { actionTypes } from "./actions";

export interface GetCar {
  type: actionTypes.GET_CAR;
  carData: any;
}
