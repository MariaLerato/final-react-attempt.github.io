import React from 'react'
import { Link } from 'react-router-dom'
import NewsIndex from './newsindex'

const NewsMap = ({story}) =>{
    return(
        <>
     {story.map((action,id)=>{
         <NewsIndex story={story} />
     })}
        </>
    )
}
export default NewsMap