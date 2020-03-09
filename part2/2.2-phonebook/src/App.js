import React, { useState, useEffect } from 'react';
import Persons from './Persons';
import Filter from './Filter';
import PersonForm from './PersonForm';
import PersonsService from './services/Persons';


const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [searchString, setSerchString] = useState('');
  const personsToShow = searchString === '' ? persons : persons.filter(person => person.name.toLowerCase().includes(searchString.toLowerCase()));

  const initialPersonsLoadHook = () => {
    PersonsService
      .getAll()
      .then(persons => setPersons(persons))
      .catch(err => console.log(err));
  };

  useEffect(initialPersonsLoadHook, []);

  const handlePersonSubmit = (event) => {
    event.preventDefault();
    const newPerson = {
      name: newName,
      number: newNumber
    };
    const filteredPersons = persons.filter(person => person.name === newName);

    if (filteredPersons.length === 0) {
      PersonsService
        .create(newPerson)
        .then(createdPerson => {
          setNewName('');
          setNewNumber('');
          setPersons([...persons, createdPerson]);
        });
    } else {
      if (window.confirm(`${newName} is already added to phonebook. Do you want to replace it?`)) {
        newPerson.id = filteredPersons[0].id;
        PersonsService
          .update(newPerson)
          .then(updatedPerson => setPersons(persons.map(person => person.id === updatedPerson.id ? updatedPerson : person)))
          .catch(err => {
            console.log(err);
          });
      };
    }
  }

  const handlePersonDelete = (event) => {
    const id = parseInt(event.currentTarget.dataset.id, 10);
    const name = event.currentTarget.dataset.name;
    if (window.confirm(`Do you really want to delete ${name}`)) {
      PersonsService
        .deletePerson(id)
        .then(data => 
          {
            setPersons(persons.filter(person => person.id !== id))
          })
        .catch(err=> console.log(err));
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
      <PersonForm handleSubmit={handlePersonSubmit} handleNameInput={handleNameInput} handleNumberInput={handleNumberInput} newName={newName} newNumber={newNumber}/>
      <h2>Numbers</h2>
      <Persons persons={personsToShow} handleDelete={handlePersonDelete}/>
    </div>
  );
}

export default App;