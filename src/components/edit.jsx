import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import firebase from "firebase";
import 'bootstrap/dist/css/bootstrap.min.css'
const Edit = () => {

    const [name, setName] = useState(' ')
    const [age, setAge] = useState(' ')
    const [location, setLocation] = useState(' ')
    const [des, setDes] = useState(' ')
    const [data, setData] = useState({})
    const db = firebase.firestore();
    const { id: id } = useParams();
    console.log('users', data);
    const getName = (e) => {
        e.preventDefault()
        setName(e.target.value)
    }

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
    useEffect(() => {
        let userInformation = [];
        db.collection('lists').doc(id).get()
            .then((res) => { setData({ ...res.data(), id: res.id }) })
            .catch((err) => { console.log(err) })
            .finally(() => { console.log('completed') })
        setData(userInformation)
        console.log('lists', db.collection('lists'))
    }, [])
   
    const updateUser = (e) => {
        e.preventDefault()
        let uid = e.target.id
        db.collection('lists').doc(uid).update({
            name: name,
            age: age,
            location: location,
            des: des
        })
            .then(() => { console.log('Update Complete') })
            .catch((err) => { console.log(err) })
    }
    return (
        <>
            <div className="input-group input-group-sm mt-4 mb-6">
                <form onSubmit ={updateUser}>
                    <div className="mb-3 row">
                        <label for="name" className="col-sm-2 col-form-label">Name</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" onChange={getName} defaultValue={data.name} />
                        </div>
                    </div>
                    <div className="mb-3 row">
                        <label for="name" className="col-sm-2 col-form-label">Age</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" onChange={getAge} defaultValue={data.age} />
                        </div>
                    </div>
                    <div className="mb-3 row">
                        <label for="name" className="col-sm-2 col-form-label">Location</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" onChange={getLocation} defaultValue={data.location} />
                        </div>
                    </div>
                    <div className="mb-3 row">
                        <label for="des" className="col-sm-2 col-form-label">Description</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" onChange={getDes} defaultValue={data.des} />
                        </div>
                    </div>
                   
                    <br />
                    <Link to={"/Add/" + id} className='btn btn-warning' id={id} onClick={updateUser}>Update User</Link>
               
            </form>
            </div>
        </>
    )
}
export default Edit