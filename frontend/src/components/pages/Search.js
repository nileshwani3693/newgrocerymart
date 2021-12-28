import React, { useState } from "react"
import { useNavigate } from "react-router-dom";
import "../inc/search.css"

const Search = () => {
    const navigate = useNavigate();
    const [keyword, setKeyword] = useState("")
    const searchSubmitHandler = (e) => {
        e.preventDefault();
        if (keyword.trim()) {

            navigate(`/products/${keyword}`)
        } else {
            navigate("/products")
        }
    };
    return (
        <>

            <tr className="searchnbtnalign">

                <td >

                    <input className=" searchStyle" type="search" placeholder="Search" aria-label="Search" 
                    onChange={(e) => setKeyword(e.target.value)} /></td>

                <td >
                    <button className="searchbutnstyling" onClick={searchSubmitHandler} type="submit">Search</button>
                </td>

            </tr>
        </>
    );


}
export default Search;