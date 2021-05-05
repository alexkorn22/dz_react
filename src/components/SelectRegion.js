import React from "react";

function SelectRegion(props) {
    const { onSelectRegion = value => {} } = props;

    let options = props.regions.map(region => {
        return <option key={region} value={region}>{region}</option>
    })

    return <div className="form-group row">
        <label htmlFor="selectSearch" className="col-sm-2 col-form-label">Region</label>
        <div className="col-sm-10">
            <select className="custom-select" value={props.selected} onChange={(e) => {onSelectRegion(e.target.value)}}>
                <option>-</option>
                {options}
            </select>
        </div>
    </div>
}

export default SelectRegion;