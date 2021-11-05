import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import { persistStore } from 'redux-persist';
import createSagamiddleware from 'redux-saga';

import { persistCombined } from './Root.Reducer';
import rootSaga from './Saga.Root';

const sagaMiddleWare = createSagamiddleware();

const middlewares = [];
if (process.env.NODE_ENV === 'development') middlewares.push(logger);
middlewares.push(sagaMiddleWare);

export const Store = createStore(
	persistCombined,
	applyMiddleware(...middlewares)
);

sagaMiddleWare.run(rootSaga);

export const persistor = persistStore(Store);
