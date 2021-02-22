import * as actionIs from "./interfaces";

export enum actionTypes {
  GET_CAR = "GET_CAR",
}

export type Action = actionIs.GetCar;

export function getCarData(carData): actionIs.GetCar {
  return {
    type: actionTypes.GET_CAR,
    carData,
  };
}
