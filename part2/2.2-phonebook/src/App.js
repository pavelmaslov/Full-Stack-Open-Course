import React, { useState } from 'react';
import Persons from './Persons'

const App = () => {
  const [ persons, setPersons] = useState([
    {name: 'Arto Hellas', number: '040-123456', id: 1},
    {name: 'Ada Lovelace', number: '39-44-5323523', id: 2},
    {name: 'Dan Abramov', number: '12-43-234345', id: 3},
    {name: 'Mary Poppendieck', number: '39-23-6423122', id: 4}
  ]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [searchString, setSerchString] = useState('');
  const personsToShow = searchString === '' ? persons : persons.filter(person => person.name.toLowerCase().includes(searchString.toLowerCase()));

  const nameExists = (name) => {
    return persons.filter(person => person.name === name).length > 0;
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!nameExists(newName)) {
      const newPerson = {
        name: newName,
        number: newNumber,
        id: persons.length + 1
      };
  
      setNewName('');
      setNewNumber('');
      setPersons([...persons, newPerson]);
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
      <div>
        filter shown with <input value={searchString} onChange={handleSearchInput}/>
      </div>
      <h2>Add new contact</h2>
      <form onSubmit={handleSubmit}>
        <div>
          name: <input value={newName} onChange={handleNameInput}/>
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumberInput}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <Persons persons={personsToShow}/>
    </div>
  );
}

export default App;