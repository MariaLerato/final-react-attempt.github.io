import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import k from './istockphoto-1192070239-612x612.jpg'
import 'bootstrap/dist/css/bootstrap.min.css'
import './stylesheet.css'


const Props = ({articles} ) => {
    const [info, setInfo] = useState({})
    const { id: id } = useParams();
    //get data by id
    useEffect(() => {
        const res = fetch(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=everything&api-key=hgGZ9Qf26H4JZSuum97ZdjfSvdrM1GG0 ` + id
        )
        const articles = res
            .then((res) => { return res.json() })
            .then((data) => setInfo(data))
            // .catch((err) => { console.log(err) })
        setInfo(info)

    }, [])
    console.log('articles', articles)
    return (
        <>
            {/* <h1> {articles.trending} </h1> */}
            <div className="pic">
            <img src={k} alt="news"/>
            {/* {info.abstract} */}
            </div>
                <div className="container mt-4">
                    {articles.map((action, id) => 
                    <li key={info.id}>
                                 {action.abstract}
                    </li>
                    
                    )}
                    {/* )} */}
                    </div>
        

        </>
    )
}
            export default Props