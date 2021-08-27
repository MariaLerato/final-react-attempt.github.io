import React,{useState,useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import firebase from './firebase2';
import { Link,useParams } from 'react-router-dom';
const Form = ({users,setUsers}) =>{
    // const [data,setData]
    const [name,setName] = useState(' ')
    // const [surname,setSurname] = useState(' ')
    const [age,setAge] = useState(' ')
    const [location,setLocation] = useState(' ')
    const[des,setDes] = useState(' ')
    const db =firebase.firestore()
    const getName = (e) =>{
        e.preventDefault()
        setName(e.target.value)
    }
    const getAge = (e) =>{
        e.preventDefault()
        setAge(e.target.value)
    }
    const getLocation = (e) =>{
        e.preventDefault()
        setLocation(e.target.value)
    }
    const getDes = (e) =>{
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
    const {id} = currentID
    console.log("currentId",currentID)
    
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
        if(window.confirm("Are You Sure You Want To Delete?")){
        db.collection('lists').doc(uid).delete()
            .then(() => { console.log('user deleted') })
       }   }
    // update user
    const updateUser = (e) => {
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
    return(
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
                        {users.map((action,id) =>
                            <div className="output-container">
                                <div className="card-output mt-4" key={action.id}>
                                    <div className="card-header">
                                        User Details
                                    </div>
                                    <div className="card-body">

                                        <Link to={"/userDetails/:id" } > <h5 className="card-title">{action.name}</h5></Link>
                                        <p className="card-text">{'Age : '}{action.age}</p>
                                        <button id={action.id} className='btn btn-danger me-2' onClick={deleteuser}>Delete User</button>
                                        <button id={action.id} className='btn btn-warning' onClick={updateUser}>Update User</button>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                    <div className="second-output">
                    </div>
                    
                </div> 
          </div>       
        </>
    )
}
export default Form