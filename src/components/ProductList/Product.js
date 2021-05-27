import React, {useEffect, useState} from "react";
import './Product.css'

export default function Product({ item: {name, img, description, id, price}, onAddProduct, cart}) {

    let [inCart, setInCart] = useState(false);

    useEffect(() => {
        setInCart(!cart.filter(cartItem => cartItem.productId === id).length);
    }, [cart, id])

    let btn = inCart ?
        <button onClick={onAddProduct} className="btn btn-primary">Купить</button> :
        <button onClick={onAddProduct} className="btn btn-success">В корзине</button>;

    return <div className="Product">
        <div className="card mt-2">
            <img src={img} className="card-img-top" alt={name} />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{ description }</p>
                <p className="card-text">Цена <b>{ price }</b></p>
                {btn}
            </div>
        </div>
    </div>
}