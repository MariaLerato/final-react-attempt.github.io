import React,{useEffect,useState} from 'react'


const NewsMap = () =>{
    const [_data,setData] = useState([])

    useEffect(()=>{
        fetch("https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=ca8fca1e1bf243638dcfd1a05102b0fa")
        .then((res)=>{  return res.json() })
        .then((data)=>{setData(data) })
        .catch((err)=>{ console.log(err)})
        .finally(()=>{console.log('done!')})
    })
    return(
        <>
        <div className="container-fluid mt-4">
        <div className="card">
        <div className="list-group">
       {
        _data.map((action)=>
         <a href="#" className="list-group-item list-group-item-action">
         {action.id}
         </a>
       )
       }
        </div>
        </div>
        </div>
        

        </>
    )
}
export default NewsMap