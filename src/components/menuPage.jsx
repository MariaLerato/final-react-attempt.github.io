import React, { Fragment, useState ,useEffect} from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import UserDetails from './userDetails';
import Form from './form';
import NewsMenu from './newnewsmenu';
import Menu from './class';
import Details from './params';
import UserDets from './Add';

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
                   
                    <Route path={'/params/:id'}>
                              <Details d={users} users={users} setUser={setUsers}/>
                        
                    </Route>
                    <Route path={'/userDetails/:id'}>
                        {users.map((props) => (
                            <Fragment>
                                <UserDetails props={props} users={users} setUser={setUsers}/>
                            </Fragment>
                        ))}

                    </Route>
                    <Route path={'/Add/:id'}>
                        <UserDets users={users} />
                    </Route>
                   
                    <Route path={'/'}>
                        <Form users={users} setUsers={setUsers}/>
                    </Route>
                   
                </Switch>
            </Router>

        </div> 
    )              
}
export default MenuPage