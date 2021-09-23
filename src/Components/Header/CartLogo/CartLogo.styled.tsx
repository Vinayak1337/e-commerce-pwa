import styled from 'styled-components';
import { ShoppingBagIcon } from '../../../Assets/Icons';

export const CartLogoContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	position: relative;
	cursor: pointer;
`;

export const CartLogoItems = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const CartLogoIcon = styled(ShoppingBagIcon)`
    width: 38px;
    height: 38px;
`;

export const ItemCountSpan = styled.span`
	position: absolute;
	top: 12px;
	font-size: 14px;
	font-weight: bold;
`;

export const CartLabel = styled.p`margin: 0;`;
