import { FC } from 'react';
import { useDispatch } from 'react-redux';
import { addCartItem } from '../../../Redux/Cart/Cart.Actions';
import Button from '../../Button/Button';
import {
	CollectionItemContainer,
	CollectionItemFooter,
	CollectionItemFooterName,
	CollectionItemFooterPrice,
	CollectionItemImage
} from './CollectionItem.styled';

const CollectionItem: FC<CollectionItemProps> = ({ item, fullWidth }) => {
	const dispatch = useDispatch();
	const { imageUrl, name, price } = item;

	const handleClick = () => dispatch(addCartItem({ ...item, quantity: 1 }));

	return (
		<CollectionItemContainer fullWidth={fullWidth}>
			<CollectionItemImage imageUrl={imageUrl} />
			<CollectionItemFooter>
				<CollectionItemFooterName>{name}</CollectionItemFooterName>
				<CollectionItemFooterPrice>${price}</CollectionItemFooterPrice>
			</CollectionItemFooter>
			<Button onClick={handleClick} isInverted>
				Add to cart
			</Button>
		</CollectionItemContainer>
	);
};

export default CollectionItem;

interface CollectionItemProps {
	item: Item;
	fullWidth?: boolean;
}
