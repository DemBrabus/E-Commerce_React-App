import React, { Component } from 'react';
import SHOP_DATA from './ShoppingData';
import './ShopPage.scss';
import CollectionPreview from '../../Components/Preview-Component/CollectionPreview';

export default class ShopPage extends Component {
    constructor(){
        super();
        this.state = {
            collections: SHOP_DATA
        }
    }





    render() {
        const {collections} = this.state;
        return (
            <div className='ShopPage'>
                {
                    collections.map(({ id, ...otherCollectionProps }) => (
                        <CollectionPreview key={id} {...otherCollectionProps} />
                    ))
                }
            </div>
        )
    }
}
