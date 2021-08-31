import React,{useState} from 'react'
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom'
import NewsLinking from './linkingnewspage'
// import NewsArticle from './arithemt'
import NewsPart from './newpage'
import NewsLink from './newslink'
import Thought from './newthought'
// import NewsYork from '../../react-firestore/newsNewYork'
import Props from './props'
import SingleArticle from './single'

const NewsMenu = () =>{
    const [articles,setArticles] = useState([])
    return(
        <div className="news-container">
            <Router>
                <Switch>
                <Route path={'/newthought/:id'}>
                            <Thought />
                        </Route>
                    <Route path={'/single/:id'}>
                        <SingleArticle />
                    </Route>
                <Route path={'/props/:id'}>
                        <Props articles={articles}/>
                    </Route>
                    <Route path={'/newslink/:id'}>
                        <NewsLink />
                       
                    </Route>
                    <Route path={'/linkingnewspage/:id'}>
                        <NewsLinking articles={articles} setArticles={setArticles}/>
                    </Route>
                    <Route path={'/'}>
                        <NewsPart articles={articles} setArticles={setArticles}/>
                    </Route>

                 
                </Switch>
            </Router>
        
        </div>
    )
}
export default NewsMenu