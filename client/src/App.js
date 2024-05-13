import React, { useState, useEffect} from 'react'
import SearchBar from './components/SearchBar';
import "./App.css"
function App() {

  return (
    <div className='App'>
      <SearchBar placeholder="Input a prompt..."/>
    </div>
    
  )
}

export default App