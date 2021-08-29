import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import firebase from './firebase2';
import 'bootstrap-icons/font/bootstrap-icons.json'
import { Link, useParams } from 'react-router-dom';
import './stylesheet.css'
const Form = ({ users, setUsers }) => {
    // const [data,setData]
    const [name, setName] = useState(' ')
    // const [surname,setSurname] = useState(' ')
    const [age, setAge] = useState(' ')
    const [location, setLocation] = useState(' ')
    const [des, setDes] = useState(' ')
    const db = firebase.firestore()
    const getName = (e) => {
        e.preventDefault()
        setName(e.target.value)
    }
    // ke dis page
    const getAge = (e) => {
        e.preventDefault()
        setAge(e.target.value)
    }
    const getLocation = (e) => {
        e.preventDefault()
        setLocation(e.target.value)
    }
    const getDes = (e) => {
        e.preventDefault()
        setDes(e.target.value)
    }
    const createUsers = (e) => {
        e.preventDefault();
        db.collection('lists').add({
            name: name,
            age: age,
            des: des,
            location: location
        })
            .then((res) => { console.log('user added') })
            .catch((err) => { console.log(err) })

    }
    let currentID = useParams();
    const { id } = currentID
    // console.log("currentId",currentID)

    // get users
    useEffect(() => {
        const info = [];
        db.collection('lists').get()
            .then((res) => {
                res.forEach(action => {
                    info.push({ ...action.data(), id: action.id })
                })
                setUsers(info)
            })
    }, [id])
    // delete user
    const deleteuser = (e) => {
        let uid = e.target.id
        // if (window.confirm("Are You Sure You Want To Delete?")) {
            db.collection('lists').doc(id).delete()
                .then(() => { console.log('user deleted') })
    }


    return (
        <>
            <div className='users-container mt-4'>
                <div className="section group">
                    <div className="col span_1_of_2">
                    </div>
                    <div class="col span_1_of_2">
                    </div>
                </div>
                <form onSubmit={createUsers}>
                    <fieldset>
                        <h1>Users</h1>
                        <div className="input-group">
                            <span className="input-group-text">FirstName And Age</span>
                            <input type="text" aria-label="First name" onChange={getName} className="form-control"></input>
                            <input type="text" aria-label="First name" onChange={getAge} className="form-control"></input>
                        </div>
                        <div className="input-group mt-4">
                            <span className="input-group-text">Location and Description</span>
                            <input type="text" aria-label="location" onChange={getLocation} className="form-control"></input>
                            <input type="text" aria-label="description" onChange={getDes} className="form-control"></input>
                        </div>
                        <button type='submit' className="btn btn-primary btn-lg mt-4">Add User</button>
                       

                    </fieldset>
                </form>

               <div className="output-container-mapping">
                        <div className="first-output">
                            {users.map((action, id) =>
                                <div className="output-container"  key={action.id}>
                                    <ol className="list-group list-group-mt-4">
                                        <li className="list-group-item d-flex justify-content-between align-items-start py-2 px-3">
                                            <div className="ms-2 me-auto">
                                                <Link to={"/Add/" + action.id } ><div className="fw-bold">{action.name}</div></Link>
                                                <p className="card-text">{'Age : '}{action.age}</p>
                                            </div>
                                            <button className="badge bg-danger rounded-pill" onClick={deleteuser}><i className="bi bi-trash bi-2x"></i></button>
                                        </li>
                                    </ol>       
                                </div>
                            )}
                    </div>
                </div>
            </div>    
        </>
    )
}
export default Form