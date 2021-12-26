import { all, call } from '@redux-saga/core/effects';
import { cartSagas } from './Cart/Cart.Saga';
import { shopSagas } from './Shop/Shop.Saga';
import { userSagas } from './User/User.Saga';

export default function* rootSaga() {
	yield all([call(shopSagas), call(userSagas), call(cartSagas)]);
}
