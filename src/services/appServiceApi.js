import axios from 'axios';

var AppServiceApi = {

    getSpecifiedCountryLatestDetails: (countryCode) => {
        let today = new Date();
        today.setDate(today.getDate() - 1);
        let date = `${today.getFullYear()}-0${today.getMonth() + 1}-${today.getDate()}`;
        let endpoint = `https://covidapi.info/api/v1/country/${countryCode}/${date}`
        return axios(endpoint)
    },

    getSpecifiedCountryDetails: (countryCode) => {
        let endpoint = `https://covidapi.info/api/v1/country/${countryCode}`
        return axios(endpoint)
    },

    getGlobalDetails: (countryCode) => {
        let endpoint = `https://covidapi.info/api/v1/country/${countryCode}`
        return axios(endpoint)
    },
};

export default AppServiceApi;