import React from 'react'
import { MdSearch } from 'react-icons/md';

function SearchBar({handleSearch}){
    return(
        <div className='search'>

            <MdSearch className='search-icon' />
            <input 
            type='text' 
            placeholder='Type to search notes...' 
            onChange={(event) => handleSearch(event.target.value)}/>
        </div>
    )
}

export default SearchBar;