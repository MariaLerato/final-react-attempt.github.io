import React from 'react'

const NewsApp = ({article}) =>{
    return(
        <div className="lists">
        {article && (
            <ul className="list-group" id={article._id}>
            <li class="list-group-item d-flex justify-content-between align-items-center">
              <a href={article.web_url}>{article.headline.main}</a>
              <i>{article.byline.original}</i>
              <span class="badge badge-primary badge-pill">1</span>
            </li>
          
          </ul>
        )}

        </div>
    )
}
export default NewsApp