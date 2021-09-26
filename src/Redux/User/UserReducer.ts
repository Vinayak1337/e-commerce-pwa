import { INITIAL_STATE, SET_USER } from './Constants';

export const userReducer = (
	state = INITIAL_STATE,
	action: UserReducerActions
) => {
	switch (action.type) {
		case SET_USER:
			return {
				...state,
				user: action.payload
			};

		default:
			return state;
	}
};

interface UserReducerActions {
	type: 'set_user';
	payload: User | null;
}
