import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

const NewsArticles = ({data,setData}) => {
    // const [data, setData] = useState([])

    useEffect(() => {
        fetch(`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=ca8fca1e1bf243638dcfd1a05102b0fa`)
            .then((res) => { return res.json() })
            .then((_data) => { setData(_data) })
            .catch((err) => { console.log(err) })
            .finally(() => { console.log('done') })
    })
    return (
        <>
            <div className="list-group">

                
            <h1>Maria</h1>
                {data.map((action) => <li>{action.articles}</li>

                )}
            </div>
        </>
    )
}
export default NewsArticles