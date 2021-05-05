import React, {Component, useEffect, useState} from "react";
import ApiService from "../service/ApiService";
import Table from "./Table";
import SearchInput from "./SearchInput";
import SelectRegion from "./SelectRegion";
import Loading from "./Loading";

class AppOld extends Component {
    api = new ApiService();

    state = {
        countries: [],
        searchText: '',
        regions: [],
        searchRegion: '-',
        loading: true,
    }

    componentDidMount() {
        this.api.getCountries().then((countries) => {
            this.setState({
                countries,
                regions: this.getRegions(countries),
                loading: false,
            })
        });
    }

    getRegions(countries) {
        let result = [];

        for (let country of countries) {
            if (!result.includes(country.region)) {
                result.push(country.region);
            }
        }

        return result;
    }

    onSearchText = (searchText) => {
        searchText = searchText.trim();
        this.setState({searchText, searchRegion: '-'});
    }

    onSelectRegion = (searchRegion) => {
        this.setState({searchRegion, searchText: ''});
    }

    filterSelectRegion = (countries, searchRegion) => {
        if (searchRegion === '-') {
            return countries;
        }
        return countries.filter(country => country.region === searchRegion);
    }

    filterSearchText(countries, searchText) {
        searchText = searchText.toLowerCase();
        if (!searchText.length) {
            return countries;
        }
        return countries.filter(country => {
            const {name, capital, region} = country;
            return name.toLowerCase().indexOf(searchText) > -1 ||
                capital.toLowerCase().indexOf(searchText) > -1 ||
                region.toLowerCase().indexOf(searchText) > -1;
        });
    }

    render() {
        let {countries, regions, searchText, searchRegion, loading} = this.state;
        if (loading) {
            return <Loading />
        }
        countries = this.filterSearchText(this.filterSelectRegion(countries, searchRegion), searchText);

        return <div className="container">
            <h1>Countries</h1>
            <div className="row">
                <div className="col-md-6">
                    <SearchInput text={searchText} onSearchText={this.onSearchText}/>
                </div>
                <div className="col-md-6">
                    <SelectRegion regions={regions} selected={searchRegion} onSelectRegion={this.onSelectRegion} />
                </div>
            </div>
            <Table countries={countries}/>
        </div>;
    }
}

function App(props) {
    let api = new ApiService();

    let [countries, setCountries] = useState([]);
    let [regions, setRegions] = useState([]);
    let [loading, setLoading] = useState(true);
    let [searchRegion, setSearchRegion] = useState('-');
    let [searchText, setSearchText] = useState('');

    let getRegions = (countries) => {
        let result = [];

        for (let country of countries) {
            if (!result.includes(country.region)) {
                result.push(country.region);
            }
        }

        return result;
    }
    api.getCountries().then((newCountries) => {
        setCountries(newCountries);
        setRegions(getRegions(newCountries));
        setLoading(true);
    }, []);


    let onSearchText = (newSearchText) => {
        setSearchText(newSearchText.trim());
        setSearchRegion('-');
    }

    let onSelectRegion = (searchRegion) => {
        setSearchText('');
        setSearchRegion(searchRegion);
    }

    let filterSelectRegion = (countries, searchRegion) => {
        if (searchRegion === '-') {
            return countries;
        }
        return countries.filter(country => country.region === searchRegion);
    }

    let filterSearchText = (countries, searchText) => {
        searchText = searchText.toLowerCase();
        if (!searchText.length) {
            return countries;
        }
        return countries.filter(country => {
            const {name, capital, region} = country;
            return name.toLowerCase().indexOf(searchText) > -1 ||
                capital.toLowerCase().indexOf(searchText) > -1 ||
                region.toLowerCase().indexOf(searchText) > -1;
        });
    }

    if (loading) {
        return <Loading />
    }
    let dataCountries = filterSearchText(filterSelectRegion(countries, searchRegion), searchText);

    return <div className="container">
        <h1>Countries</h1>
        <div className="row">
            <div className="col-md-6">
                <SearchInput text={searchText} onSearchText={onSearchText}/>
            </div>
            <div className="col-md-6">
                <SelectRegion regions={regions} selected={searchRegion} onSelectRegion={onSelectRegion} />
            </div>
        </div>
        <Table countries={dataCountries}/>
    </div>;
}

export default App;