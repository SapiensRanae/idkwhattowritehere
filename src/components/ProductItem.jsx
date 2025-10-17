import React from 'react';
import { Link } from 'react-router-dom';

function ProductItem({product}) {
    const {id, title, price} = product;
    return (
        <Link to={`/products/${id}`}>
        <div className="product-card">
            <p>id: {id}</p>
            <h2>{title}</h2>
            <h3>${price}</h3>
        </div>
        </Link>
    );
}
export default ProductItem;