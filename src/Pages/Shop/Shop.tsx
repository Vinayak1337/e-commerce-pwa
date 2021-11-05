import { FC, useEffect } from 'react';
import { connect } from 'react-redux';
import { Route, RouteComponentProps } from 'react-router-dom';
import { ThunkDispatch } from 'redux-thunk';
import CollectionOverview from '../../Components/Shop/CollectionOverview/CollectionOverview';
import { fetchCollectionsStart } from '../../Redux/Shop/Shop.Actions';
import Collection from '../Collection/Collection';

const Shop: FC<ShopProps & RouteComponentProps> = ({
	match,
	fetchCollections
}) => {
	useEffect(() => {
		fetchCollections();
	}, [fetchCollections]);

	return (
		<div className='shop-page'>
			<Route exact path={match.path} component={CollectionOverview} />
			<Route path={`${match.path}/:collectionId`} component={Collection} />
		</div>
	);
};

const mapDispatchToProps = (
	dispatch: ThunkDispatch<any, any, any>
) => ({
	fetchCollections: () => dispatch(fetchCollectionsStart())
});

export default connect(null, mapDispatchToProps)(Shop);

interface ShopProps {
	fetchCollections: () => void;
}
