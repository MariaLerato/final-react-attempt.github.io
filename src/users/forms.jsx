import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import firebase from './firebase2'
const Updates =() =>{
    const [data,setData] = useState({});
    const db = firebase.firestore();
    useEffect(()=>{
        db.collection('users')
    },[])
    
    return(
        <div className="container">
        </div>
    )
}
export default Updates