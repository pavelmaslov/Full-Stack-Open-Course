import React from 'react';

const Filter = ({searchString, searchInputHandler}) => {
    return(
        <div>
            find countries <input value={searchString} onChange={searchInputHandler}/>
        </div>
    );
}

export default Filter;