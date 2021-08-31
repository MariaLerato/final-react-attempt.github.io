import React,{useState,useEffect} from "react";
const New = () =>{
    const [inform,setInform] = useState([])
    
    useEffect(()=>{
        fetch('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=ca8fca1e1bf243638dcfd1a05102b0fa')
        .then(response=>response.json())
        .then((data)=>setInform(data.inform));
        return()=>{}
    },[])

    return(
        <>
        <ul>
            {inform.map((action)=>
                <li>   {action.data}</li>)}
        </ul>
        </>
    )
}
export default New