import { FC } from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { Dispatch } from 'redux';
import { toggleDropdown } from '../../../Redux/Cart/CartActions';
import Button from '../../Button/Button';
import CartItem from '../CartItem/CartItem';
import './CartDropdown.scss';

const CartDropdown: FC<CartDropdownProps & RouteComponentProps> = ({
	items,
	toggleDropdown,
	history,
}) => {
	return (
		<div className="cart-dropdown">
			<div className="cart-items">
				{items.length
					? items.map(item => <CartItem item={item} key={item.id} />)
					: <span className="empty-cart-message">Your cart is empty</span>}
			</div>
			<Button
				onClick={() => {
					history.push('/checkout');
					toggleDropdown();
				}}>
				CHECKOUT
			</Button>
		</div>
	);
};

const mapStateToProps = (state: RootState) => ({
	items: state.cartReducer.cartItems,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
	toggleDropdown: () => dispatch(toggleDropdown()),
});

export default withRouter(
	connect(mapStateToProps, mapDispatchToProps)(CartDropdown),
);
