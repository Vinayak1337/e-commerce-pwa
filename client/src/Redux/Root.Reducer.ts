import { combineReducers } from 'redux';
import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage';
import { cartReducer } from './Cart/Cart.Reducer';
import { shopReducer } from './Shop/Shop.Reducer';
import { userReducer } from './User/User.Reducer';

const persistConfig = {
	key: 'root',
	storage,
	whitelist: ['cartReducer']
};

export const rootReducer = combineReducers({
	userReducer,
	cartReducer,
	shopReducer
});

export const persistCombined = persistReducer(persistConfig, rootReducer);
