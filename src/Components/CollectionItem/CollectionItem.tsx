import { FC } from 'react';
import './CollectionItem.scss';

const CollectionItem: FC<CollectionItemProps> = ({ item }) => {
	const { imageUrl, name, price } = item;

	return (
		<div className="collection-item">
			<div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
			<div className="collection-footer">
				<span className="name">
					{name}
				</span>
				<span className="price">
					{price}
				</span>
			</div>
		</div>
	);
};

export default CollectionItem;
