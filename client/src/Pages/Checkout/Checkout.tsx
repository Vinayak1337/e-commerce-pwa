import { FC, useMemo } from 'react';
import { useSelector } from 'react-redux';
import CheckoutItem from '../../Components/Checkout/CheckoutItem/CheckoutItem';
import StripeButton from '../../Components/StripeButton/StripeButton';
import {
	CheckoutContainer,
	CheckoutHeader,
	CheckoutHeaderBlock,
	CheckoutTotalContainer,
	CheckoutTestWarning
} from './Checkout.styled';

const Checkout: FC = () => {
	const cartItems = useSelector(
		(state: RootState) => state.cartReducer.cartItems
	);

	const getTotalPrice = useMemo(
		() =>
			cartItems.reduce(
				(prevVal, item) => prevVal + item.price * item.quantity,
				0
			),
		[cartItems]
	);

	return (
		<CheckoutContainer>
			<CheckoutHeader>
				<CheckoutHeaderBlock>
					<span>Product</span>
				</CheckoutHeaderBlock>
				<CheckoutHeaderBlock>
					<span>Description</span>
				</CheckoutHeaderBlock>
				<CheckoutHeaderBlock>
					<span>Quantity</span>
				</CheckoutHeaderBlock>
				<CheckoutHeaderBlock>
					<span>Price</span>
				</CheckoutHeaderBlock>
				<CheckoutHeaderBlock>
					<span>Remove</span>
				</CheckoutHeaderBlock>
			</CheckoutHeader>
			{cartItems.map(item => (
				<CheckoutItem item={item} key={item.id} />
			))}

			<CheckoutTotalContainer>
				<span>TOTAL: ${getTotalPrice}</span>
			</CheckoutTotalContainer>
			<StripeButton price={getTotalPrice} />
			<CheckoutTestWarning>
				*Please use the following test card for payments*
				<br />
				Number: 4242 4242 4242 4242
				<br />
				Expiry: any future date
				<br />
				CVV: any 3 digit number
			</CheckoutTestWarning>
		</CheckoutContainer>
	);
};

export default Checkout;
