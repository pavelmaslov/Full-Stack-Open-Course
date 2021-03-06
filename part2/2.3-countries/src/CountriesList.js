import React from 'react';

const CountriesList = ({countries, setSerchString}) => {
    const showBtnClickHandler = (event) => {
        setSerchString(event.currentTarget.dataset.name);
    };

    let countriesNames = countries.map(country => {
        return (
            <p key={country.alpha3Code} onClick={showBtnClickHandler} data-name={country.name}>
                {country.name}
                <button>Show</button>
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