import { call, put, takeLatest } from 'redux-saga/effects';
import axios, { AxiosResponse } from 'axios';
import { actionTypes, getActionSuccess, getActionFail } from './action';
import { SagaIterator } from 'redux-saga';
function* getActionSaga(action): SagaIterator {
  try {
    const res = '123';
    yield put(getActionSuccess(res));
  } catch (err) {
    yield put(getActionFail(err));
  }
}
function* actionSaga(): SagaIterator {
  yield takeLatest(actionTypes.GET_ACTION, getActionSaga);
}
export default actionSaga;
