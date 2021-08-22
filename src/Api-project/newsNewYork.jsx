import React,{useEffect,useState} from 'react';
import axios from 'axios';
import Articles from './article';

const NewsYork = () =>{
    const [loading,setLoading] =useState(false);
    const [articles,setArticles] =useState([]);

    useEffect(()=>{
        const getArticles = async () =>{
            setLoading(true);
            const res = await axios.get(`https://api.nytimes.com/svc/search/v2/articlesearch.json?fq=section_name:("Arts")&sort=newest&api-key=dYbWrWQ8uwiSAqI63nrMFptr8vZZAPcE`)
            setArticles(res.data.response.docs);

            setLoading(false);
        };
        getArticles();
    },[])
    return(
        <div>
            <Articles loading={loading} articles={articles} />
        </div>
    )
}
export default NewsYork