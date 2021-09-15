import React,{useState,useEffect} from "react";
import axios from "axios";

const New = () => {
    const [state,setState] = useState([])
   const fetchNews = () =>{
        axios.get('https://api.nytimes.com/svc/search/v2/articlesearch.json?q=everything&api-key=hgGZ9Qf26H4JZSuum97ZdjfSvdrM1GG0 ')
        .then((response)=>{
            const testing = response.data;
            console.log(testing)
            const headlines1 = response.data.response.docs[0].web_url;
            const headlinesAbstract = response.data.response.docs[0].abstract;
            const headlinesWeb = response.data.response.docs[1].web_url;
            setState({firstNewsUrl:''+headlines1})
            setState({firstNewsAbstract:''+headlinesAbstract})
            setState({value:''})
            console.log(headlines1);
            console.log(headlinesAbstract);
        })
        .catch((err)=>{
            console.log(err)
        })
    }
    fetchNews()

        return ( 
            <>
            <a href={state.firstNewsAbstract}></a>
            </>
         );
    
}
 
export default New;