import React from 'react';
import "./SearchBar.css";
import SearchIcon from "@material-ui/icons/Search"; 

function SearchBar({placeholder, data}){
    return (
        <div className='center'>
            <div className="search">
                <div className='searchInputs'>
                    <input type='text' style={{ color: 'white' }} placeholder={placeholder}/>
                    {/* <div className="searchIcon">
                        <SearchIcon/>
                    </div> */}
                </div>
                <div className='dataResult'></div>
            </div>
        </div>
    )
}

export default SearchBar
