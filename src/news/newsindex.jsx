import React,{useState} from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'


const NewsIndex = ({story,setStory}) =>{
    const [data,setData] = useState([])
    const [term,setTerm] = useState('everything')
    useEffect(()=>{
        const fetchStory = async => {
        try{
                 fetch(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${term}&api-key=hgGZ9Qf26H4JZSuum97ZdjfSvdrM1GG0 `)
                .then((res)=>{ return res.json()})  
                console.log(story)
                setStory(story.response.docs)
                
        }
        catch (err){
            console.log(err)
        }
      
        }
        fetchStory()
    },[])
    
    return(
        <>
        {story.abstract}
        <h1>Maria</h1>
        </>
    )
}
export default NewsIndex