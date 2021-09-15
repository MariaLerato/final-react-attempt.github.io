import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Landing from './landing';
import axios from 'axios';
import {useParam} from 'react-router-dom'
class NewsClass extends Component {
    constructor(props){
        super(props);
        this.state={firstNews:''}
        this.state={firstAbstract:''}
        this.state={second:''}
        this.state={secondAbstract:''}
    }
    render() { 
        return ( 
            <>
           <a href={this.fetchNews()}></a>
           {this.state.firstAbstract}
           {this.state.secondAbstract}
            
            </>
         );
    }
    
    fetchNews =()=>{
        axios.get('https://api.nytimes.com/svc/search/v2/articlesearch.json?q=everything&api-key=hgGZ9Qf26H4JZSuum97ZdjfSvdrM1GG0 ')
        .then((response)=>{
            const testing= response.data;
            console.log(testing);
            const head1=response.data.response.docs[0].web_url;
            const Abstract=response.data.response.docs[0].abstract;
            const heads2=response.data.response.docs[1].web_url;
            const abstract=response.data.response.docs[1].web_url
            this.setState({firstNews:''+head1});
            this.setState({firstAbstract:' '+Abstract})
            this.setState({second:' '+ heads2})
            this.setState({secondAbstract:' '+abstract})
            console.log(head1);
            console.log(Abstract)
        })
        .catch((err)=>{
            console.log(err)
        })
    }}
 
export default NewsClass;