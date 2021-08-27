import React from "react";

import { BrowserRouter as Router,Link,Switch,Route } from "react-router-dom";
import Updates from "./forms";
import NewForm from "./newform";

const Header = () =>{
    return (
        <>
        <Router>
        <ul>
            <li><Link to={'/'}>Home</Link></li>
            
        </ul>
        <Switch>
            <Route path={'/forms/:id'}>
                <Updates />
            </Route>
            <Route path={'/'}>
                <NewForm />
            </Route>
        </Switch>
        </Router>
        </>
    )
}
export default Header