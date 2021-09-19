import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import { persistStore } from 'redux-persist';

import { persistCombiner } from './RootReducer';

const middlewares = [logger];

export const Store = createStore(
	persistCombiner,
	applyMiddleware(...middlewares),
);

export const persistor = persistStore(Store);
