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
            <Part partName={props.arr[0].name} exercisesCnt={props.arr[0].cnt}/>
            <Part partName={props.arr[1].name} exercisesCnt={props.arr[1].cnt}/>
            <Part partName={props.arr[2].name} exercisesCnt={props.arr[2].cnt}/>
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
    const part1 = 'Fundamentals of React';
    const exercises1 = 10;
    const part2 = 'Using props to pass data';
    const exercises2 = 7;
    const part3 = 'State of a component';
    const exercises3 = 14;
    let contentProps = [
        {
            name: part1,
            cnt: exercises1
        },
        {
            name: part2,
            cnt: exercises2
        },
        {
            name: part3,
            cnt: exercises3
        }
    ];

    return (
        <div>
            <Header courseName={course}/>
            <Content arr={contentProps}/>
            <Footer exercisesCnt={exercises1 + exercises2 + exercises3}/>
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));

