import React, {useEffect, useState} from "react";
import CartList from "../Cart/CartList";
import {Form, Card} from "react-bootstrap";
import Select from 'react-select';
import {getCities} from "../../services/GeoApi";

export default function Order({cart, removeFromCart, addCartCount, removeCartCount}) {
    let cartList = <CartList
        cart={cart}
        removeFromCart={removeFromCart}
        addCartCount={addCartCount}
        removeCartCount={removeCartCount}
    />

    let [currentCity, setCurrentCity] = useState();
    let [options, setOptions] = useState([]);
    useEffect(() => {
        getCities().then(res => {
            setOptions(res.map(item => ({value: item.iso, label: item.name})));
        });
    }, []);


    return <>
        <div className='row mt-5'>
            <h3>Оформление заказа</h3>
        </div>
        <div className="row justify-content-between">
            <div className="col-5">
                {cartList}
            </div>
            <div className="col-6">
                <Form>
                    <Form.Group>
                        <Form.Label>ФИО</Form.Label>
                        <Form.Control type="text" placeholder="ФИО" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Телефон</Form.Label>
                        <Form.Control type="text" placeholder="Телефон" />
                    </Form.Group>
                    <Card >
                        <Card.Body>
                            <Card.Title>Данные доставки Новой почты</Card.Title>
                            <Form.Group>
                                <Form.Label>Город</Form.Label>
                                <Select options={options} onChange={(e) => console.log(e)}/>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Отделение</Form.Label>
                                <Form.Control type="text" placeholder="Отделение" />
                            </Form.Group>
                        </Card.Body>
                    </Card>
                </Form>
            </div>
        </div>
    </>
}