import React, { useState , useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavbarComp from '../features/NavItem';
import About from '../pages//About';
import AboutCorona from '../pages/AboutCorona';
import Prevention from '../pages/Prevention';
import CountryData from '../features/CountryData';
import MainContainer  from '../features/MainContainer';
export default function DesktopApp() {

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
        <NavbarComp />
        <Switch>
        <Route exact path='/' render={routeProps =>  (
        <MainContainer {...routeProps} loading={loading} countries={countries}/>
        )} />         
        <Route exact path='/about' component={About} />
        <Route exact path='/country/:country'
          render={routeProps => (
              <CountryData
                {...routeProps}
                getCountryData={GetCountryData}
                country={country}
                loading={loading}
                />
              )}
            />
        <Route exact path='/about-covid-19' component={AboutCorona} />
        <Route exact path='/prevention' component={Prevention} />
        </Switch>
      </Router>
    );
  }


