import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import {  useParams } from 'react-router-dom'
import firebase from './firebase2'

const Details = ({ d ,users,setUsers}) => {
    const [info, setInfo] = useState([])
    const db = firebase.firestore()
    const { id: id } = useParams()
    console.log('users', d)

    useEffect(() => {
        const info = [];
        db.collection('lists').get()
            .then((res) => {
                res.forEach(action => {
                    info.push({ ...action.data(), id: action.id })
                })
                setInfo(info)
            })
    }, [id])


    // const {name:name} = useParams()
    console.log('id', id)
    //get data by id
    useEffect(() => {
    })
    return (
        <>
            <div class="card">
                <h5 class="card-header">Featured</h5>
                <div class="card-body">
                    <h5 class="card-title">{users.name}</h5>
                    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
       
        </>
    )
}
export default Details