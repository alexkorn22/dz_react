// eslint-disable-next-line
import React, {useState} from "react";
import ProductList from "../ProductList/ProductList";
import Header from "./Header";
import Cart from "../Cart/Cart";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Order from "../Order/Order";
import './App.css'

export default function App() {

    let [cart, setCart] = useState([]);

    let addToCart = product => {
        cart = [...cart];
        let find = cart.filter(item => item.productId === product.id);
        if (!find.length) {
            setCart([...cart, {
                count: 1,
                productId: product.id,
                name: product.name,
                price: product.price,
            }]);
            return;
        }

        let item = find[0];
        item.count++;
        setCart(cart);
    }

    let addCartCount = productId => {
        cart = [...cart];
        let find = cart.filter(item => item.productId === productId);
        if (!find.length) {
            return;
        }

        let item = find[0];
        item.count++;
        setCart(cart);
    }

    let removeCartCount = productId => {
        cart = [...cart];
        let find = cart.filter(item => item.productId === productId);
        if (!find.length) {
            return;
        }

        let item = find[0];
        item.count--;
        setCart(cart);
    }

    let removeFromCart = productId => {
        setCart(cart.filter(item => item.productId !== productId))
    }

    let cartComponent = <Cart
        cart={cart}
        removeFromCart={removeFromCart}
        addCartCount={addCartCount}
        removeCartCount={removeCartCount}
    />;

    return <>
        <Router>
            <Header>
                { cartComponent }
            </Header>
            <div className="main container">
                <Switch>
                    <Route path="/about">
                        About
                    </Route>
                    <Route path="/order">
                        <Order
                            cart={cart}
                            removeFromCart={removeFromCart}
                            addCartCount={addCartCount}
                            removeCartCount={removeCartCount}
                        />
                    </Route>
                    <Route path="/">
                        <ProductList addToCart={addToCart} cart={cart}/>
                    </Route>
                </Switch>
            </div>
        </Router>
    </>;
}