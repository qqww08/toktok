import { actionTypes, Action } from './action';
import { ActionInterface } from './interface';
export interface ActionInterfaces {
  data: ActionInterface;
  isLoading: boolean;
  isLoaded: boolean;
  error: string;
}
export const initialState: any = {
  data: null,
  isLoading: false,
  isLoaded: false,
  error: null,
};
const getAction = (state = initialState, action: Action): ActionInterfaces => {
  switch (action.type) {
    case actionTypes.GET_ACTION:
      return {
        ...state,
        isLoading: true,
      };
    case actionTypes.GET_ACTION_SUCCESS:
      return {
        ...state,
        data: action.data,
        isLoading: false,
      };
    case actionTypes.GET_ACTION_FAIL:
      return {
        ...state,
        error: 'test',
        isLoading: false,
      };
    default:
      return state;
  }
};
export default getAction;
