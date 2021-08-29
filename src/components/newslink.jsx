import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import firebase from 'firebase'
import 'bootstrap/dist/css/bootstrap.min.css'

const NewsLink = () => {
    const db = firebase.firestore()
    const [inform, setInform] = useState({})
    const [term,setTerm] =useState('everything')
    const { id: id } = useParams()
    // get data by id
    useEffect(() => {
        fetch(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=everything&api-key=hgGZ9Qf26H4JZSuum97ZdjfSvdrM1GG0 ` + id)
            .then((res) => { return res.json() })
            .then((data) => { setInform(data) })
            .catch((err)=>{console.log(err)})
    },[])
    return (
        <>
            Default functional {id}
            {inform.abstract}
            <div className="card">
                <h5 className="card-header">No: {id}</h5>
                <div className="card-body">
                    <h5 className="card-title">{inform.status}</h5>
                    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </>
    )
}
export default NewsLink