import React from 'react';

export default function CurrenciesTableRow ({ item: {text, rate, code}, index }) {
    return <>
        <td>{index + 1}</td>
        <td>{text}</td>
        <td>{rate.toFixed(2)}</td>
        <td>{code}</td>
    </>
}