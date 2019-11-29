import React from 'react';

const Filter = ({searchString, handleSearchInput}) => {
    return(
        <div>
        filter shown with <input value={searchString} onChange={handleSearchInput}/>
        </div>
    );
}

export default Filter;