import { all, put, takeLatest, call } from '@redux-saga/core/effects';
import { userSingnOut } from '../User/User.Constants';
import { clearCart } from './Cart.Actions';

export function* clearCartOnSignOut() {
	yield put(clearCart());
}

export function* onSignOutSuccess() {
	yield takeLatest(userSingnOut.SIGN_OUT_SUCCESS, clearCartOnSignOut);
}

export function* cartSagas() {
	yield all([call(onSignOutSuccess)]);
}
