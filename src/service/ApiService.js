
export default class ApiService {
    _baseUrl = 'https://restcountries.eu/rest/v2/all';

    async getResource() {
        let url = this._baseUrl;
        const res = await fetch(url);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}` +
                `, received ${res.status}`)
        }
        return await res.json();
    }

    getCountries = async () => {
        let res = await this.getResource();
        return res.map(this._formatCountry);
    }

    _formatCountry(country, index) {
        return {
            number: index + 1,
            code: country.alpha3Code,
            name: country.name,
            capital: country.capital,
            region: country.region,
            population: country.population,
            area: country.area,
            currencies: country.currencies.map(value => value.name).join(', '),
        }
    }
}