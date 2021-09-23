import { FC } from 'react';
import { connect } from 'react-redux';
import { CollectionPreview } from '..';

const CollectionOverview: FC<CollectionOverviewProps> = ({ collections }) => {
	return (
		<div className='collection-overview'>
			{collections.map(collection => {
				return (
					<CollectionPreview
						key={collection.id}
						title={collection.title}
						items={collection.items}
					/>
				);
			})}
		</div>
	);
};

const mapStateToProps = (state: RootState) => ({
	collections: state.shopReducer.collections
});

export default connect(mapStateToProps)(CollectionOverview);
