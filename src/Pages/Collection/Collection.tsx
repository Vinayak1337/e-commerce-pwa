import { FC } from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import { ErrorPage } from '..';
import { CollectionItem } from '../../Components/Shop';
import {
	CollectionContainer,
	CollectionItemsContainer,
	CollectionTitle
} from './Collection.styled';

type CollectionRCProps = RouteComponentProps<{ collectionId: string }>;

const Collection: FC<CollectionRCProps & CollectionProps> = ({
	collection
}) => {
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

const mapStateToProps = (state: RootState, props: CollectionRCProps) => ({
	collection:
		state.shopReducer.collections.find(
			collection =>
				collection.title.toLowerCase() === props.match.params.collectionId
		) || null
});

export default connect(mapStateToProps)(Collection);

interface CollectionProps {
	collection: Collection | null;
}
