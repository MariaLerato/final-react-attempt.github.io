import React,{useState} from 'react'
import { useEffect } from 'react'
import firebase from 'firebase'
import { useParams,Link } from 'react-router-dom'
// then ka no dira this code ya bereka
const UserDets = () => {
    const [name,setName] = useState(' ')
    // const [surname,setSurname] = useState(' ')
    const [age,setAge] = useState(' ')
    const [location,setLocation] = useState(' ')
    const[des,setDes] = useState(' ')
    const [data,setData] = useState({})
    const db = firebase.firestore();
    const {id:id} = useParams();
    console.log('users',data);
 
    useEffect(()=>{
        let userInformation=[];
        db.collection('lists').doc(id).get()
        .then((res)=>{setData({...res.data(),id:res.id})})
        .catch((err)=>{console.log(err)})
        .finally(()=>{console.log('completed')})
        setData(userInformation)
        console.log('lists',db.collection('lists'))
    },[])
    //run it then how did u do it
    //de problem was i cldnt pass the id properly
 
    return(
        <>
                 <div className="newOutput">
                <form>
                    <fieldset >
                        <div className="form-group">
                            <label >Name</label>
                            <input type="text" name="name" disabled="true" className="form-control" value={data.name} onChange={((e)=>setName(e.target.value))}></input> 
                        </div>
                        <div className="form-group">
                            <label>Age</label>
                            <input type="text" name="age" disabled="true" className="form-control" value={data.age} onChange={((e)=>setAge(e.target.value))}/>
                        </div>
                        <div className="form-group">
                            <label >Location</label>
                            <input type="text"  className="form-control" disabled="true" name="location" value={data.location} onChange={((e)=>setLocation(e.target.value))}/>
                        </div>
                        <div className="form-group">
                            <label for="disabledTextInput">Description</label>
                            <input type="text" className="form-control" name="des" disabled="true" value={data.des} onChange={((e)=>setDes(e.target.value))}/>
                        </div>
                        {/* <button  className='btn btn-danger me-2' onClick={deleteuser}>Delete User</button> */}
                        <br />
                        <Link to={'/edit/' + id}  className='btn btn-primary'type="submit">Edit</Link>
                        
                        </fieldset>
                </form>   
            </div>   
    
        </>
    )
}
export default UserDets