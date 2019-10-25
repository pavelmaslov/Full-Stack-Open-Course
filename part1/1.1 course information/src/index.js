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

const Content = (props) => {
    return (
        <div>
            <Part partName={props.arr[0].name} exercisesCnt={props.arr[0].exercises}/>
            <Part partName={props.arr[1].name} exercisesCnt={props.arr[1].exercises}/>
            <Part partName={props.arr[2].name} exercisesCnt={props.arr[2].exercises}/>
        </div>
    )
}

const Footer = (props) => {
    return (
        <p>
            Number of exercises {props.exercisesCnt}
        </p>
    )
}

const App = () => {
    const course = {
        name: 'Half Stack application development',
        parts: [
            {
                name: 'Fundamentals of React',
                exercises: 10
            },
            {
                name: 'Using props to pass data',
                exercises: 7
            },
            {
                name: 'State of a component',
                exercises: 14
            }
        ]
    };

    return (
        <div>
            <Header courseName={course.name}/>
            <Content arr={course.parts}/>
            <Footer exercisesCnt={course.parts.reduce((acc, part) => acc + part.exercises, 0)}/>
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));

