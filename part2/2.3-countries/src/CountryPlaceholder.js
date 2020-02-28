import React from 'react';
import CountriesList from './CountriesList';
import CountryInfo from './CountryInfo';

const CountryPlaceholder = ({countries, setSerchString}) => {
    let result;

    if (countries.length > 10) {
        result = (
            <div>
                Too many matches, provide more specific filter
            </div>
        );
    } else if (countries.length > 1){
        result =
                <CountriesList countries={countries} setSerchString={setSerchString}/>;
    } else  if (countries.length === 1) {
        result = <CountryInfo country={countries[0]}/>;
    } else {
        result = (
            <div>
                No matches found
            </div>
        );
    }
    return(
        <div>
            {result}
        </div>
    );
}

export default CountryPlaceholder;