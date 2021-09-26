import { FC } from 'react';
import { Route, RouteComponentProps } from 'react-router-dom';
import CollectionOverview from '../../Components/Shop/CollectionOverview/CollectionOverview';
import Collection from '../Collection/Collection';

const Shop: FC<ShopProps & RouteComponentProps> = ({ match }) => {
	return (
		<div className='shop-page'>
			<Route exact path={match.path} component={CollectionOverview} />
			<Route path={`${match.path}/:collectionId`} component={Collection} />
		</div>
	);
};

export default Shop;

interface ShopProps {}
