import React, {useState} from 'react';
import "./SearchBar.css";
import SearchIcon from "@material-ui/icons/Search"; 

function SearchBar({placeholder, onSearch}){
    const [value, setValue] = useState("")
    const [data, setData] = useState([{}])

    const sendData = () => {
        fetch('/api/urls', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ query: value }),
        })
        .then(response => {
            setData(response)
            onSearch(response);
            return response.json();
        })
        .then(data => {
            setData(data)
            onSearch(data);
            console.log(data)
        })
        .catch(error => {
            console.error('Error sending data:', error);
        });
    };
    
    
    const handleSearchChange = (e) => {
        e.preventDefault()
        setValue(e.target.value)
    }
    
    const handleSubmit = e => {
        e.preventDefault()
        sendData()
    }
    
    return (
        
        <div className="search">
            <div className='searchBar'>
                <input type='text' value={value} placeholder={placeholder} onChange={handleSearchChange}/>
                <button onClick={handleSubmit} type='submit' className='submit-button'>Enter</button>
            </div>
        </div>
    )
}

export default SearchBar
