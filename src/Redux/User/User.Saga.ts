import { all, call, put, takeLatest } from '@redux-saga/core/effects';
import firebase, {
	auth,
	createUser,
	getUserAuth,
	googleProvider
} from '../../Firebase/firebase.utils';
import { userAuthentication, userSingnOut } from './User.Constants';
import {
	authenticationFailure,
	authenticationSuccess,
	signOutFailure,
	signOutSuccess
} from './User.Actions';

export function* getSnapshotFromUserAuth(
	userAuth: firebase.User | null,
	additionalData: { [x: string]: any } = {}
): any {
	try {
		const userDoc = yield call(createUser, userAuth, additionalData);
		const userSnapshot = yield userDoc.get();
		yield put(
			authenticationSuccess({ id: userSnapshot.id, ...userSnapshot.data() })
		);
	} catch (error: any) {
		yield put(authenticationFailure(error.message));
	}
}

export function* signInWithGoogle(): any {
	try {
		const { user } = yield auth.signInWithPopup(googleProvider);
		yield getSnapshotFromUserAuth(user);
	} catch (error: any) {
		yield put(authenticationFailure(error.message));
	}
}

export function* onGoogleSignStart() {
	yield takeLatest(userAuthentication.GOOGLE_SIGN_IN_START, signInWithGoogle);
}

export function* signInWithEmail({
	payload: { email, password }
}: {
	type: Partial<typeof userAuthentication>;
	payload: Credentials;
}): any {
	try {
		const { user } = yield auth.signInWithEmailAndPassword(email, password);
		yield getSnapshotFromUserAuth(user);
	} catch (error: any) {
		yield put(authenticationFailure(error.message));
	}
}

export function* onEmailSignStart() {
	yield takeLatest(userAuthentication.EMAIL_SIGN_IN_START, signInWithEmail);
}
export function* signUp({
	payload: { email, password, displayName }
}: {
	payload: SignUpCredentials;
	type: Partial<typeof userAuthentication>;
}): any {
	try {
		const { user } = yield auth.createUserWithEmailAndPassword(email, password);
		yield getSnapshotFromUserAuth(user, { displayName });
	} catch (error: any) {
		yield put(authenticationFailure(error.message));
	}
}

export function* onSignUpStart() {
	yield takeLatest(userAuthentication.EMAIL_SIGN_UP_START, signUp);
}

export function* isUserAuthenticated(): any {
	try {
		const userAuth = yield getUserAuth();
		if (!userAuth) return;

		yield getSnapshotFromUserAuth(userAuth);
	} catch (error: any) {
		yield put(authenticationFailure(error.message));
	}
}

export function* onHasSession() {
	yield takeLatest(userAuthentication.HAS_SESSION, isUserAuthenticated);
}

export function* SignOut() {
	try {
		yield auth.signOut();
		yield put(signOutSuccess());
	} catch (error: any) {
		yield put(signOutFailure(error.message));
	}
}

export function* onSignOut() {
	yield takeLatest(userSingnOut.SIGN_OUT_START, SignOut);
}

export function* userSagas() {
	yield all([
		call(onGoogleSignStart),
		call(onEmailSignStart),
		call(onHasSession),
		call(onSignOut),
		call(onSignUpStart)
	]);
}
