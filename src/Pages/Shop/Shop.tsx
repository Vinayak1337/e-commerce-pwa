import { FC, useEffect } from 'react';
import { connect } from 'react-redux';
import { Route, RouteComponentProps } from 'react-router-dom';
import { Dispatch } from 'redux';
import CollectionOverview from '../../Components/Shop/CollectionOverview/CollectionOverview';
import {
	convertCollectionsSnapshotToMap,
	firestore
} from '../../Firebase/firebase.utils';
import { updateCollection } from '../../Redux/Shop/ShopActions';
import Collection from '../Collection/Collection';

const Shop: FC<ShopProps & RouteComponentProps> = ({
	match,
	setCollections
}) => {
	useEffect(() => {
		const collectionRef = firestore.collection('collections');

		collectionRef.onSnapshot(async snapshot => {
			const collection = convertCollectionsSnapshotToMap(snapshot);

			setCollections(collection);
		});
	}, [setCollections]);

	return (
		<div className='shop-page'>
			<Route exact path={match.path} component={CollectionOverview} />
			<Route path={`${match.path}/:collectionId`} component={Collection} />
		</div>
	);
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
	setCollections: (collections: Collections) =>
		dispatch(updateCollection(collections))
});

export default connect(null, mapDispatchToProps)(Shop);

interface ShopProps {
	setCollections: (collections: Collections) => void;
}
