export const INITIAL_STATE: AppState = {
	user: null
};

interface AppState {
	user: null | User;
}

export const SET_USER = 'set_user';
