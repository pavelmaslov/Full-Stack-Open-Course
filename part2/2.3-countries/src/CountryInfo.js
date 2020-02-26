import React from 'react';

const CountryInfo= ({country}) => {
    const languages = country.languages.map(lang => {
        return (
            <li key={lang['iso639_1']}>
                {lang.name}
            </li>
        );
    });


    return (
        <div>
            <h1>{country.name}</h1>
            <p>Capital: {country.capital}</p>
            <p>Population: {country.population}</p>
            <h2>Languages</h2>
            <ol>
                {languages}
            </ol>
            <img src={country.flag} alt="Флаг" style={{border: '1px solid'}}></img>
        </div>
    );
};

export default CountryInfo;