import { combineReducers } from 'redux';
import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage';
import { cartReducer } from './Cart/CartReducer';
import { userReducer } from './User/UserReducer';

const persistConfig = {
	key: 'root',
	storage,
	whitelist: ['cartReducer'],
};

export const rootReducer = combineReducers({
	userReducer,
	cartReducer,
});

export const persistCombiner = persistReducer(persistConfig, rootReducer);
