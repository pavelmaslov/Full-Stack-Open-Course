import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Persons from './Persons';
import Filter from './Filter';
import PersonForm from './PersonForm';

const App = () => {
  const [ persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [searchString, setSerchString] = useState('');
  const personsToShow = searchString === '' ? persons : persons.filter(person => person.name.toLowerCase().includes(searchString.toLowerCase()));
  const personsUrl = 'http://localhost:3001/persons';

  const initialPersonsLoadHook = () => {
    axios
      .get(personsUrl)
      .then(res => {
        setPersons(res.data);
      })
      .catch(err => {
        console.log(err);
      })
  }

  useEffect(initialPersonsLoadHook, []);

  const nameExists = (name) => {
    return persons.filter(person => person.name === name).length > 0;
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!nameExists(newName)) {
      const newPerson = {
        name: newName,
        number: newNumber,
        // id: persons.length + 1
      };
  
      // setNewName('');
      // setNewNumber('');
      // setPersons([...persons, newPerson]);

      axios
        .post(personsUrl, newPerson)
        .then(res => {
          console.log(res.data);
          setNewName('');
          setNewNumber('');
          setPersons([...persons, res.data]);
        })

    } else {
      alert(`${newName} is already added to phonebook`);
    }
    
  }

  const handleNameInput = (event) => {
    setNewName(event.target.value);
  }

  const handleNumberInput = (event) => {
    setNewNumber(event.target.value);
  }

  const handleSearchInput = (event) => {
    setSerchString(event.target.value);
  }


  return (
    <div>
      <h2>Phonebook</h2>
      <Filter searchString={searchString} handleSearchInput={handleSearchInput}/>
      <h2>Add new contact</h2>
      <PersonForm handleSubmit={handleSubmit} handleNameInput={handleNameInput} handleNumberInput={handleNumberInput} newName={newName} newNumber={newNumber}/>
      <h2>Numbers</h2>
      <Persons persons={personsToShow}/>
    </div>
  );
}

export default App;