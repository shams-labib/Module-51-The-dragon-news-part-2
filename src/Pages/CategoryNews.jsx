import React, {  useEffect, useState  } from 'react';
import { useLoaderData, useParams } from 'react-router';
import NewsCard from './NewsCard';

const CategoryNews = () => {

    
    const {id} = useParams();
    const parseIntId = parseInt(id)
    const data = useLoaderData();
    
    const [categoryNews, setCategoryNews] = useState([])
    

    useEffect(()=>{

        if(parseIntId === 0) {
            setCategoryNews(data);
            return
        }else if (parseIntId === 1){
             const filtered = data.filter((news) => news.others.is_today_pick === true);
              setCategoryNews(filtered)
        }else{
            // main mal hosce ei sala! jeta 1st e korsilam
            const filtered = data.filter(news => news.category_id == parseIntId);
            setCategoryNews(filtered)
        }
    },[data, parseIntId])


    console.log(categoryNews)

    return (
        <div>
            <h1 className='font-bold mb-5'>Total - <span className='text-secondary'>{categoryNews.length}</span> data Found</h1>

            <div className='grid grid-cols-1 gap-5'>
                  {
                    categoryNews.map(news => <NewsCard key={news.id} news={news}></NewsCard>)
                  }
            </div>
        </div>
    );
};

export default CategoryNews;