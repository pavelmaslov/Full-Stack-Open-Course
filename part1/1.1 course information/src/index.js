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
    const course = 'Half Stack application development';
    const part1 = {
        name: 'Fundamentals of React',
        exercises: 10
    }
    const part2 = {
        name: 'Using props to pass data',
        exercises: 7
    }
    const part3 = {
        name: 'State of a component',
        exercises: 14
    }
    let contentProps = [part1, part2, part3];

    return (
        <div>
            <Header courseName={course}/>
            <Content arr={contentProps}/>
            <Footer exercisesCnt={part1.exercises + part2.exercises  + part3.exercises }/>
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));

