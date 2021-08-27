import React,{useState} from 'react'
import { useEffect } from 'react'
import firebase from 'firebase'
import { useParams } from 'react-router'

const UserDets = () => {
    const [data,setData] = useState({})
    const db = firebase.firestore();
    const {id:uid} = useParams();
    console.log('users',data);
 
    useEffect(()=>{
        let userInformation=[];
        db.collection('lists').doc(uid).get()
        .then((res)=>{setData({...res.data(),id:res.id})})
        .catch((err)=>{console.log(err)})
        .finally(()=>{console.log('completed')})
        setData(userInformation)
        console.log('lists',db.collection('lists'))
    },[])
    return(
        <>
        {data.parent
            
       
        })
    
        </>
    )
}
export default UserDets