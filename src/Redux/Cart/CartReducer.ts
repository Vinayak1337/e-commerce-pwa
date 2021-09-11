import {
	ADD_CART_ITEM,
	CART_INITIAL_STATE,
	REMOVE_CART_ITEM,
	SET_DROPDOWN_VISIBILITY
} from './CartConstants';

export const cartReducer = (
	state = CART_INITIAL_STATE,
	action: CartReducerActions
) => {
	switch (action.type) {
		case SET_DROPDOWN_VISIBILITY:
			return { ...state, dropdownHidden: !state.dropdownHidden };

		case ADD_CART_ITEM:
			return { ...state, cartItems: addItemToCart(state.cartItems, action.payload) };

		case REMOVE_CART_ITEM:
			return {
				...state,
				cartItems: removeItemFromCart(state.cartItems, action.payload)
			};

		default:
			return state;
	}
};

const addItemToCart = (cartItems: CartItem[], cartItem: CartItem) => {
	const existtingItem = cartItems.find(item => item.id === cartItem.id);

	if (!existtingItem) {
		cartItems.push(cartItem);
		return cartItems;
	}

	return cartItems.map(
		item =>
			item.id === cartItem.id
				? { ...cartItem, quantity: item.quantity + cartItem.quantity }
				: item
	);
};

const removeItemFromCart = (cartItems: CartItem[], cartItem: CartItem) =>
	cartItems
		.map(
			item =>
				item.id === cartItem.id
					? item.quantity > 1
						? { ...cartItem, quantity: item.quantity - cartItem.quantity }
						: null
					: item
		)
		.filter(item => (!item ? false : item.quantity > 0));
