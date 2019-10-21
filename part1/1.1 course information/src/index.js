import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Header = (props) => {
    return (
        <h1>{props.courseName}</h1>
    )
};

const Content = (props) => {
    return (
        <p>
            {props.partName} {props.exercisesCnt}
        </p>
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

    return (
        <div>
            <Header courseName={course}/>
            <Content partName={part1} exercisesCnt={exercises1}/>
            <Content partName={part2} exercisesCnt={exercises2}/>
            <Content partName={part2} exercisesCnt={exercises3}/>
            <Footer exercisesCnt={exercises1 + exercises2 + exercises3}/>
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));

