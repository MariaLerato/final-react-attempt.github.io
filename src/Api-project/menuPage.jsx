import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import UserDetails from './userDetails';
import New from './new';
import HomePageRouter from './news';


const MenuPage = ({ }) => {
   
    const users= {
    }
    return (
        <div className='group-container'>
           
            <Router>
                <div className='nav'>
                    <ul>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/news'>News Feed</Link></li>
                    </ul>
                </div>
                <Switch>
                    <Route path={'/news'}>
                        <HomePageRouter/>
                    </Route>
                    <Route path = {'/userDetails/:id'}>
                        <UserDetails/>
                    </Route>
                    <Route path = {'/'}>
                        <New />
                    </Route>
                </Switch>
            </Router>
            {/* {names.map(action =><li> {names}</li>)} */}
        </div>
    )
}
export default MenuPage