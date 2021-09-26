import { FC } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { addCartItem } from '../../../Redux/Cart/CartActions';
import Button from '../../Button/Button';
import {
	CollectionItemContainer,
	CollectionItemFooter,
	CollectionItemFooterName,
	CollectionItemFooterPrice,
	CollectionItemImage
} from './CollectionItem.styled';

const CollectionItem: FC<CollectionItemProps> = ({
	item,
	addCartItem,
	fullWidth
}) => {
	const { imageUrl, name, price } = item;

	const handleClick = () => addCartItem({ ...item, quantity: 1 });

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

const mapDispatchToProps = (dispatch: Dispatch) => ({
	addCartItem: (cartItem: CartItem) => dispatch(addCartItem(cartItem))
});

export default connect(null, mapDispatchToProps)(CollectionItem);

interface CollectionItemProps {
	item: Item;
	addCartItem: (cartItem: CartItem) => void;
	fullWidth?: boolean;
}
