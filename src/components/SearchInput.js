import React, { Component } from "react";

export default class SearchInput extends Component {

    onChange = (e) => {
        const {onSearchText = text => {}} = this.props;
        onSearchText(e.target.value);
    }

    render() {
        return <div className="form-group row">
            <label htmlFor="inputSearch" className="col-sm-2 col-form-label">Search</label>
            <div className="col-sm-10">
                <input
                    type="text"
                    className="form-control"
                    id="inputSearch"
                    onChange={this.onChange}
                    value={this.props.text}/>
            </div>
        </div>
    }
}