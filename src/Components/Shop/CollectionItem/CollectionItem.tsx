import { FC } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { addCartItem } from '../../../Redux/Cart/CartActions';
import Button from '../../Button/Button';
import './CollectionItem.scss';

const CollectionItem: FC<CollectionItemProps> = ({ item, addCartItem }) => {
	const { imageUrl, name, price } = item;

	const handleClick = () => addCartItem({ ...item, quantity: 1 });

	return (
		<div className="collection-item">
			<div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
			<div className="collection-footer">
				<span className="name">
					{name}
				</span>
				<span className="price">
					${price}
				</span>
			</div>
			<Button onClick={handleClick} isInverted>
				Add to cart
			</Button>
		</div>
	);
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
	addCartItem: (cartItem: CartItem) => dispatch(addCartItem(cartItem)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
