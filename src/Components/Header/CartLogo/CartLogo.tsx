import { FC } from 'react';
import { ShoppingBagIcon } from '../../../Assets/Icons';
import './CartLogo.scss';

const CartLogo: FC<CartLogoProps> = ({ itemCount, handleClick }) => {
	return (
		<div className="cart-logo" onClick={handleClick}>
			<div className="cart-logo-items">
				<ShoppingBagIcon className="cart-icon" />
				<span className="item-count">
					{itemCount}
				</span>
			</div>
			<p>Cart</p>
		</div>
	);
};

export default CartLogo;
