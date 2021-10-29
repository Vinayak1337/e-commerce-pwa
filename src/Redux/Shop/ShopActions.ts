import { UPDATE_COLLECTION } from './ShopConstants';

export const updateCollection = (collections: Collections) => ({
	type: UPDATE_COLLECTION,
	payload: collections
});
