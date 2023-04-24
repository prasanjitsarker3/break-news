import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import NewsCart from './NewsCart';

const Category = () => {
    const {id}=useParams();
    const categoryNews=useLoaderData();
    return (
        <div>
           {id&&  <small>This is Category:{categoryNews.length}</small>}
            {
                categoryNews.map(news=> <NewsCart
                key={news._id} news={news}
                ></NewsCart>)
            }
        </div>
    );
};

export default Category;