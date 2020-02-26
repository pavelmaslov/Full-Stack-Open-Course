import React from 'react';

const CountriesList = ({countries}) => {
    let countriesNames = countries.map(country => {
        return (
            <p key={country.alpha3Code}>
                {country.name}
            </p>
        );
    });

    return (
        <div>
            {countriesNames}
        </div>
    );
};

export default CountriesList;