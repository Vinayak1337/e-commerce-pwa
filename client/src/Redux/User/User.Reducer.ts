import {
	INITIAL_STATE,
	SET_USER,
	userAuthentication,
	userSingnOut
} from './User.Constants';

export const userReducer = (
	state = INITIAL_STATE,
	action: UserReducerActions
) => {
	switch (action.type) {
		case SET_USER:
			return {
				...state,
				user: action.payload,
				error: null
			};

		case userAuthentication.AUTHENTICATION_SUCCESS:
			return { ...state, user: action.payload, error: null };

		case userAuthentication.AUTHENTICATION_FAILURE:
		case userSingnOut.SIGN_OUT_FAILURE:
			return { ...state, error: action.payload };

		case userSingnOut.SIGN_OUT_SUCCESS:
			return { ...state, user: null, error: null };

		default:
			return state;
	}
};

type UserReducerActions =
	| {
			type: 'set_user';
			payload: User | null;
	  }
	| {
			type: typeof userAuthentication.AUTHENTICATION_SUCCESS;
			payload: User;
	  }
	| {
			type: typeof userAuthentication.AUTHENTICATION_FAILURE;
			payload: string;
	  }
	| {
			type: typeof userSingnOut.SIGN_OUT_FAILURE;
			payload: string;
	  }
	| {
			type: typeof userSingnOut.SIGN_OUT_SUCCESS;
			payload?: never;
	  }
	| {
			type: typeof userSingnOut.SIGN_OUT_FAILURE;
			payload: string;
	  };
