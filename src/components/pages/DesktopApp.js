import React, { useState , useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavbarComp from '../features/NavItem';
import Countries from '../features/Countries';
import axios from 'axios';
// import Total from './Total';
// import About from './About';
import AboutCorona from '../pages/AboutCorona';
import Prevention from '../pages/Prevention';
import CountryData from '../features/CountryData';
import MapContainer from '../features/MapContainer';
import { Tab, Nav, Tabs, Container, Row, Col } from 'react-bootstrap';
import SafetyTips from '../features/SafetyTips';
// import LocalData from './LocalData';

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
        <div>
        <NavbarComp />
        <Switch>
        <Route exact path='/' render={(props) => (
            <>
            <Container fluid>
                <Row>
                <Col sm={3}>
                {/* <Total /> */}
                </Col>
                <Col sm={20} style={{ marginTop: '70px' }}>
                    <Tab.Container defaultActiveKey='first'>
                    <Row>
                        <Col sm={3}></Col>
                        <Col sm={6}>
                            <Nav fill variant='pills' defaultActiveKey='first'>
                                <Nav.Item>
                                <Nav.Link className='btn-info' eventKey='first'>
                                    Covid-19 Map
                                </Nav.Link>
                                </Nav.Item>
                                <Nav.Item style={{ marginLeft: '5px'}}>
                                <Nav.Link eventKey='second' className='btn-info'>
                                    All Countries
                                </Nav.Link>
                                </Nav.Item>
                            </Nav>
                            </Col>
                            <Col sm={3}></Col>
                        </Row>
                        <Row>
                            <Col  sm={10}>
                            <Tab.Content style={{ marginLeft: '5px',marginRight: '10px'}}>
                                <Tab.Pane eventKey='first'>
                                 <MapContainer />

                                </Tab.Pane>
                                <Tab.Pane eventKey='second'>
                                <Row>
                                    <Col>
                                    <Countries loading={loading} countriesArr={countries}/>
                                    </Col>
                                    <Col>
                                        <SafetyTips />
                                    </Col>
                                </Row>

                                </Tab.Pane>
                            </Tab.Content>
                            
                            </Col>
                        </Row>
                        </Tab.Container>
                    </Col>
                    </Row>
                    <Row>
                    <Col></Col>
                    </Row>
                </Container>
                {/* <LocalData /> */}
                </>
            )} />         
            {/* <Route exact path='/about' component={About} /> */}
            <Route exact path='/country/:country'
            render={(routeProps) => (
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
        </div>
      </Router>
    );
  }


