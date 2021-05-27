import React from "react";
import CartList from "./CartList";
import {OverlayTrigger, Popover, Button } from 'react-bootstrap';

export default function Cart({cart, removeFromCart, addCartCount, removeCartCount, show}) {
    let cartList = <CartList
        cart={cart}
        removeFromCart={removeFromCart}
        addCartCount={addCartCount}
        removeCartCount={removeCartCount}
    />

    const popover = (
        <Popover id="popover-cart" style={{minWidth: '500px'}}>
            <Popover.Title as="h3">Корзина</Popover.Title>
            <Popover.Content>
                {cartList}
            </Popover.Content>
        </Popover>
    );

    return <OverlayTrigger
        show={show}
        trigger="click"
        placement="bottom"
        overlay={popover}
        rootClose={true}
    >
        <Button variant="success">Корзина ({ cart.length })</Button>
    </OverlayTrigger>
}