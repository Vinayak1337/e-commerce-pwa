import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { toggleDropdown } from '../../../Redux/Cart/Cart.Actions';
import Button from '../../Button/Button';
import CartItem from '../CartItem/CartItem';
import {
	CartDropdownContainer,
	CartDropdownItemsContainer,
	EmptyCartLabel
} from './CartDropdown.styled';

const CartDropdown: FC = () => {
	const items = useSelector((state: RootState) => state.cartReducer.cartItems);
	const history = useHistory();
	const dispatch = useDispatch();

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
					dispatch(toggleDropdown());
				}}>
				CHECKOUT
			</Button>
		</CartDropdownContainer>
	);
};

export default CartDropdown;
