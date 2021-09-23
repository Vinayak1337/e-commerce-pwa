import { FC } from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import { ErrorPage } from '..';
import { CollectionItem } from '../../Components/Shop';
import './Collection.scss';

type CollectionRCProps = RouteComponentProps<{ collectionId: string }>;

const Collection: FC<CollectionRCProps & CollectionProps> = ({
	collection
}) => {
	if (!collection) return <ErrorPage />;

	const { title, items } = collection;
	return (
		<div className="collection-page">
			<h2 className="title">
				{title}
			</h2>
			<div className="items">
				{items.map(item => <CollectionItem key={item.id} item={item} />)}
			</div>
		</div>
	);
};

const mapStateToProps = (state: RootState, props: CollectionRCProps) => ({
	collection:
		state.shopReducer.collections.find(
			collection => collection.title.toLowerCase() === props.match.params.collectionId
		) || null
});

export default connect(mapStateToProps)(Collection);
