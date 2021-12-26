import { FC, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	LogoutIcon,
	LoginIcon,
	HomeIcon,
	ShoppingBasketIcon,
	MailIcon
} from '../../../Assets/Icons';
import Logo from '../Logo/Logo';
import CartLogo from '../CartLogo/CartLogo';
import CartDropdown from '../CartDropdown/CartDropdown';
import { toggleDropdown } from '../../../Redux/Cart/Cart.Actions';
import { NavbarContainer, OptionsContainer } from './Navbar.styled';
import { signOutStart } from '../../../Redux/User/User.Actions';

const Navbar: FC = () => {
	const { user, dropdownHidden, cartItems } = useSelector(
		(state: RootState) => ({
			user: state.userReducer.user,
			dropdownHidden: state.cartReducer.dropdownHidden,
			cartItems: state.cartReducer.cartItems
		})
	);

	const dispatch = useDispatch();

	const getItemCount = useMemo(
		() => cartItems.reduce((prevValue, item) => prevValue + item.quantity, 0),
		[cartItems]
	);

	return (
		<NavbarContainer>
			<Logo linkTo='/' Icon={HomeIcon} label='HOME' />
			<OptionsContainer>
				<Logo linkTo='/shop' Icon={ShoppingBasketIcon} label='SHOP' />
				<Logo linkTo='/contact' Icon={MailIcon} label='CONTACT' />
				{user ? (
					<Logo
						linkTo='/signin'
						handleClick={() => dispatch(signOutStart())}
						label='SIGN OUT'
						Icon={LogoutIcon}
					/>
				) : (
					<Logo linkTo='/signin' label='SIGN IN' Icon={LoginIcon} />
				)}
				<CartLogo
					itemCount={getItemCount}
					handleClick={() => dispatch(toggleDropdown())}
				/>
			</OptionsContainer>
			{!dropdownHidden && <CartDropdown />}
		</NavbarContainer>
	);
};

export default Navbar;
