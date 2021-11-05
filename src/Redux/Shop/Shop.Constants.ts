import { Sections as sections } from '../../Assets/data';

export const SET_COLLECTION = 'set_collection';

export const SET_SECTIONS = 'set_sections';

export const UPDATE_COLLECTION = 'update_collection';

export const FetchCollections = {
	FETCH_COLLECTIONS_START: 'FETCH_COLLECTIONS_START',
	FETCH_COLLECTIONS_SUCCESS: 'FETCH_COLLECTIONS_SUCCESS',
	FETCH_COLLECTIONS_ERROR: 'FETCH_COLLECTIONS_ERROR'
};

export const INITIAL_SHOP_STATE: ShopReducer = {
	sections,
	collections: null,
	isFetching: false,
	errorMessage: undefined
};
