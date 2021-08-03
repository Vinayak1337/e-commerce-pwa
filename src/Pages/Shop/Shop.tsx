import { Component } from 'react';
import CollectionPreview from '../../Components/CollectionPreview/CollectionPreview';
import { ShopData } from '../../Assets/data';

class Shop extends Component {
    state: ShopState;

    constructor() {
        super({});
        
        this.state = {
            collection: ShopData
        }
    }
    
    render() {
        return (
            <div className="shop-page">
                {
                    this.state.collection.map((collection) => {
                        return <CollectionPreview key={collection.id} title={collection.title} items={collection.items}/>
                    })
                }
            </div>
        );
    }
}

export default Shop;