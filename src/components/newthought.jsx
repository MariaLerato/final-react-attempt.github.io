import {useParam, useParams} from 'react-router-dom';
import React, { useState, useEffect } from 'react';

const Thought =() =>{
    const [articles,setArticles]=([])
    const [term,setTerm] =useState('everything')
    const [isLoading,setIsLoading] = useState(true)
    const {_id:_id}=useParams()
    useEffect(()=>{
        const fetchArticles = async () =>{
        try{
                const res = await fetch(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${term}&api-key=hgGZ9Qf26H4JZSuum97ZdjfSvdrM1GG0 ` + _id
                )
                const articles = await res.json()
                console.log(articles)
                setArticles(articles.response.docs)
                setIsLoading(false)
            }
            catch (err) {
                console.log(err)
            }
        }
        fetchArticles()
    },[term])

    return(
        <>
        {isLoading?(
            <h2>Loading</h2>
        ):(
            <section>
                  {articles.map((article)=>{
               const {abstract,headline:{main}} = article
               return(
                   {abstract}
               )
       })}
            </section>
        )}
     
        
        </>
    )
}
export default Thought