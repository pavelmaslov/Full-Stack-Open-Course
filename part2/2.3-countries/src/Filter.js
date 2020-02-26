import React from 'react';

const Filter = ({searchString, handleSearchInput}) => {
    return(
        <div>
            find countries <input value={searchString} onChange={handleSearchInput}/>
        </div>
    );
}

export default Filter;