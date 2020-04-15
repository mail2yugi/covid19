import React, { useState, useEffect } from 'react';
import './App.scss';
import HeaderBar from './pages/header/haderBar';
import SpecificCountry from './pages/specificCountry/specificCountry';
import AppServiceApi from './services/appServiceApi'

const App = (props) => {
  const [country3code, setCountry3code] = useState("IND");
  const [latestDtls, setLatestDtls] = useState(null);
  const [countrytDtls, setCountrytDtls] = useState(null);

  useEffect(() => {
    AppServiceApi.getSpecifiedCountryLatestDetails(country3code).then((res) => {
      if(res.data.result) {
        Object.keys(res.data.result).forEach((key) => setLatestDtls(res.data.result[key]));
      }
    });
    AppServiceApi.getSpecifiedCountryDetails(country3code).then((res) => {
      if(res.data.result) {
        setCountrytDtls(res.data.result);
      }
    });
  }, [country3code])

  return (
    <div className="App">
      <HeaderBar 
        setCountry3code={setCountry3code}
        country3code={country3code} />
      <SpecificCountry
        latestDtls={latestDtls}
        countrytDtls={countrytDtls}
        country3code={country3code} />
    </div>
  );
}

export default App;
