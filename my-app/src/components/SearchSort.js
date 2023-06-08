import React from 'react'


function SearchSort ({setSearchTerm}) {

    function handleChange(e) {
    setSearchTerm(e.target.value);
  }
  
    return (
        <div className="search container m-auto px-2 pt-10 pb-10">
            <input 
                onChange = {handleChange} 
                type="text" 
                className='searchTerm'
                placeholder="Enter Name"/>
        </div>
    )
}

export default SearchSort