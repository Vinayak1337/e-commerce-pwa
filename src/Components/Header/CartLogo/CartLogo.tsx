import { FC } from 'react';
import {
	CartLabel,
	CartLogoContainer,
	CartLogoIcon,
	CartLogoItems,
	ItemCountSpan
} from './CartLogo.styled';

const CartLogo: FC<CartLogoProps> = ({ itemCount, handleClick }) => {
	return (
		<CartLogoContainer onClick={handleClick}>
			<CartLogoItems>
				<CartLogoIcon />
				<ItemCountSpan>
					{itemCount}
				</ItemCountSpan>
			</CartLogoItems>
			<CartLabel>Cart</CartLabel>
		</CartLogoContainer>
	);
};

export default CartLogo;
