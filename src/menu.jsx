import React from "react";
import { BrowserRouter as Router,Switch, Route } from "react-router-dom";
import Details from "./details";
import Landing from "./landing";

const Top = () => {
    return(
        <div className = 'menu'>
            <Router>
                <Switch>
                    <Route path= {'/details/:id'}>
                        <Details />
                    </Route>
                    <Route path = {'/'}>
                        <Landing />
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}
export default Top

// 469462