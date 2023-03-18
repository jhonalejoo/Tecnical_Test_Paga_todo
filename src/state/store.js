import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from "@redux-saga/core";
import bankReducer from './features/bank/reducers';
import bankSagas from './features/bank/sagas';

const sagaMiddleWare = createSagaMiddleware();

export const store = configureStore({
    reducer: {
      bank:bankReducer
    },
    middleware:[sagaMiddleWare]
  })
  sagaMiddleWare.run(bankSagas)
  
  export default store;