export const INITIAL_STATE: AppState = {
	user: null,
	error: null
};

interface AppState {
	user: null | User;
	error: null | string;
}

export const SET_USER = 'set_user';

export const userAuthentication = {
	HAS_SESSION: 'HAS_SESSION',
	GOOGLE_SIGN_IN_START: 'GOOGLE_SIGN_IN_START',
	EMAIL_SIGN_IN_START: 'EMAIL_SIGN_IN_START',
	EMAIL_SIGN_UP_START: 'EMAIL_SIGN_UP_START',
	AUTHENTICATION_SUCCESS: 'AUTHENTICATION_SUCCESS',
	AUTHENTICATION_FAILURE: 'AUTHENTICATION_FAILURE'
};

export const userSingnOut = {
	SIGN_OUT_START: 'SIGN_OUT_START',
	SIGN_OUT_SUCCESS: 'SIGN_OUT_SUCCESS',
	SIGN_OUT_FAILURE: 'SIGN_OUT_FAILURE'
};
