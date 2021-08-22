import React from 'react';
import Article from './articles';
import './stylesheet.css'
const Articles = ({articles}) =>{
    return(
        <div className="container">
        <h1>Top Stories</h1>
        <div className="news-container-card">
            
            {articles.map((article)=>(
                <li key={article._id}>
                        <Article article={article} />
                </li> 
                        ))}
        
        </div>
        </div>
    );
}

export default Articles
