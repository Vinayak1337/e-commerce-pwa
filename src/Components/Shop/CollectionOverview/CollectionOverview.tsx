import { FC } from 'react';
import { connect } from 'react-redux';
import { CollectionPreview } from '..';
import { CollectionOverviewContainer } from './CollectionOverview.styled';

const CollectionOverview: FC<CollectionOverviewProps> = ({ collections }) => {
	return (
		<CollectionOverviewContainer>
			{collections.map(collection => {
				return (
					<CollectionPreview
						key={collection.id}
						title={collection.title}
						items={collection.items}
					/>
				);
			})}
		</CollectionOverviewContainer>
	);
};

const mapStateToProps = (state: RootState) => ({
	collections: state.shopReducer.collections
});

export default connect(mapStateToProps)(CollectionOverview);

interface CollectionOverviewProps {
	collections: Collection[];
}
