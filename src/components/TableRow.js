import React from "react";

function TableRow({country}) {
    let {number, name, capital, region, population, area, currencies } = country;

    return <React.Fragment>
        <th scope="row">{number}</th>
        <td>{name}</td>
        <td>{capital}</td>
        <td>{region}</td>
        <td>{population}</td>
        <td>{area}</td>
        <td>{currencies}</td>
    </React.Fragment>
}

export default TableRow;