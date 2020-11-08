import { all, AllEffect } from 'redux-saga/effects';

import { SagaIterator } from 'redux-saga';
import actionSaga from './store/saga';

export default function* rootSaga(): Generator<AllEffect<SagaIterator>> {
  yield all([actionSaga()]);
}
