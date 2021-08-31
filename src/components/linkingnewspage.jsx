import React,{useState,useEffect} from 'react'
import './deco.css'
import { Link } from 'react-router-dom'
import SearchForm from './pagesite'
import Thought from './newthought'

const NewsLinking = ({articles,setArticles}) =>{
    const [term,setTerm] =useState('everything')
    const [isLoading,setIsLoading] = useState(true)
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
        fetchArticles()
    },[term])
    // const {abstract,headline:{main},byline:{original},
    // lead_paragraph,news_desk,section_name,_id,word_count} = articles
    return(
        <>
      
        <div className="showcase">
            <div className="overlay px-5">
                <h1 className=" text-4xl capitalize font-bold text-white text-center mb-4 lg:text-6xl">Viewing Articles about {term}</h1>
                <SearchForm  searchText={(text) =>setTerm(text)}/>
            </div>
        </div>
        {isLoading ? (
            <h2>Loading....</h2>
        ):(
            <section className="para grid grid-cols-1 gap-10 px-5">
            {/* {articles.map((article,id)=>{ */}
           
                {/* return( */}
                    <article  className="bg-white py-10 px-5 rounded-lg">
                        {/* <Link to={"//"}>{main}</Link> */}
                       {articles.abstract}
                       {articles.main}
                        {/* <Thought main={main} abstract={abstract} /> */}
                    </article>
                )
{/* })}  */}
        </section>
        )}
        
        </>
    )
}
export default NewsLinking
