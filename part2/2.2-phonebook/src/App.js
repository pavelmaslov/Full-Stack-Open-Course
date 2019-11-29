import React, { useState } from 'react';
import Persons from './Persons'

const App = () => {
  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '123-1', id: 1 }
  ]);
  const [ newName, setNewName ] = useState('');
  const [ newNumber, setNewNumber] = useState('');

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

  return (
    <div>
      <h2>Phonebook</h2>
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
      <Persons persons={persons}/>
    </div>
  );
}

export default App;