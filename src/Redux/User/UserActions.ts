import { SET_USER } from './Constants';

export const setUser = (user: User | null) => ({
	type: SET_USER,
	payload: user
});
