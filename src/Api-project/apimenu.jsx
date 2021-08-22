import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';   
import NewsYork from './newsNewYork';

const ApiMenu = () =>{
    return(
        <>
        <Router>
            <Switch>
               
                <Route path={'/'}>
                    < NewsYork />
                </Route>
               
            </Switch>
        </Router>
        </>
    )
}
export default ApiMenu