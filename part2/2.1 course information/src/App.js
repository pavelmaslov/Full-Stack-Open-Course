import React from 'react';
import Course from './Course';

const App = ({courses}) => {
    

    const couresTemplates = courses.map(course => {
        return(
            <Course key={course.id} course={course}/>
        );
    })

    return (
        <div>
            {couresTemplates}
        </div>
    );
}

export default App;