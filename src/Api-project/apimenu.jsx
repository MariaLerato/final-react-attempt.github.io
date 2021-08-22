import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';   
import NewsApp from './app';
import Data from './data';
import NewsYork from './newsNewYork';

const ApiMenu = () =>{
    return(
        <>
        <Router>
            <Switch>
               
                <Route path={'/'}>
                    < NewsYork />
                </Route>
                <Route path={'/data/:id'}>
                    <Data />
                </Route>
            </Switch>
        </Router>
        </>
    )
}
export default ApiMenu