import React from "react";
import CartList from "../Cart/CartList";
import {Form, Card} from "react-bootstrap";
import Select from 'react-select';

export default function Order({cart, removeFromCart, addCartCount, removeCartCount}) {
    let cartList = <CartList
        cart={cart}
        removeFromCart={removeFromCart}
        addCartCount={addCartCount}
        removeCartCount={removeCartCount}
    />

    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
    ]


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
                                <Select options={options} no/>
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