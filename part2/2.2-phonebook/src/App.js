import React, { useState } from 'react';
import Persons from './Persons'

const App = () => {
  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas', id: 1 }
  ]);
  const [ newName, setNewName ] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const newPerson = {
      name: newName,
      id: persons.length + 1
    };

    setNewName('');
    setPersons([...persons, newPerson]);
  }

  const handleInput = (event) => {
    setNewName(event.target.value);
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleSubmit}>
        <div>
          name: <input value={newName} onChange={handleInput}/>
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