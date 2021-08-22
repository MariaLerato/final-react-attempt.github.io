import React, { useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'

const UserDetails = ({ users, db, setUser }) => {
    console.log('users', users)
    const inform = [];
    // const db = firebase.firestore()

    useEffect(() => {
        db.collection('lists').get()
            .then((res) => {
                res.forEach(action => {
                    inform.push({ ...action.data(), id: action.id })
                })

            })
    })
    return (
        <>
            {/* <h1>{users.id}</h1> */}
            {users.map((action,i) => 
               <ul className="list-group mt-4" key={i}>
                <li className="list-group-item">Name: {' '}{action.name}</li>
                <li className="list-group-item">Age: {' '}{action.age}</li>
                <li className="list-group-item">Location:{' '}{action.location}</li>
                <li className="list-group-item">Description:{' '}{action.des}</li>
            
            </ul>)
}
<ul>
    {/* {users.map((inform)=><li>{inform.id}</li>)} */}
</ul>
       </>
        )
    }


export default UserDetails;
