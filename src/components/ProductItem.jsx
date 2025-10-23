import React from 'react';
import { Link } from 'react-router-dom';
import {useProducts} from "../context/productContext.jsx";

function ProductItem(props) {

    const {productId} = props;
    const products = useProducts();
    const product = products.products.find(item => item.id === productId);

    if (!product) {
        return null;
    }
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