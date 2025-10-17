import React from 'react';
import ProductItem from "../components/ProductItem.jsx";

const products = [
    { title: "Сумка", price: 600, id: 0 },
    { title: "Барсетка", price: 800, id: 1 },
    { title: "Саквояж", price: 1800, id: 2 }
]

function ProductList() {
    return (
        <>
            <h2>Products</h2>
            <div className="products-grid">
                {products.map(item => <ProductItem key={item.id} product={item}/>)}
            </div>
        </>
    );
}

export default ProductList;