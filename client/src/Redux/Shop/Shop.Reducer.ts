import {
	FetchCollections,
	INITIAL_SHOP_STATE,
	UPDATE_COLLECTION
} from './Shop.Constants';

export const shopReducer = (
	state = INITIAL_SHOP_STATE,
	action: ShopActions
) => {
	switch (action.type) {
		case UPDATE_COLLECTION:
			return { ...state, collections: action.payload };

		case FetchCollections.FETCH_COLLECTIONS_START:
			return { ...state, isFetching: true };

		case FetchCollections.FETCH_COLLECTIONS_SUCCESS:
			return { ...state, isFetching: false, collections: action.payload };

		case FetchCollections.FETCH_COLLECTIONS_ERROR:
			return { ...state, isFetching: false, errorMessage: action.payload };

		default:
			return { ...state };
	}
};

type ShopActions =
	| {
			type: typeof UPDATE_COLLECTION;
			payload: Collections;
		}
	| {
			type: typeof FetchCollections.FETCH_COLLECTIONS_START;
			payload?: null;
		}
	| {
			type: typeof FetchCollections.FETCH_COLLECTIONS_SUCCESS;
			payload: Collections;
		}
	| {
			type: typeof FetchCollections.FETCH_COLLECTIONS_ERROR;
			payload: string;
		};
