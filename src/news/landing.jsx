import React,{useState} from 'react'
import { BrowserRouter as Router,Switch, Route } from 'react-router-dom'
import NewsArticles from './newsindex'
import NewsIndex from './newsindex'
import NewsMap from './newsmap'
import Next from './next'

const Landing = () =>{
   const [data,setData] = useState([])
    return(
        <>
        <Router>
            <Switch>
                <Route path={'/next/:id'}>
                    <Next />
                </Route>
               
                <Route path={'/'}>
                    <NewsMap data={data} setData={setData}/>
                </Route>
            </Switch>
        </Router>
        </>
    )
}
export default Landing