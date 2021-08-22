import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import MenuPage from './Api-project/menuPage';
import Landing from './Api-project/try';
import NewsYork from './Api-project/newsNewYork';
import UserDetails from './Api-project/userDetails';
import PropsMenu from './Api-project/propsMenu';
import Functions from './Api-project/functions';
import New from './Api-project/new';
import { HashRouter } from 'react-router-dom';



ReactDOM.render(
  <HashRouter>
    <MenuPage/>
  </HashRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
