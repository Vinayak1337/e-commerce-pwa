import { INITIAL_SHOP_STATE, UPDATE_COLLECTION } from './ShopConstants';

export const shopReducer = (
	state = INITIAL_SHOP_STATE,
	action: ShopActions
) => {
	switch (action.type) {
		case UPDATE_COLLECTION:
			return { ...state, collections: action.payload };

		default:
			return { ...state };
	}
};

type ShopActions = {
	type: typeof UPDATE_COLLECTION;
	payload: Collection;
};
