import React from 'react';

const Persons = ({persons}) => {
    const personsTemplates = persons.map(person => {
        return(
            <p key={person.id}>
                {person.name}
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