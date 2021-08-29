import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import firebase from "firebase";
import 'bootstrap/dist/css/bootstrap.min.css'
const Edit = () => {
    const [name, setName] = useState(' ')
    // const [surname,setSurname] = useState(' ')
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
    // ke dis page
    const getAge = (e) => {
        setAge.bind(getAge)
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
    //run it then how did u do it
    //de problem was i cldnt pass the id properly
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
    const updateUser = (e) => {
        e.preventDefault()
        let uid = e.target.id
        db.collection('lists').doc(id).update({
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
            <div class="input-group input-group-sm mt-4 mb-6">
                <form onSubmit={createUsers}>
                    <div class="mb-3 row">
                        <label for="name" class="col-sm-2 col-form-label">Name</label>
                        <div class="col-sm-10">
                            <input type="text" className="form-control" onChange={getName} defaultValue={data.name} />
                        </div>
                    </div>
                    <div class="mb-3 row">
                        <label for="name" class="col-sm-2 col-form-label">Age</label>
                        <div class="col-sm-10">
                            <input type="text" className="form-control" onChange={getAge} defaultValue={data.age} />
                        </div>
                    </div>
                    <div class="mb-3 row">
                        <label for="name" class="col-sm-2 col-form-label">Location</label>
                        <div class="col-sm-10">
                            <input type="text" className="form-control" onChange={getLocation} defaultValue={data.location} />
                        </div>
                    </div>
                    <div class="mb-3 row">
                        <label for="des" class="col-sm-2 col-form-label">Description</label>
                        <div class="col-sm-10">
                            <input type="text" className="form-control" onChange={getDes} defaultValue={data.des} />
                        </div>
                    </div>
                   
                    <br />
                    <Link to={"/Add/" + id} className='btn btn-warning' onClick={updateUser}>Update User</Link>
               
            </form>
            </div>
        </>
    )
}
export default Edit