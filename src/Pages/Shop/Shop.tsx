import { Component } from 'react';
import { ShopData } from '../../Assets/data';
import { CollectionPreview } from '../../Components/Shop';

class Shop extends Component {
	state: ShopState;

	constructor(props: {} | Readonly<{}>) {
		super(props);

		this.state = {
			collection: ShopData
		};
	}

	render() {
		return (
			<div className="shop-page">
				{this.state.collection.map(collection => {
					return (
						<CollectionPreview
							key={collection.id}
							title={collection.title}
							items={collection.items}
						/>
					);
				})}
			</div>
		);
	}
}

export default Shop;
