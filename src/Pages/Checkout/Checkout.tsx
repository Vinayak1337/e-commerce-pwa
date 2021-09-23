import { FC, useMemo } from 'react';
import { connect } from 'react-redux';
import CheckoutItem from '../../Components/Checkout/CheckoutItem/CheckoutItem';
import StripeButton from '../../Components/StripeButton/StripeButton';
import './Checkout.scss';

const Checkout: FC<CheckoutProps> = ({ cartItems }) => {
	const getTotalPrice = useMemo(
		() =>
			cartItems.reduce((prevVal, item) => prevVal + item.price * item.quantity, 0),
		[cartItems]
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
			<StripeButton price={getTotalPrice} />
			<div className="test-warning">
				*Please use the following test card for payments*
				<br />
				Number: 4242 4242 4242 4242
				<br />
				Expiry: any future date
				<br />
				CVV: any 3 digit number
			</div>
		</div>
	);
};

const mapStateToProps = (state: RootState) => ({
	cartItems: state.cartReducer.cartItems
});

export default connect(mapStateToProps)(Checkout);
