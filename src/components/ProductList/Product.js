import React from "react";
import './Product.css'

export default function Product({ item: {name, img, description}, onAddProduct }) {
    return <div className="Product">
        <div className="card mt-2">
            <img src={img} className="card-img-top" alt={name} />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{ description }</p>
                <button onClick={onAddProduct} className="btn btn-primary">Купить</button>
            </div>
        </div>
    </div>
}