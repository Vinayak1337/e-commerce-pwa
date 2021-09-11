import {
	ADD_CART_ITEM,
	REMOVE_CART_ITEM,
	SET_DROPDOWN_VISIBILITY
} from './CartConstants';

export const toggleDropdown = () => ({
	type: SET_DROPDOWN_VISIBILITY
});

export const addCartItem = (cartItem: CartItem) => ({
	type: ADD_CART_ITEM,
	payload: cartItem
});

export const removeCartItem = (cartItem: CartItem) => ({
	type: REMOVE_CART_ITEM,
	payload: cartItem
});
