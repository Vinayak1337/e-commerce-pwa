import { FC } from 'react';
import { useDispatch } from 'react-redux';
import { addCartItem, removeCartItem } from '../../../Redux/Cart/Cart.Actions';
import {
	CheckoutItemContainer,
	CheckoutItemImageContainer,
	CheckoutItemImage,
	CheckoutItemLabel,
	CheckoutItemQuantity,
	CheckoutItemArrow,
	CheckoutItemValue,
	CheckoutItemRemoveButton
} from './CheckoutItem.styled';

const CheckoutItem: FC<CheckoutItemProps> = ({ item }) => {
	const dispatch = useDispatch();

	const handleClickRemove = () => dispatch(removeCartItem(item));

	const handleClickRemoveOne = () =>
		dispatch(removeCartItem({ ...item, quantity: 1 }));

	const handleClickAddOne = () =>
		dispatch(addCartItem({ ...item, quantity: 1 }));

	const { imageUrl, name, quantity, price } = item;

	return (
		<CheckoutItemContainer>
			<CheckoutItemImageContainer>
				<CheckoutItemImage src={imageUrl} alt='item' />
			</CheckoutItemImageContainer>
			<CheckoutItemLabel>{name}</CheckoutItemLabel>
			<CheckoutItemQuantity>
				<CheckoutItemArrow onClick={handleClickRemoveOne}>
					&#10094;
				</CheckoutItemArrow>
				<CheckoutItemValue>{quantity}</CheckoutItemValue>
				<CheckoutItemArrow onClick={handleClickAddOne}>
					&#10095;
				</CheckoutItemArrow>
			</CheckoutItemQuantity>
			<CheckoutItemLabel>{price}</CheckoutItemLabel>
			<CheckoutItemRemoveButton onClick={handleClickRemove}>
				&#10006;
			</CheckoutItemRemoveButton>
		</CheckoutItemContainer>
	);
};

export default CheckoutItem;

interface CheckoutItemProps {
	item: CartItem;
}
