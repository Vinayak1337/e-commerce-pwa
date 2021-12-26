import { FC } from 'react';
import { useDispatch } from 'react-redux';
import StripeCheckout from 'react-stripe-checkout';
import { clearCart } from '../../Redux/Cart/Cart.Actions';
import axios from 'axios';

const StripeButton: FC<StripeButtonProps> = ({ price }) => {
	const dispatch = useDispatch();

	const amount = price * 100;
	const publishKey =
		'pk_test_51JcpZwSFZRsqIAib9v3Zgnl8PCOHx8wWe1Q07papDfEAn9hfAVhxtpzXzHFecn6CZ4gp5ntHrRydCnS3MVhMQyTt00EEqYFjTa';

	const onToken = async (token: any) => {
		try {
			await axios({
				url: 'api/payment',
				method: 'post',
				data: { amount, token }
			});
			dispatch(clearCart());
			alert('Payment Successful');
		} catch (error) {
			console.log('Payment Error: ', error);
			alert('Payment Error');
		}
	};

	return (
		<StripeCheckout
			label='Pay Now'
			name='CRWN Clothing Ltd.'
			billingAddress
			shippingAddress
			image='https://svgshare.com/i/CUz.svg'
			description={`Your total is $${price}`}
			amount={amount}
			panelLabel='Pay Now'
			token={onToken}
			stripeKey={publishKey}
		/>
	);
};

export default StripeButton;

interface StripeButtonProps {
	price: number;
}
