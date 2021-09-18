import { FC } from 'react';
import './CartItem.scss';

const CartItem: FC<CartItemProps> = ({
	item: { imageUrl, price, name, quantity },
}) => {
	return (
		<div className="cart-item">
			<img src={imageUrl} alt={name} />
			<div className="cart-item-details">
				<span className="cart-item-name">
					{name}
				</span>
				<span className="cart-item-price">
					${price} x {quantity}
				</span>
			</div>
		</div>
	);
};

export default CartItem;
