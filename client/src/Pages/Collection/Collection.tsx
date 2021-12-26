import { FC } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { ErrorPage } from '..';
import { CollectionItem } from '../../Components/Shop';
import {
	CollectionContainer,
	CollectionItemsContainer,
	CollectionTitle
} from './Collection.styled';

const Collection: FC = () => {
	const { collectionId } = useParams<{ collectionId: string }>();
	const collection = useSelector((state: RootState) => {
		const collections = state.shopReducer.collections;
		if (!collections) return null;
		return collections[collectionId];
	});

	if (!collection) return <ErrorPage />;

	const { title, items } = collection;
	return (
		<CollectionContainer>
			<CollectionTitle>{title}</CollectionTitle>
			<CollectionItemsContainer>
				{items.map(item => (
					<CollectionItem key={item.id} item={item} fullWidth />
				))}
			</CollectionItemsContainer>
		</CollectionContainer>
	);
};

export default Collection;
