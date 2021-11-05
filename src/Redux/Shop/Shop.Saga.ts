import { takeLatest, call, put, all } from 'redux-saga/effects';
import {
	convertCollectionsSnapshotToMap,
	firestore
} from '../../Firebase/firebase.utils';
import { fetchCollectionsError, fetchCollectionsSuccess } from './Shop.Actions';
import { FetchCollections } from './Shop.Constants';

export function* fetchCollectionsStarter() {
	try {
		const collectionRef = firestore.collection('collections');
		yield put(
			fetchCollectionsSuccess(
				yield call(convertCollectionsSnapshotToMap, yield collectionRef.get())
			)
		);
	} catch (error: any) {
		yield put(fetchCollectionsError(error.message));
	}
}

export function* fetchCollectionsStart() {
	yield takeLatest(
		FetchCollections.FETCH_COLLECTIONS_START,
		fetchCollectionsStarter
	);
}

export function* shopSagas() {
	yield all([call(fetchCollectionsStart)]);
}
