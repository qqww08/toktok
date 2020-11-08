import { AnyAction, applyMiddleware, createStore, Middleware, StoreEnhancer } from 'redux';
import { MakeStore, createWrapper, Context, HYDRATE } from 'next-redux-wrapper';
import createSagaMiddleware from 'redux-saga';
import rootReducer, { initialState } from './rootReducer';
import rootSaga from './rootSaga';
import { WithSagaTaskStore } from './interfaces';

const bindMiddleware = (middleware: Middleware[]): StoreEnhancer => {
  if (process.env.NODE_ENV !== 'production') {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const { composeWithDevTools } = require('redux-devtools-extension');
    return composeWithDevTools(applyMiddleware(...middleware));
  }
  return applyMiddleware(...middleware);
};

export interface State {
  data: string;
}
// export const reducer = (state = initialState, action: AnyAction) => {
//   switch (action.type) {
//     case HYDRATE:
//       // Attention! This will overwrite client state! Real apps should use proper reconciliation.
//       return { ...state, ...action.payload };
//     default:
//       return state;
//   }
// };
// create a makeStore function
const makeStore: MakeStore<State> = (context: Context): WithSagaTaskStore => {
  const sagaMiddleware = createSagaMiddleware();
  const store: WithSagaTaskStore = createStore(rootReducer, bindMiddleware([sagaMiddleware]));
  store.sagaTask = sagaMiddleware.run(rootSaga);

  return store;
};
// export an assembled wrapper
export const wrapper = createWrapper<State>(makeStore, { debug: true });
