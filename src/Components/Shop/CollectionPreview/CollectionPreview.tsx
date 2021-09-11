import { FC } from 'react';
import CollectionItem from '../CollectionItem/CollectionItem';
import './CollectionPreview.scss';

const CollectionPreview: FC<CollectionPreviewProps> = ({ title, items }) => {
	return (
		<div className="collection-preview">
			<h1 className="title">
				{title.toUpperCase()}
			</h1>
			<div className="preview">
				{items.filter((_item, index) => index < 4).map(item => {
					return <CollectionItem key={item.id} item={item} />;
				})}
			</div>
		</div>
	);
};

export default CollectionPreview;