import { userAuthentication, SET_USER, userSingnOut } from './User.Constants';

export const setUser = (user: User | null) => ({
	type: SET_USER,
	payload: user
});

export const googleSignInStart = () => ({
	type: userAuthentication.GOOGLE_SIGN_IN_START
});

export const emailSignInStart = (credidentials: Credentials) => ({
	type: userAuthentication.EMAIL_SIGN_IN_START,
	payload: credidentials
});

export const signUpStart = (credidentials: SignUpCredentials) => ({
	type: userAuthentication.EMAIL_SIGN_UP_START,
	payload: credidentials
});

export const authenticationSuccess = (user: User) => ({
	type: userAuthentication.AUTHENTICATION_SUCCESS,
	payload: user
});

export const authenticationFailure = (error: string) => ({
	type: userAuthentication.AUTHENTICATION_FAILURE,
	payload: error
});

export const signOutStart = () => ({ type: userSingnOut.SIGN_OUT_START });

export const signOutSuccess = () => ({ type: userSingnOut.SIGN_OUT_SUCCESS });

export const signOutFailure = (error: string) => ({
	type: userSingnOut.SIGN_OUT_FAILURE,
	payload: error
});

export const hasSession = () => ({ type: userAuthentication.HAS_SESSION });
