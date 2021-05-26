// eslint-disable-next-line
import React from "react";
import ProductList from "../ProductList/ProductList";
import Header from "./Header";
import Cart from "../Cart/Cart";

export default function App() {
    return <>
        <Header />
        <div className="container">
            <ProductList />
        </div>
    </>;
}