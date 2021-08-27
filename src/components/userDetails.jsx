import React,{useState,useEffect} from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import './stylesheet.css'
import { useParams } from "react-router-dom";
import firebase from "firebase";

const UserDetails = ({props}) => {
    // const {id:id} =useParams()
    console.log('users', props)
    const [data,setData] = useState({})
    const db = firebase.firestore();
    const {id:uid} = useParams();
    console.log('users',data);
   const [name,setName] = useState(' ')
    // const [surname,setSurname] = useState(' ')
    const [age,setAge] = useState(' ')
    const [location,setLocation] = useState(' ')
    const[des,setDes] = useState(' ')
    // const db =firebase.firestore()
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
    useEffect(()=>{
        let userInformation=[];
        db.collection('lists').doc(uid).get()
        .then((res)=>{setData({...res.data(),id:res.id})})
        .catch((err)=>{console.log(err)})
        .finally(()=>{console.log('completed')})
    },[])
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
           
    
    const deleteuser = (e) => {
        let uid = e.target.id
        if(window.confirm("Are You Sure You Want To Delete?")){
        db.collection('lists').doc(uid).delete()
            .then(() => { console.log('user deleted') })
       }   }
    // console.log('id',currentID)
    return (
        <>
            <div className="newOutput">
                <form onSubmit={updateUser}>
                    <fieldset>
                        <div className="form-group">
                            <label >Name</label>
                            <input type="text"name="text" value={props.name}></input> 
                        </div>
                        <div className="form-group">
                            <label>Age</label>
                            <input type="text" name="text" className="form-control" value={props.age} />
                        </div>
                        <div className="form-group">
                            <label >Location</label>
                            <input type="text"  className="form-control" name="location" value={props.location} />
                        </div>
                        <div className="form-group">
                            <label for="disabledTextInput">Description</label>
                            <input type="text" className="form-control" name="des" value={props.des} />
                        </div>
                        <button  className='btn btn-danger me-2' onClick={deleteuser}>Delete User</button>
                        <button  className='btn btn-warning'type="submit">Update User</button>
                        </fieldset>
                </form>   
            </div>   
       </>
    )
}


export default UserDetails;
