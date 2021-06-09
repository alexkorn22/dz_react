import React, {useEffect, useState} from "react";
import Product from "./Product";
import {getProducts} from "../../services/ProductApi";

export default function ProductList({cart, addToCart}) {

    let [products, setProducts] = useState(null);

    useEffect(() => {
        getProducts().then(data => setProducts(data.data))
    }, []);

    if (products === null) {
        return 'Loading...';
    }

    let items = products.map(item => <div className="col-md-3" key={item.id}>
        <Product
            item={item}
            onAddProduct={() => {addToCart(item)}}
            cart={cart}
        />
    </div>)

    return <div className="ProductList">
        <div className="row">
            { items }
        </div>
    </div>
}