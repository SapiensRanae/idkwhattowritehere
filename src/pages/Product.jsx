import React from 'react';
import { useParams } from 'react-router-dom'
import {useProducts} from "../context/productContext.jsx";

function Product() {
    const {id} = useParams();
    const products = useProducts();
    const product = products.products.find(item => item.id === Number(id));

    if (!product) {
        return <div>Product not found</div>;
    }

    return (
        <div>

            <h2>{product.title}</h2>
            <h3>${product.price}</h3>
            <p>{product.description}</p>
            <p>{product.category}</p>


  </div>

    );
}

export default Product;