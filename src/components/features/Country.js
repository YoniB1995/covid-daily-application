import React from 'react';
import {
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
      <div style={{}}>
        <Card className='shadow'>
          <CardHeader className='text-center'>
            <CardImg
              src={props.countries.countryInfo.flag}
              alt='img'
              style={{ width: '60px', float: 'left' }}
            />
            <CardTitle>
              {' '}
              <strong>{props.countries.country}</strong>
            </CardTitle>
          </CardHeader>
          <CardBody className='text-center' style={{}}>
            <CardSubtitle>
              {' '}
              <strong> Confrimed : </strong>
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
              />{' '}
            </CardSubtitle>
            <CardSubtitle>
              <strong>Recovered : </strong>
              <NumberFormat
                value={props.countries.recovered}
                displayType={'text'}
                thousandSeparator={true}
                renderText={(value) => <span>{value}</span>}
              />{' '}
            </CardSubtitle>
            <hr />
            <CardSubtitle>
              <strong>Cases Today : </strong>
              <NumberFormat
                value={props.countries.todayCases}
                displayType={'text'}
                thousandSeparator={true}
                renderText={(value) => <span>{value}</span>}
              />{' '}
            </CardSubtitle>
            <CardSubtitle>
              <strong>Deaths Today: </strong>
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
      </div>
    );
  }


export default Country;
