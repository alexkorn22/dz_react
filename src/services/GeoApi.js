
const API_KEY = 'OPWQzVKZwZ7lMaPlOUx3raw4rO4vSzbu';
const URL = 'http://geohelper.info/api/v1/';

export async function getCities() {

    let formatCity = (data) => {
        let {id, iso, name} = data;

        return {id, iso, name};
    }

    return await fetch(makeUrl('countries'))
        .then(res => res.json())
        .then(res => res.result.map(data => formatCity(data)));
}

function makeUrl(query) {
    let params = {
        apiKey: API_KEY,
        'locale[lang]': 'ru'
    };

    return URL + query + `?apiKey=${API_KEY}&locale[lang]=ru`;
}