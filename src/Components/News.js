import React, { useState, useEffect } from 'react';
import './News.css';

const News = () => {
  const [article, setArticle] = useState(null);

  useEffect(() => {
    fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=1c040be549ee464bbb6bac18500cd509')
      .then(response => response.json())
      .then(data => {
        if (data.articles.length > 0) {
          setArticle(data.articles[0]);
        }
      })
      .catch(error => console.error('Error fetching news data:', error));
  }, []);

  return (
    <div className='news_section'>
      {article && (
        <div>
          <h6 className='news_title'>{article.title}</h6>
          <p className='news_description'>{article.description}</p>
          <img className="news_image" src={article.urlToImage} alt={article.title} />
         
        </div>
      )}
    </div>
  );
};

export default News;


