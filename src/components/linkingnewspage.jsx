import React,{useState,useEffect} from 'react'
import './deco.css'
import { useParams } from 'react-router-dom'
import SearchForm from './pagesite'

const NewsLinking = ({articles,setArticles}) =>{
    const [term,setTerm] =useState('everything')
    const [isLoading,setIsLoading] = useState(true)

    const {id : id} = useParams()
    useEffect(()=>{
        const fetchArticles = async () =>{
        try{
                const res = await fetch(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${term}&api-key=hgGZ9Qf26H4JZSuum97ZdjfSvdrM1GG0 `
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
        fetchArticles(id)
    },[term])
    // const {abstract,headline:{main},byline:{original},
    // lead_paragraph,news_desk,section_name,_id,word_count} = articles
    return(
        <>
        <div className="showcase">
            <div className="overlay px-4">
                <h1 className=" text-4xl capitalize font-bold text-white text-center mb-4 lg:text-6xl">News Page</h1>
             </div> 
             
             {
              articles.map(action =>{

                const {abstract,headline:{main},byline:{original}} = action
                    return(
                        <article key={id} style={{padding: 2}}>
                            {main}
                            {abstract}
                            byline:{original}
                        </article>
                    )
              })   
             }
        </div>
        </>
    )
}
export default NewsLinking
