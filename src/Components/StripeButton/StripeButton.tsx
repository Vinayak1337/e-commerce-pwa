import { FC } from 'react';
import { connect } from 'react-redux';
import StripeCheckout from 'react-stripe-checkout';
import { Dispatch } from 'redux';
import { clearCart } from '../../Redux/Cart/CartActions';

const StripeButton: FC<StripeButtonProps> = ({ price, clearCart }) => {
	const priceForStripe = price * 100;
	const publishKey =
		'pk_test_51JcpZwSFZRsqIAib9v3Zgnl8PCOHx8wWe1Q07papDfEAn9hfAVhxtpzXzHFecn6CZ4gp5ntHrRydCnS3MVhMQyTt00EEqYFjTa';

	const onToken = (token: any) => {
		console.log(token);
		clearCart();
		alert('Payment Successful');
	};

	return (
		<StripeCheckout
			label='Pay Now'
			name='CRWN Clothing Ltd.'
			billingAddress
			shippingAddress
			image='https://svgshare.com/i/CUz.svg'
			description={`Your total is $${price}`}
			amount={priceForStripe}
			panelLabel='Pay Now'
			token={onToken}
			stripeKey={publishKey}
		/>
	);
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
	clearCart: () => dispatch(clearCart())
});

export default connect(null, mapDispatchToProps)(StripeButton);

interface StripeButtonProps {
	price: number;
	clearCart: () => void;
}
