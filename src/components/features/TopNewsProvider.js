import React from 'react';
import TopNews from './TopNews';

const TopNewsProvider = (props) =>  {
  
    return (
      <div>
        {props.articles.map((articles) => (
          <TopNews key={articles.title} articles={articles}></TopNews>
        ))}
      </div>
    );
  }


export default TopNewsProvider;
