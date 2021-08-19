import React  from 'react';
import {
    Container,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardHeader,
  Button,
  CardSubtitle,
  Col,
} from 'reactstrap';

import { Link } from 'react-router-dom';
import NumberFormat from 'react-number-format';

const Country = (props) => {
  
    return (
      <div>
        <div style={{}}>
          <Container>
            <Card>
              <Card className='text-center'>
                <CardHeader>
                  <CardImg
                    src={props.countries.countryInfo.flag}
                    alt='img'
                    style={{ width: '60px', float: 'left' }}
                  />
                  <CardTitle>
                    {' '}
                    <h4>{props.countries.country}</h4>
                  </CardTitle>
                </CardHeader>
                <CardBody style={{}}>
                  <CardSubtitle>
                    {' '}
                    <strong> Cases : </strong>
                    <NumberFormat
                      value={props.countries.cases}
                      displayType={'text'}
                      thousandSeparator={true}
                      renderText={(value) => <span>{value}</span>}
                    />
                  </CardSubtitle>
                  <CardSubtitle>
                    {' '}
                    <strong>Deaths : </strong>
                    <NumberFormat
                      value={props.countries.deaths}
                      displayType={'text'}
                      thousandSeparator={true}
                      renderText={(value) => <span>{value}</span>}
                    />
                  </CardSubtitle>
                  <CardSubtitle>
                    <strong>Recovered :</strong>{' '}
                    <NumberFormat
                      value={props.countries.recovered}
                      displayType={'text'}
                      thousandSeparator={true}
                      renderText={(value) => <span>{value}</span>}
                    />{' '}
                  </CardSubtitle>
                  <CardSubtitle>
                    <strong>Critical :</strong>{' '}
                    <NumberFormat
                      value={props.countries.critical}
                      displayType={'text'}
                      thousandSeparator={true}
                      renderText={(value) => <span>{value}</span>}
                    />{' '}
                  </CardSubtitle>
                  <CardSubtitle>
                    <strong>Active :</strong>{' '}
                    <NumberFormat
                      value={props.countries.active}
                      displayType={'text'}
                      thousandSeparator={true}
                      renderText={(value) => <span>{value}</span>}
                    />{' '}
                  </CardSubtitle>
                  <hr />
                  <CardSubtitle>
                    <strong>Cases Today :</strong>{' '}
                    <NumberFormat
                      value={props.countries.todayCases}
                      displayType={'text'}
                      thousandSeparator={true}
                      renderText={(value) => <span>{value}</span>}
                    />{' '}
                  </CardSubtitle>
                  <CardSubtitle>
                    <strong>Deaths Today:</strong>{' '}
                    <NumberFormat
                      value={props.countries.todayDeaths}
                      displayType={'text'}
                      thousandSeparator={true}
                      renderText={(value) => <span>{value}</span>}
                    />{' '}
                  </CardSubtitle>
                </CardBody>
                <Link to={`/country/${props.countries.country}`}>
                  <Button style={{ width: '100%' }}>More Info </Button>
                </Link>
              </Card>
            </Card>
          </Container>
        </div>
      </div>
    );
  }


export default Country;
