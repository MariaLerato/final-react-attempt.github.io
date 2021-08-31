import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import reportWebVitals from './reportWebVitals';
import { HashRouter } from 'react-router-dom';
import MenuPage from './components/menuPage';
import UserDetails from './components/userDetails';
import Details from './components/params';
import NewsPart from './components/newpage';
import NewsMenu from './components/newnewsmenu';
import Landing from './news/landing';
import NewsClass from './news/newsclass';
import New from './new/class';

ReactDOM.render(
    <HashRouter>
    <NewsMenu/>
  </HashRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
