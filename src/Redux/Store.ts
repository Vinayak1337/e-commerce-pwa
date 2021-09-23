import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import { persistStore } from 'redux-persist';

import { persistCombined } from './RootReducer';

const middlewares = [];

if (process.env.NODE_ENV === 'production') middlewares.push(logger);

export const Store = createStore(
	persistCombined,
	applyMiddleware(...middlewares)
);

export const persistor = persistStore(Store);
