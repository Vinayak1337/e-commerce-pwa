import { FC } from 'react';
import { Link } from 'react-router-dom';
import HomeIcon from '@material-ui/icons/Home';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import EmailIcon from '@material-ui/icons/Email';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import './Header.scss';
import { auth } from '../../Firebase/firebase.utils';
import { ReactComponent as Login } from '../../Assets/Icons/login.svg';
import { ReactComponent as Logout } from '../../Assets/Icons/logout.svg';
import { connect } from 'react-redux';

const Header: FC<HeaderProps> = ({ user }) => {
	return (
		<div className="header">
			<Link to="/">
				<HomeIcon fontSize="large" />
				<p>HOME</p>
			</Link>
			<div className="options">
				<Link className="option" to="/shop">
					<ShoppingBasketIcon fontSize="large" />
					<p>SHOP</p>
				</Link>
				<Link className="option" to="/shop">
					<EmailIcon fontSize="large" />
					<p>CONTACT</p>
				</Link>
				<Link className="option" to="/shop">
					<ShoppingCartIcon fontSize="large" />
					<p>CART</p>
				</Link>
				{user
					? <div className="option" onClick={() => auth.signOut()}>
							<Logout />
							<p>SIGN OUT</p>
						</div>
					: <Link to="/signin">
							<Login className="login" />
							<p>SIGN IN</p>
						</Link>}
			</div>
		</div>
	);
};

const mapStateToProps = (state: RootState) => ({
	user: state.users.user
});

export default connect(mapStateToProps)(Header);
