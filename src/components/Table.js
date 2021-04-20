import React from "react";
import TableRow from "./TableRow";

function Table(props) {
    let rows = this.props.countries.map(country => {
        return <tr key={country.code}><TableRow country={country} /></tr>
    });

    return <table className="table table-striped table-hover table-bordered">
        <thead>
        <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Capital</th>
            <th scope="col">Region</th>
            <th scope="col">Population</th>
            <th scope="col">Area</th>
            <th scope="col">Currencies</th>
        </tr>
        </thead>
        <tbody>
        {rows}
        </tbody>
    </table>
}

export default Table;