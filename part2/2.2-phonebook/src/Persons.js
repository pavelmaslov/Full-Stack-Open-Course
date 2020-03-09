import React from 'react';

const Persons = ({persons, handleDelete}) => {

    const personsTemplates = persons.map(person => {
        return(
            <p key={person.id} onClick={handleDelete} data-id={person.id} data-name={person.name}>
                {person.name} {person.number} <button>delete</button>
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