import React,{useState} from 'react'
import { BrowserRouter as Router,Switch, Route } from 'react-router-dom'
import NewsIndex from './newsindex'
import NewsMap from './newsmap'
import Next from './next'

const Landing = () =>{
    const [story,setStory] = useState([])
    return(
        <>
        <Router>
            <Switch>
                <Route path={'/next'}>
                    <Next  story={story}/>
                </Route>
                <Route path={'/newsmap'}>
                    <NewsMap  story={story}/>
                </Route>
                <Route path={'/'}>
                    <NewsIndex  story={story}/>
                </Route>
            </Switch>
        </Router>
        </>
    )
}
export default Landing