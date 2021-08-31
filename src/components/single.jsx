import axios from 'axios';
import React,{useEffect,useState} from 'react';
import { useParams } from 'react-router-dom';

const SingleArticle = () =>{
    const [post,setPost] = useState()
    const id = useParams().id
    const [term,setTerm] = useState('everything')
    useEffect(()=>{
        axios.get(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${term}&api-key=hgGZ9Qf26H4JZSuum97ZdjfSvdrM1GG0/${id}`)
        .then(res =>{ setPost(res.data)})
    },[term])
    return(
        <>
        <section>
            <h1>
                {post?.main}
                {post?.abstract}
            </h1>
        </section>
        </>
    )
}
export default SingleArticle