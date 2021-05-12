import React from "react";
import {Form} from "react-bootstrap";

export default function CurrenciesSelect({ currencies, selectedId = 0, onChange}) {

    return <Form.Control as="select" custom value={selectedId} onChange={onChange}>
        <option value={0}>-</option>
        {currencies.map(item => <option key={item.id} value={item.id}>{item.text}</option>)}
    </Form.Control>;
}