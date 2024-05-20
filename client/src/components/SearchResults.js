import React, {useState} from 'react'
import UrlResult from './UrlResult'
import SearchBar from './SearchBar'
import './UrlResult.css'
import './SearchResults.css'

export const SearchResults = () => {
    const [data, setData] = useState([{}]);
    
    const handleSearch = (data) => {
        setData(data);
        console.log(data)
    }
    
    const style = {
        visibility : (data?.urls?.length) ? 'visible' : 'hidden'
    }

    return (

        <div>

            <div> 
                <form className='SearchResults'>
                    <SearchBar onSearch={handleSearch} placeholder="Input a prompt..."/>
                    <ol className='url-list' style={style}>
                        {data.urls?.map((item, index) => (
                            <UrlResult key={index} url={item}/>
                        ))}
                    </ol>   
                </form>
            </div>
            
        </div>
    )
}