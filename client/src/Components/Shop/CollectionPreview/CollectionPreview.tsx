import { FC } from 'react';
import { Link } from 'react-router-dom';
import CollectionItem from '../CollectionItem/CollectionItem';
import {
	CollectionPreviewBody,
	CollectionPreviewContainer,
	CollectionPreviewTitle
} from './CollectionPreview.styled';

const CollectionPreview: FC<CollectionPreviewProps> = ({ title, items }) => {
	return (
		<CollectionPreviewContainer>
			<CollectionPreviewTitle as={Link} to={`/shop/${title.toLowerCase()}`}>
				{title.toUpperCase()}
			</CollectionPreviewTitle>
			<CollectionPreviewBody>
				{items
					.filter((_item, index) => index < 4)
					.map(item => {
						return <CollectionItem key={item.id} item={item} />;
					})}
			</CollectionPreviewBody>
		</CollectionPreviewContainer>
	);
};

export default CollectionPreview;

interface CollectionPreviewProps {
	title: string;
	items: Item[];
}
