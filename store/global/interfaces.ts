import { actionTypes } from "./actions";

export interface GetCar {
  type: actionTypes.GET_CAR;
  carData: any;
}
export interface ForceUpdate {
  type: actionTypes.FORCE_UPDATE;
  update: any;
}
