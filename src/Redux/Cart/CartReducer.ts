import { CART_INITIAL_STATE, SET_DROPDOWN_VISIBILITY } from './CartConstants';

export const cartReducer = (
	state = CART_INITIAL_STATE,
	action: CartReducerActions
) => {
	switch (action.type) {
		case SET_DROPDOWN_VISIBILITY:
			return { ...state, dropdownHidden: !state.dropdownHidden };

		default:
			return state;
	}
};
