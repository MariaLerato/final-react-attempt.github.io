import React,{useState} from 'react'
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom'
import NewsPart from './newpage'
import Props from './props'

const NewsMenu = () =>{
    const [articles,setArticles] = useState([])
    return(
        <div className="news-container">
            <Router>
                <Switch>
                <Route path={'/props/:id'}>
                        <Props articles={articles}/>
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