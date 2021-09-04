import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';

import rootReducer from './RootReducer';

const middlewares = [logger];

export const Store = createStore(rootReducer, applyMiddleware(...middlewares));
