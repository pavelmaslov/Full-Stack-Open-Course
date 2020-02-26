import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Filter from './Filter';
import CountryPlaceholder from './CountryPlaceholder';

const App = () => {
  const [searchString, setSerchString] = useState('');
  const [countries, setCoutries] = useState([]);
  const countriesToShow = searchString === '' ? countries : countries.filter(country => country.name.toLowerCase().includes(searchString.toLowerCase()));

  let initialCountriesLoadHook = () => {
    const countriesUrl = 'https://restcountries.eu/rest/v2/all';
    axios
      .get(countriesUrl)
      .then(res => {
        console.log(res.data);
        setCoutries(res.data);
      })
      .catch(error => {
        console.log(error);
      });
  };
  useEffect(initialCountriesLoadHook, []);

  const handleSearchInput = (event) => {
    setSerchString(event.target.value);
  }

  return (
    <div className="App">
      <Filter searchString={searchString} handleSearchInput={handleSearchInput} />
      <CountryPlaceholder countries={countriesToShow}/>
    </div>
  );
}

export default App;
