import React from 'react';
import NewsItem from '../components/news_list_item';

const NewsList = (props) => {
    
    const items = props.news.map((item) => {
          return(
              <div>
                    <NewsItem key={item.id} item={item} />
              </div>
              ); 
    });
    
    return (
        <div>{items}</div>
        );
};

export default NewsList;