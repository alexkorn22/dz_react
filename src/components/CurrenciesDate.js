import React from "react";
import moment from "moment";

export default function CurrenciesDate({ date, handleChange }) {
    return <input
        type='date'
        className="form-control"
        value={moment(date).format('YYYY-MM-DD')}
        onChange={handleChange}
    />
}