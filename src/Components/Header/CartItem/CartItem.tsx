import { FC } from 'react';
import {
	CartItemContainer,
	CartItemImage,
	CartItemDetails,
	CartItemLabel
} from './CartItem.styled';

const CartItem: FC<CartItemProps> = ({
	item: { imageUrl, price, name, quantity }
}) => {
	return (
		<CartItemContainer>
			<CartItemImage src={imageUrl} alt={name} />
			<CartItemDetails>
				<CartItemLabel>{name}</CartItemLabel>
				<CartItemLabel>
					${price} x {quantity}
				</CartItemLabel>
			</CartItemDetails>
		</CartItemContainer>
	);
};

export default CartItem;

interface CartItemProps {
	item: CartItem;
}
