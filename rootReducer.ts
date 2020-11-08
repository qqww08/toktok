import { combineReducers } from 'redux';
import getAction, { initialState as action } from './store/reducer';
export const initialState = { getAction: action };

export default combineReducers({ getAction });
