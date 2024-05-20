import React from 'react'
import './UrlResult.css'
function UrlResult({url}){
    return (
            <div className="url-item">
                {/* <p>{url}</p> */}
                <a href={url}>{url}</a>
            </div>
    )
}

export default UrlResult