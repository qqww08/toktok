import { combineReducers } from 'redux';
import getAction, { initialState as action } from './store/reducer';
import { HYDRATE } from 'next-redux-wrapper';
import { State } from './interfaces';
export const initialState = { getAction: action };

export default combineReducers({
  index: (state: State = initialState, action) => {
    console.log(state);
    switch (action.type) {
      case HYDRATE:
        return {
          ...state,
          ...action.payload,
        };
      default:
        return state;
    }
  },
  getAction,
});
