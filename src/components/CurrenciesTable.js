import React from "react";
import {Table} from "react-bootstrap";

export default function CurrenciesTable({currencies}) {
    const rows = currencies.map((item, index) => {
        let { id, text, rate, code} = item;
        return <tr key={id}>
            <td>{index + 1}</td>
            <td>{text}</td>
            <td>{rate.toFixed(2)}</td>
            <td>{code}</td>
        </tr>
    });

    return <Table striped bordered hover>
        <thead>
        <tr>
            <th>#</th>
            <th>Валюта</th>
            <th>Курс</th>
            <th>Код валюты</th>
        </tr>
        </thead>
        <tbody>
        {rows}
        </tbody>
    </Table>;
}