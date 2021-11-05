import { FC, useMemo } from 'react';
import { connect } from 'react-redux';
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
import { Dispatch } from 'redux';
import { toggleDropdown } from '../../../Redux/Cart/Cart.Actions';
import { NavbarContainer, OptionsContainer } from './Navbar.styled';
import { signOutStart } from '../../../Redux/User/User.Actions';

const Navbar: FC<HeaderProps> = ({
	cartItems,
	user,
	dropdownHidden,
	toggleDropdown,
	signOut
}) => {
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
						handleClick={signOut}
						label='SIGN OUT'
						Icon={LogoutIcon}
					/>
				) : (
					<Logo linkTo='/signin' label='SIGN IN' Icon={LoginIcon} />
				)}
				<CartLogo itemCount={getItemCount} handleClick={toggleDropdown} />
			</OptionsContainer>
			{!dropdownHidden && <CartDropdown />}
		</NavbarContainer>
	);
};

const mapStateToProps = (state: RootState) => ({
	user: state.userReducer.user,
	dropdownHidden: state.cartReducer.dropdownHidden,
	cartItems: state.cartReducer.cartItems
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
	toggleDropdown: () => dispatch(toggleDropdown()),
	signOut: () => dispatch(signOutStart())
});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);

interface HeaderProps {
	user: User | null;
	cartItems: CartItem[];
	dropdownHidden: boolean;
	signOut: () => void;
	toggleDropdown: () => void;
}
