import { combineReducers } from 'redux';
import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage';
import { cartReducer } from './Cart/CartReducer';
import { shopReducer } from './Shop/ShopReducer';
import { userReducer } from './User/UserReducer';

const persistConfig = {
	key: 'root',
	storage,
	whitelist: ['cartReducer'],
};

export const rootReducer = combineReducers({
	userReducer,
	cartReducer,
	shopReducer,
});

export const persistCombined = persistReducer(persistConfig, rootReducer);
