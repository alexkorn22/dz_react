import React, { Component } from "react";

export default class SelectRegion extends Component {

    onChange = (e) => {
        const { onSelectRegion = value => {} } = this.props
        onSelectRegion(e.target.value);
    }

    render() {
        let options = this.props.regions.map(region => {
            return <option key={region} value={region}>{region}</option>
        })

        return <div className="form-group row">
            <label htmlFor="selectSearch" className="col-sm-2 col-form-label">Region</label>
            <div className="col-sm-10">
                <select className="custom-select" value={this.props.selected} onChange={this.onChange}>
                    <option>-</option>
                    {options}
                </select>
            </div>
        </div>
    }
}