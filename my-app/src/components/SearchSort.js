import React, {useState} from 'react'
import Select from 'react-select'

function SearchSort ({setSearchTerm, dropDown, setDropDown}) {

    function handleChange(e) {
    setSearchTerm(e.target.value);
  }

    function handleFilter(e) {
        setDropDown(e.target)
    }

    // const [isSearchable, setIsSearchable] =useState(true)

    return (
        <div className="search container m-auto px-2 pt-10 pb-10">
            <input 
                onChange = {handleChange} 
                type="text" 
                className='searchTerm'
                placeholder="Search..."/>
            
            <Select 
                onChange={handleFilter}
                className='dropDown'
                // isSearchable={isSearchable}
                options={dropDown}
                />
        </div>
      

     
    )
}

export default SearchSort