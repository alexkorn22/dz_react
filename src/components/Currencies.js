import React, {useEffect, useState} from "react";
import CurrenciesTable from "./CurrenciesTable";
import moment from "moment";
import CurrenciesDate from "./CurrenciesDate";
import CurrenciesSelect from "./CurrenciesSelect";

export default function Currencies() {
    let [currencies, setCurrencies] = useState([]);
    let [selectCurrency, setSelectCurrency] = useState(0);
    let [date, setDate] = useState(new Date());

    let dateToQuery = (date) => {
        return moment(date).format('YYYYMMDD');
    }

    let changeDate = (e) => {
        setDate(moment(e.target.value).toDate());
    }

    let changeCurrency = (e) => {
        setSelectCurrency(parseInt(e.target.value));
    }

    let loadData = data => {
        data = data.map(item => {
            return {
                id: item.r030,
                text: item.txt,
                rate: parseFloat(item.rate),
                code: item.cc,
            }
        });
        setCurrencies(data);
    }

    let filterCurrencies = (currencies) => {
        if (!selectCurrency) {
            return currencies;
        }
        return currencies.filter(item => item.id === selectCurrency);
    }

    useEffect(() => {
        let url = `https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json&date=${dateToQuery(date)}`;
        fetch(url)
            .then(res => res.json())
            .then(loadData)
    }, [date])

    return <>
        <div className='row'>
            <div className='col-md-6'>
                <CurrenciesDate  date={date} handleChange={changeDate} />
            </div>
            <div className='col-md-6'>
                <CurrenciesSelect
                    currencies={currencies}
                    selectedId={selectCurrency}
                    onChange={changeCurrency}
                />
            </div>
        </div>
        <div className='mt-2'>
            <CurrenciesTable currencies={filterCurrencies(currencies)} />
        </div>

    </>
}