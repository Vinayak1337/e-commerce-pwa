import { FC } from 'react';
import './Navbar.scss';
import { auth } from '../../../Firebase/firebase.utils';
import { connect } from 'react-redux';
import {
	LogoutIcon,
	LoginIcon,
	HomeIcon,
	ShoppingBasketIcon,
	MailIcon,
} from '../../../Assets/Icons';
import Logo from '../Logo/Logo';
import CartLogo from '../CartLogo/CartLogo';
import CartDropdown from '../CartDropdown/CartDropdown';
import { Dispatch } from 'redux';
import { toggleDropdown } from '../../../Redux/Cart/CartActions';

const Navbar: FC<HeaderProps> = ({
	cartItems,
	user,
	dropdownHidden,
	toggleDropdown,
}) => {
	const getItemCount = () =>
		cartItems.reduce((prevValue, item) => prevValue + item.quantity, 0);

	return (
		<div className="header">
			<Logo linkTo="/" Icon={HomeIcon} label="HOME" />
			<div className="options">
				<Logo linkTo="/shop" Icon={ShoppingBasketIcon} label="SHOP" isOption />
				<Logo linkTo="/contact" Icon={MailIcon} label="CONTACT" isOption />
				{user
					? <Logo
							linkTo="/signin"
							handleClick={() => auth.signOut()}
							label="SIGN OUT"
							Icon={LogoutIcon}
						/>
					: <Logo linkTo="/signin" label="SIGN IN" Icon={LoginIcon} />}
				<CartLogo itemCount={getItemCount()} handleClick={toggleDropdown} />
			</div>
			{dropdownHidden && <CartDropdown />}
		</div>
	);
};

const mapStateToProps = (state: RootState) => ({
	user: state.userReducer.user,
	dropdownHidden: state.cartReducer.dropdownHidden,
	cartItems: state.cartReducer.cartItems,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
	toggleDropdown: () => dispatch(toggleDropdown()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
