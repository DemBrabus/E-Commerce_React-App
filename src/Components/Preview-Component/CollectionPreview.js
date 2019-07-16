import React from 'react';
import './CollectionPreview.scss';
import CollectionItem from '../CollectionItem-Component/CollectionItem';

export default function CollectionPreview ({ title, items }) {
    return (
        <div className='CollectionPreview'>
            <h1 className='title'>{title.toUpperCase()}</h1>
            <div className='preview'>

                {items.filter((item, idx) => idx < 4).map(({ id, ...otherItemProps}) => (
                    <CollectionItem key={id} {...otherItemProps} />
                ))}
            </div>
        </div>
    )
}
