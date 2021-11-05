import { FC } from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { Dispatch } from 'redux';
import { toggleDropdown } from '../../../Redux/Cart/Cart.Actions';
import Button from '../../Button/Button';
import CartItem from '../CartItem/CartItem';
import {
	CartDropdownContainer,
	CartDropdownItemsContainer,
	EmptyCartLabel
} from './CartDropdown.styled';

const CartDropdown: FC<CartDropdownProps & RouteComponentProps> = ({
	items,
	toggleDropdown,
	history
}) => {
	return (
		<CartDropdownContainer>
			<CartDropdownItemsContainer>
				{items.length ? (
					items.map(item => <CartItem item={item} key={item.id} />)
				) : (
					<EmptyCartLabel>Your cart is empty</EmptyCartLabel>
				)}
			</CartDropdownItemsContainer>
			<Button
				onClick={() => {
					history.push('/checkout');
					toggleDropdown();
				}}>
				CHECKOUT
			</Button>
		</CartDropdownContainer>
	);
};

const mapStateToProps = (state: RootState) => ({
	items: state.cartReducer.cartItems
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
	toggleDropdown: () => dispatch(toggleDropdown())
});

export default withRouter(
	connect(mapStateToProps, mapDispatchToProps)(CartDropdown)
);

interface CartDropdownProps {
	items: CartItem[];
	toggleDropdown: () => void;
}
