import React, {useState} from 'react'
import UrlResult from './UrlResult'
import SearchBar from './SearchBar'
import './UrlResult.css'
import './SearchResults.css'
import antZotLogo from '/Users/egatchal/Desktop/Projects/ReactFlaskBasic/client/src/components/ant.png';

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
                <div className="header">
                    
                    <img src={antZotLogo} alt="Logo" className="logo"/>
    
                    <p id="title">{'\u00A0'}{'\u00A0'}Information Retrieval Spring 2024</p>
                    <p id="subtitle">{'\u00A0'}{'\u00A0'}Hearty Parrenas, Einar Gatchalian, Jefferson Mclinden</p>
                </div>
                
            
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