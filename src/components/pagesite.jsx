import React,{useState} from "react";
// import { Link } from "react-router-dom";

const SearchForm = ({searchText}) =>{
    const [text,setText] = useState(' ')
    const handleSubmit=(e)=>{
        e.preventDefault()
        searchText(text)

    }
    return(
        <>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="news"  onChange={(e)=>setText(e.target.value)} className="py-1 px-2 rounded-l-lg text-black" />
            <button type="submit" className="bg-green-400 py-1 px-2 rounded-r-lg text-white">Search</button>
        </form>
        {/* <Link to={'/props'}>Hello</Link> */}
        </>
    )
}
export default SearchForm
