import { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, useRouteMatch } from 'react-router-dom';
import CollectionOverview from '../../Components/Shop/CollectionOverview/CollectionOverview';
import { fetchCollectionsStart } from '../../Redux/Shop/Shop.Actions';
import Collection from '../Collection/Collection';

const Shop: FC = () => {
	const dispatch = useDispatch();
	const match = useRouteMatch();

	useEffect(() => {
		dispatch(fetchCollectionsStart());
	}, [dispatch]);

	return (
		<div className='shop-page'>
			<Route exact path={match.path} component={CollectionOverview} />
			<Route path={`${match.path}/:collectionId`} component={Collection} />
		</div>
	);
};

export default Shop;
