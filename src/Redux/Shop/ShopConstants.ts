import { Sections as sections } from '../../Assets/data';

export const SET_COLLECTION = 'set_collection';

export const SET_SECTIONS = 'set_sections';

export const UPDATE_COLLECTION = 'update_collection';

export const INITIAL_SHOP_STATE: ShopReducer = {
	sections,
	collections: null
};
