import { Dispatch } from 'redux';
import {
	convertCollectionsSnapshotToMap,
	firestore
} from '../../Firebase/firebase.utils';
import { FetchCollections, UPDATE_COLLECTION } from './Shop.Constants';

export const updateCollection = (collections: Collections) => ({
	type: UPDATE_COLLECTION,
	payload: collections
});

export const fetchCollectionsStart = () => ({
	type: FetchCollections.FETCH_COLLECTIONS_START
});

export const fetchCollectionsSuccess = (collections: Collections) => ({
	type: FetchCollections.FETCH_COLLECTIONS_SUCCESS,
	payload: collections
});

export const fetchCollectionsError = (error: string) => ({
	type: FetchCollections.FETCH_COLLECTIONS_ERROR,
	payload: error
});

export const fetchCollectionsStarter = () => (dispatch: Dispatch) => {
	const collectionRef = firestore.collection('collections');
	dispatch(fetchCollectionsStart());

	collectionRef
		.get()
		.then(async snapshot => {
			const collection = convertCollectionsSnapshotToMap(snapshot);
			dispatch(fetchCollectionsSuccess(collection));
		})
		.catch(err => dispatch(fetchCollectionsError(err.message)));
};
