import React from "react";
import './Cart.css'
import CartItem from "./CartItem";
import Total from "./Total";

//https://www.nicesnippets.com/snippet/bootstrap-4-shopping-cart-dropdown-in-header

export default function CartList({cart, removeFromCart, addCartCount, removeCartCount}) {
    let items = cart.map(item => <div className='row no-gutters mb-1 cartItem' key={item.productId}>
        <CartItem
            item={item}
            removeFromCart={() => {removeFromCart(item.productId)}}
            addCartCount={() => {addCartCount(item.productId)}}
            removeCartCount={() => {removeCartCount(item.productId)}}
        />
    </div>)

    return <>
        <div className={'my-4'}>
            {items}
        </div>
        <div className="row justify-content-end">
            <div className="col-6">
                <Total cart={cart} />
            </div>
        </div>
    </>
}