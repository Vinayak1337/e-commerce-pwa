import { FC } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { addCartItem, removeCartItem } from '../../../Redux/Cart/CartActions';
import './CheckoutItem.scss';

const CheckoutItem: FC<CheckoutItemProps> = ({
	item,
	removeCartItem,
	addCartItem,
}) => {
	const handleClickRemove = () => removeCartItem(item);

	const handleClickRemoveOne = () => removeCartItem({ ...item, quantity: 1 });

	const handleClickAddOne = () => addCartItem({ ...item, quantity: 1 });

	const { imageUrl, name, quantity, price } = item;

	return (
		<div className="checkout-item">
			<div className="image-container">
				<img src={imageUrl} alt="item" />
			</div>
			<span className="name">
				{name}
			</span>
			<span className="quantity">
				<div className="arrow" onClick={handleClickRemoveOne}>
					&#10094;
				</div>
				<span className="value">
					{quantity}
				</span>
				<div className="arrow" onClick={handleClickAddOne}>
					&#10095;
				</div>
			</span>
			<span className="price">
				{price}
			</span>
			<div className="remove-button" onClick={handleClickRemove}>
				&#10006;
			</div>
		</div>
	);
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
	removeCartItem: (item: CartItem) => dispatch(removeCartItem(item)),
	addCartItem: (item: CartItem) => dispatch(addCartItem(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
