import * as actionIs from "./interfaces";

export enum actionTypes {
  GET_CAR = "GET_CAR",
  FORCE_UPDATE = "FORCE_UPDATE",
}

export type Action = actionIs.GetCar | actionIs.ForceUpdate;

export function getCarData(carData): actionIs.GetCar {
  return {
    type: actionTypes.GET_CAR,
    carData,
  };
}

export function forceUpdate(update): actionIs.ForceUpdate {
  return {
    type: actionTypes.FORCE_UPDATE,
    update,
  };
}
