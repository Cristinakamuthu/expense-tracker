import React from 'react'
import App from './App.jsx'

const Search = ({setSearchterm, searchTerm}) => {
  return (
    <div id='search'>
<input type="text" placeholder='search expenses' value={searchTerm} />

    </div>
  )
}

export default Search