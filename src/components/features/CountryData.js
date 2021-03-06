import React, {useState,useEffect} from 'react';
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  Button,
  CardDeck,
} from 'reactstrap';
import Chart from 'react-google-charts';

const CountryData = (props) => {

    const getCountryData = props.getCountryData;
    console.log(props.country)
    getCountryData(props.match.params.country)
    
 
    return (
      <div style={{ marginTop: '70px' }}>
        <Container>
          <Row>
            <Col xs='8'>
              <Card inverse body outline color='primary'>
                <CardBody>
                  <h2 style={{ color: 'black' }}>
                    {props.country.country} - Covid-19 Overview
                  </h2>
                  <CardDeck style={{ marginTop: '20px', marginLeft: '50px' }}>
                    <Card body inverse color='info' className='text-center'>
                      <h3>{props.country.cases}</h3>
                      <h4>Confirmed</h4>
                    </Card>
                    <Card body inverse color='danger' className='text-center'>
                      <h3>{props.country.deaths}</h3>
                      <h4>Deaths</h4>
                    </Card>
                    <Card body inverse color='success' className='text-center'>
                      <h3>{props.country.recovered}</h3>
                      <h4>Recovered</h4>
                    </Card>
                    <div>
                      <Chart
                        width={'500px'}
                        height={'300px'}
                        style={{ marginLeft: '50px' }}
                        chartType='PieChart'
                        loader={<div>Loading....</div>}
                        data={[
                          ['Task', 'Hours per Day'],
                          ['', ''],
                          ['Deaths', props.country.deaths],
                          ['Active', props.country.active],
                          ['Recovered', props.country.recovered],
                        ]}
                        options={{
                          title: 'Overview in Percentage',
                        }}
                      />
                    </div>
                  </CardDeck>
                </CardBody>
              </Card>
            </Col>
            <Col xs='4'>
              <Card style={{}} inverse body outline color='primary'>
                <CardBody>
                  <div
                    style={{
                      color: 'black',
                      textAlign: 'center',
                      marginTop: '-20px',
                    }}
                  >
                    <h2>{props.country.critical} </h2>{' '}
                    <h3>Critical Cases treated in ICU</h3>
                    <hr></hr>
                  </div>
                  <Card>
                    <Button disabled color='primary'>
                      <h4>Today</h4>
                    </Button>
                    <CardBody>
                      <Card
                        body
                        inverse
                        color='warning'
                        className='text-center'
                      >
                        <h3>{props.country.todayCases}</h3>
                        <h4>New Cases</h4>
                      </Card>
                      <Card
                        body
                        inverse
                        color='danger'
                        className='text-center'
                        style={{ marginTop: '20px' }}
                      >
                        <h3>{props.country.todayDeaths}</h3>
                        <h4>New Deaths</h4>
                      </Card>
                    </CardBody>
                  </Card>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
        <h1></h1>
      </div>
    );
  }


export default CountryData;
