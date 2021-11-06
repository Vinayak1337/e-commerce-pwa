import { FC } from 'react';
import { useSelector } from 'react-redux';
import { CollectionPreview } from '..';
import Spinner from '../../Spinner/Spinner';
import { CollectionOverviewContainer } from './CollectionOverview.styled';

const CollectionOverview: FC = () => {
	const collections = useSelector(
		(state: RootState) => state.shopReducer.collections
	);

	return (
		<CollectionOverviewContainer hasSpinner={collections ? '' : 'yes'}>
			{!collections ? (
				<Spinner />
			) : (
				Object.values(collections).map(collection => {
					return (
						<CollectionPreview
							key={collection.id}
							title={collection.title}
							items={collection.items}
						/>
					);
				})
			)}
		</CollectionOverviewContainer>
	);
};

export default CollectionOverview;
