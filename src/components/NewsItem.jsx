// NewsItem.jsx

import { useState, useEffect } from 'react';
import axios from 'axios';
import './newsItem.css';

const NewsItem = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await axios.get(
          'https://newsapi.org/v2/everything?q=Azamgarh&apiKey=89892d12891f4f0481b42c4753eb4f00'
        );
        setArticles(response.data.articles);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  if (loading) {
    return <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(255, 255, 255, 0.7)',
      zIndex: 9999
    }}>
      <style>
        {`
          .loading-spinner {
            border: 8px solid rgba(0, 0, 0, 0.3);
            border-radius: 50%;
            border-top: 8px solid #000;
            width: 50px;
            height: 50px;
            animation: spin 2s linear infinite;
            margin-right: 10px; /* Adjust as needed */
          }
    
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}
      </style>
      <div className="loading-spinner"></div>
      Loading...
    </div>
    
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div >
      <h1 className='h12'>Azamgarh News</h1>
      <div className="news-container">
        {articles.map((article, index) => (
          <div className="news-card" key={index}>
            <h2>{article.title}</h2>
            {article.urlToImage && <img src={article.urlToImage} alt={article.title} />}
            <p>{article.description}</p>
            <a href={article.url}>Read more</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsItem;
