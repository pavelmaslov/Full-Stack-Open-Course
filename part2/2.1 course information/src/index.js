import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Header = (props) => {
    return (
        <h1>{props.courseName}</h1>
    )
};

const Part = (props) => {
    return (
        <p>
            {props.partName} {props.exercisesCnt}
        </p>
    )
}

const Content = ({parts}) => {
    parts = parts.map(part => {
        return(
            <Part key={part.id} partName={part.name} exercisesCnt={part.exercises}/>
        )});
    return (
        <div>
            {parts}
        </div>
    )
}

const Footer = (props) => {
    return (
        <p>
            total of {props.exercisesCnt} exercises
        </p>
    )
}

const Course = ({course}) => {
    return (
        <div>
            <Header courseName={course.name}/>
            <Content parts={course.parts}/>
            <Footer exercisesCnt={course.parts.reduce((acc, part) => acc + part.exercises, 0)}/>
        </div>
    );
}

const App = () => {
    const course = {
        name: 'Half Stack application development',
        parts: [
            {
                name: 'Fundamentals of React',
                exercises: 10,
                id: 1
            },
            {
                name: 'Using props to pass data',
                exercises: 7,
                id: 2
            },
            {
                name: 'State of a component',
                exercises: 14,
                id: 3
            },
            {
                name: 'Redux',
                exercises: 11,
                id: 4
            }
        ]
    };

    return (
        <div>
            <Course course={course}/>
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));

