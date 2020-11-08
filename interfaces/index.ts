import { Store } from 'redux';
import { Task } from 'redux-saga';
import { ActionInterfaces } from '../store/reducer';
export interface WithSagaTaskStore extends Store {
  sagaTask?: Task;
}

// TODO add state interface
export interface State {
  getAction: ActionInterfaces;
}
