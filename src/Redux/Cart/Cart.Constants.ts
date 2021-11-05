export const SET_DROPDOWN_VISIBILITY = 'set_dropdown_visibility';

export const ADD_CART_ITEM = 'add_cart_item';

export const REMOVE_CART_ITEM = 'remove_cart_item';

export const CLEAR_CART = 'clear_cart';

export const CART_INITIAL_STATE: CartReducer = {
	dropdownHidden: true,
	cartItems: []
};
