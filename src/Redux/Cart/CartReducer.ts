import {
	ADD_CART_ITEM,
	CART_INITIAL_STATE,
	CLEAR_CART,
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
			return {
				...state,
				cartItems: addItemToCart(state.cartItems, action.payload)
			};

		case REMOVE_CART_ITEM:
			return {
				...state,
				cartItems: removeItemFromCart(state.cartItems, action.payload)
			};

		case CLEAR_CART:
			return {
				...state,
				cartItems: []
			};

		default:
			return state;
	}
};

const addItemToCart = (cartItems: CartItem[], cartItem: CartItem) => {
	const existtingItem = cartItems.find(item => item.id === cartItem.id);

	if (!existtingItem) return [...cartItems, cartItem];

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
					? { ...cartItem, quantity: item.quantity - cartItem.quantity }
					: item
		)
		.filter(item => (!item ? false : item.quantity > 0));

type CartReducerActions =
	| {
			type: 'set_dropdown_visibility';
		}
	| {
			type: 'add_cart_item';
			payload: CartItem;
		}
	| {
			type: 'remove_cart_item';
			payload: CartItem;
		}
	| {
			type: 'clear_cart';
		};
