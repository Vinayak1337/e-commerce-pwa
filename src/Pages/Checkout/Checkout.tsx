import { FC, useMemo } from 'react';
import { connect } from 'react-redux';
import CheckoutItem from '../../Components/Checkout/CheckoutItem/CheckoutItem';
import './Checkout.scss';

const Checkout: FC<CheckoutProps> = ({ cartItems }) => {
	const getTotalPrice = useMemo(
		() => cartItems.reduce((prevVal, item) => prevVal + item.price, 0),
		[cartItems],
	);

	return (
		<div className="checkout-page">
			<div className="checkout-header">
				<div className="header-block">
					<span>Product</span>
				</div>
				<div className="header-block">
					<span>Description</span>
				</div>
				<div className="header-block">
					<span>Quantity</span>
				</div>
				<div className="header-block">
					<span>Price</span>
				</div>
				<div className="header-block">
					<span>Remove</span>
				</div>
			</div>
			{cartItems.map(item => <CheckoutItem item={item} key={item.id} />)}

			<div className="total">
				<span>
					TOTAL: ${getTotalPrice}
				</span>
			</div>
		</div>
	);
};

const mapStateToProps = (state: RootState) => ({
	cartItems: state.cartReducer.cartItems,
});

export default connect(mapStateToProps)(Checkout);
