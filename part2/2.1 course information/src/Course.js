import React from 'react';

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

export default Course;