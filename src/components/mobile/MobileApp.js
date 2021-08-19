import React, {useEffect,useState} from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavbarComp from './Nav';
import Countries from './Countries';
import AboutCorona from './AboutCorona';
import About from './About';
import Prevention from './Prevention';
import CountryData from './CountryData';

const MobileApp = () => {
  const [country, setCountry] = useState([])
  const [countries, setCountries] = useState([])
  const [loading, setLoading] = useState(false)
  const CountriesApi = 'https://corona.lmao.ninja/v2/countries/';

  useEffect(() => {
    setLoading(true);
    fetch(CountriesApi)
    .then(response => response.json())
    .then(result => setCountries(result))
    setLoading(false);
  }, [])

  const GetCountryData =  (country) => {
      useEffect(() => {
    setLoading(true);
    fetch(`${CountriesApi}${country}`)
    .then(response => response.json())
    .then(result => setCountry(result))
    setLoading(false);
  }, [])
    
    }

    return (
      <Router>
        <div>
          <NavbarComp />
          <Switch>
            <Route exact path='/' render={(props) => (
                <>
                <Countries
                    loading={loading}
                    countries={countries}
                />
                </>
              )}
            />
            <Route exact path='/about' component={About} />
            <Route exact path='/country/:country'
              render={(props) => (
                <CountryData
                  {...props}
                  getCountryData={GetCountryData}
                  country={country}
                  loading={loading}
                />
              )}
            />
            <Route exact path='/about-covid-19' component={AboutCorona} />
            <Route exact path='/prevention' component={Prevention} />
          </Switch>
        </div>
      </Router>
    );
  }


export default MobileApp;
