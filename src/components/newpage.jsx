import React,{useState,useEffect} from 'react'
import './deco.css'
import { Link } from 'react-router-dom'
import SearchForm from './pagesite'

const NewsPart = ({articles,setArticles}) =>{
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
            {articles.map((article,id)=>{
                const {abstract,headline:{main},byline:{original},
            lead_paragraph,news_desk,section_name,_id,word_count} = article
                return(
                    <article key={_id} className="bg-white py-10 px-5 rounded-lg">
              <Link to={'/props/'+ article._id}> <h2 className="lg:text-4xl"> {main}</h2> </Link>
                     <p>{abstract}</p>
                        <p>{lead_paragraph}</p>
                    <ul className="my-4">
                        <li>
                            {original}
                        </li>
                        <li>
                       <span className="font-bold">News Desk:</span>   {news_desk}
                        </li>
                        <li>
                        <span className="font-bold"> Section Name:</span>      {section_name}
                        </li>
                        <li>
                        <span className="font-bold">Word Count</span>       {word_count}
                        </li>
                    </ul>
                    </article>
                )
})} 
        </section>
        )}
        
        </>
    )
}
export default NewsPart
