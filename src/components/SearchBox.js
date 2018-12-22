import React from 'react';

const SearchBox = ({ searchfield, searchChange }) => {
    return (
        <div className='pa2 ma3'>
            <input 
            className='pa3 br3 b--blue bg-lightest-blue'
            type='search' 
            placeholder='search profiles' 
            onChange={searchChange}
            />
        </div>
    );
}

export default SearchBox;