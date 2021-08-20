require('dotenv').config();
import React, { useState , useEffect } from 'react';
import CountUp from 'react-countup';
import {
  Spinner,
  Container,
  Card,
  CardTitle,
  CardText,
  Row,
  Col,
  Button,
} from 'reactstrap';
import '../../App.css';
import TopNewsProvider from '../features/TopNewsProvider';

const LocalData = () => {
    const [countries,setCountries] = useState([]);
    const [articles,setArticles] = useState([]);
    const [recovered,setRecovered] = useState([]);
    const [cases,setCases] = useState([]);
    const [deaths,setDeaths] = useState([]);
    const [active,setActive] = useState([]);
    const [critical,setCritical] = useState([]);
    const [todayCases,setTodayCases] = useState([]);
    const [todayDeaths,setTodayDeaths] = useState([]);
    const [country,setCountry] = useState([]);
    const [defaultCountry,setDefaultCountry] = useState([]);
    const [loading,setLoading] = useState([]);


    useEffect(() => {
        fetch('https://corona.lmao.ninja/v2/countries')
        .then(response => response.json())
        .then( result =>{
            setCountries(result.countries);
            setLoading(true)
        })

        fetch(`http://newsapi.org/v2/everything?q=covid19&language=en&sortBy=publishedAt&apiKey=${process.env.API_NEWS_KEY}`)
        .then(response => response.json())
        .then( result =>{
            setArticles(result.articles);
            setLoading(true)
        })
  })

    return (
      <div style={{ marginTop: '20px' }}>
        <div>
          <Container fluid>
            <Row style={{ marginBottom: '35px', marginLeft: '5px' }}>
            <Col sm={4}>
                <Button disabled nstyle={{ backgroundColor: 'black', color: 'white', width: '100%', }}>
                <h4>Top News</h4>
                </Button>
                <Card className='shadow-sm' style={{height: '435px',overflowY: 'auto',}}>
                <TopNewsProvider loading={loading} articles={articles} />
                </Card>
            </Col>
            <Col sm={8} style={{ textAlign: 'center', marginTop: '40px' }}>
                <div style={{textAlign: 'center',marginTop: '60px',marginLeft: '500px',}}>
                </div>
                <h3 style={{ marginLeft: '-300px', marginTop: '-50px' , fontWeight:800 }}>
                World COVID-19 Statistics
                </h3>
                <Row style={{ textAlign: 'center' }} style={{ marginTop: '45px', marginRight: '10px' }}>
                <Col>
                    <Card outline style={{ borderColor: '#3185F0',borderWidth: '2px',height: '100px',}} className='shadow-sm'>
                    <h1 style={{ color: '#3185F0' }}><CountUp end={210937560} duration={20}/></h1>
                    <h4>Total Infected</h4>
                    </Card>
                </Col>
                <Col>
                    <Card outline style={{ borderColor: '#F03131',borderWidth: '2px',height: '100px',}}className='shadow-sm'>
                    <h1 style={{ color: '#F03131' }}><CountUp end={4418993} duration={20}/></h1>
                    <h4>Total Deaths</h4>
                    </Card>
                </Col>
                <Col>
                    <Card outline style={{borderColor: '#099714',borderWidth: '2px',height: '100px',}}className='shadow-sm'>
                    <h1 style={{ color: '#099714' }}>
                        <CountUp end={188848042} duration={20}/>
                    </h1>
                    <h4>Total Recovered</h4>
                    </Card>
                </Col>
                </Row>
                <Row style={{marginTop: '20px',marginRight: '10px',}}>
                <Col>
                    <Card bod inverse style={{ backgroundColor: '#333',borderColor: '#3185F0',borderWidth: '2px',height: '100px',}}className='shadow-sm'>
                    <h1 style={{ color: '#3185F0'}}>
                    <CountUp end={17670525} duration={20}/>
                    </h1>
                    <h4>Infected Today </h4>
                    </Card>
                </Col>
                <Col>
                    <Card inverse style={{backgroundColor: '#333',borderColor: '#3185F0',borderWidth: '2px',height: '100px',}}className='shadow-sm'>
                    <h1 style={{ color: '#F03131' }}>
                    <CountUp end={4416841} duration={20}/>
                    </h1>
                    <h4>Deaths Today </h4>
                    </Card>
                </Col>
                <Col>
                    <Card outline style={{borderColor: '#F03131',borderWidth: '2px',height: '100px',}} className='shadow-sm'>
                    <h1 style={{ color: '#F03131' }}>0.<CountUp end={8} duration={10}/>%</h1>
                    <h4>Mortality Rate </h4>
                    </Card>
                </Col>
                </Row>
            </Col>
            </Row>
            <hr />
            <Row style={{ height: '40px', textAlign: 'center' }}>
            <Col sm={3}></Col>
            </Row>
        </Container>
        </div>
    </div>
    );
}


export default LocalData;
