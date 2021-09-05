import { FC } from 'react';
import Button from '../../Button/Button';
import './CartDropdown.scss';

const CartDropdown: FC = () => {
	return (
		<div className="cart-dropdown">
			<div className="cart-items" />
			<Button>CHECKOUT</Button>
		</div>
	);
};

export default CartDropdown;
