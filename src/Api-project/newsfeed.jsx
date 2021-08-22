import React,{useEffect,useState} from 'react';
import { Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const News = () =>{
    const [data, setData] = useState([])
    let info = [];
    useEffect(()=>{
      
        fetch('https://api.nytimes.com/svc/search/v2/articlesearch.json?fq=section_name:("Arts")&sort=newest&api-key=dYbWrWQ8uwiSAqI63nrMFptr8vZZAPcE')
        .then((res) =>{return res.json()})
        .then((_data) =>(setData(_data)))
        .catch((err)=>{console.log(err)})
        .finally(() =>{console.log('!complete')})
    },[])
    return(
        <>
        <div className="container-fluid mt-4">
                <div className="card">
                <div className="list-group">                    
                  {data.abstract}
                </div>
        </div>
        <h1>News page</h1>
        </div>
        </>
    )
}
export default News