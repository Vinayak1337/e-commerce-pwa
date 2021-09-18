import { FC } from 'react';
import { connect } from 'react-redux';
import Button from '../../Button/Button';
import CartItem from '../CartItem/CartItem';
import './CartDropdown.scss';

const CartDropdown: FC<CartDropdownProps> = ({ items }) => {
	return (
		<div className="cart-dropdown">
			<div className="cart-items">
				{items.map(item => <CartItem item={item} key={item.id} />)}
			</div>
			<Button>CHECKOUT</Button>
		</div>
	);
};

const mapStateToProps = (state: RootState) => ({
	items: state.cartReducer.cartItems,
});

export default connect(mapStateToProps)(CartDropdown);
