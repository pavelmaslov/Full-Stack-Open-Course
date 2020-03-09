import React from 'react';

const Persons = ({persons, handleDelete}) => {

    const personsTemplates = persons.map(person => {
        return(
            <p key={person.id}>
                {person.name} {person.number} <button onClick={handleDelete} data-id={person.id} data-name={person.name}>delete</button>
            </p>
        );
    });

    return(
        <div>
            {personsTemplates}
        </div>
    );
}

export default Persons;