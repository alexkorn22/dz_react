import React from "react";
import {Table} from "react-bootstrap";
import CurrenciesTableRow from "./CurrenciesTableRow";

export default function CurrenciesTable({currencies}) {
    const rows = currencies.map((item, index) => {
        return <tr key={item.id}>
            <CurrenciesTableRow item={item} index={index} />
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