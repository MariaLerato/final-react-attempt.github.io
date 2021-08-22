import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Details = () => {
    const [info, setInfo] = useState([])
    const { id: id } = useParams();

    // get data by id
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts/1' + id)
            .then((res) => { return res.json() })
            .then((data) => { setInfo(data) })

    })
    // function to add data
    useEffect(()=>{
        const _info ={
            title:'jhdghd',
            body:'s,dfljkdlj'
        }
        const Options = {
            method: 'PUT',
            body: JSON.stringify(_info)
        }
        fetch('https://jsonplaceholder.typicode.com/posts/1'+ id)
        .then((res) =>{
            console.log(res.status)
        })
        .finally(()=>{console.log('post data !')})
    },[])
    // delete post
    const DeletePost = (e) =>{
        
        const _id = e.target.id
        console.log('passed id:',_id)
        fetch('https://jsonplaceholder.typicode.com/posts/' + _id, {method:'DELETE'})
        .then((res)=>{console.log(res.status)})
        .catch((err)=>{console.log(err)})
    }
    return (
        <>
            Details functional Component{id}
            <div className="container-fluid mt-4">
            <div className="card">
                <h5 className="card-header">Featured id :{info.userId}</h5>
                <div className="card-body">
                    <h5 className="card-title">{info.title}</h5>
                    <p className="card-text">{info.body}</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                    <button id={info.id} onClick={DeletePost} className="btn btn-danger">Delete</button>
                </div>
            </div>
            </div>
        </>
    )
}
export default Details