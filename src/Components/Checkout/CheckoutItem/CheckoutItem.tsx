import { FC } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
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
} from './CheckoutItem.stled';

const CheckoutItem: FC<CheckoutItemProps> = ({
	item,
	removeCartItem,
	addCartItem
}) => {
	const handleClickRemove = () => removeCartItem(item);

	const handleClickRemoveOne = () => removeCartItem({ ...item, quantity: 1 });

	const handleClickAddOne = () => addCartItem({ ...item, quantity: 1 });

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

const mapDispatchToProps = (dispatch: Dispatch) => ({
	removeCartItem: (item: CartItem) => dispatch(removeCartItem(item)),
	addCartItem: (item: CartItem) => dispatch(addCartItem(item))
});

export default connect(null, mapDispatchToProps)(CheckoutItem);

interface CheckoutItemProps {
	item: CartItem;
	removeCartItem: (item: CartItem) => void;
	addCartItem: (item: CartItem) => void;
}
