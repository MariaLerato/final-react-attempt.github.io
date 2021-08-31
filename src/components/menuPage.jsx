import React, {  useState } from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from './form';
import Menu from './class';
import UserDets from './Add';
import Edit from './edit';
import NewsLink from './linkingnewspage';

const MenuPage = ({}) => {
    
    const [users,setUsers] = useState([])
 
    return (
        <div className='group-container'>
            <Router>
                <div className='nav'>
                    <ul>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/class'>News Feed</Link></li>
                    </ul>
                </div>
                <Switch>
                    <Route path={'/class'}>
                        < Menu/>
                    </Route>
                   
                    <Route path={'/edit/:id'}>
                              <Edit />
                              {/* details e kae */}
                              {/* never mind dis one gape ke dirile a million pages befor ke dira the one ya add */}
                        
                    </Route>
                   
                 {/* i clled it here so, without the arrays or the props or mapping */}
                    <Route path={'/Add/:id'}>
                        <UserDets />
                    </Route>
                   
                    <Route path={'/'}>
                        <Form users={users} setUsers={setUsers}/>
                        {/* this one yona k */}
                    </Route>
                   
                </Switch>
            </Router>

        </div> 
    )              
}
export default MenuPage