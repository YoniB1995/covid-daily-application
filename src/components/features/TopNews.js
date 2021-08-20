import React from 'react';
import { Card, Button, CardTitle, CardText } from 'reactstrap';

const TopNews = (props) => {

    return (
    <div>
        <Card body style={{ backgroundColor: '', borderColor: 'black', marginBottom: '5px',}}>
        <CardTitle style={{ marginTop: '-10px' }}>
            <strong>{props.articles.title} </strong>
            <span style={{ fontSize: '12px' }}>
            [Published : {props.articles.publishedAt}]
            </span>
        </CardTitle>

        <a className='text-center' href={props.articles.url} target="_blank">
            Read more
        </a>
        </Card>
    </div>
    );
  }


export default TopNews;
