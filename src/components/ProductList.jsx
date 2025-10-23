import React from 'react';
import ProductItem from "../components/ProductItem.jsx";
import {useProducts} from "../context/productContext.jsx";



function ProductList() {
    const { products } = useProducts();

    return (
        <>
            <h2>Products</h2>
            <div className="products-grid">
                {products.map(item => <ProductItem key={item.id} productId={item.id}/>)}
            </div>
        </>
    );
}

export default ProductList;