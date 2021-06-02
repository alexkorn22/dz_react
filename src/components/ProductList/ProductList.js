import React, {useEffect, useState} from "react";
import Product from "./Product";

export default function ProductList({cart, addToCart}) {

    let [products, setProducts] = useState(null);

    useEffect(() => {
        let url = 'https://script.google.com/macros/s/AKfycbyUxf43FMa-RzU_CynnV9AltB9VMuifTR9HSgJQmpeR7u7PSyYRMQCMQaz2ySo-9AZE/exec';
        fetch(url)
            .then(res => res.json())
            .then(data => setProducts(data.data))
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