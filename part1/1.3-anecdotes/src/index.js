import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const anecdotes = [
`The best way to get a project done faster is to start sooner`,
`Plan to throw one (implementation) away; you will, anyhow.`,
`Program testing can be used to show the presence of bugs, but never to show their absence!`,
`Design and programming are human activities; forget that and all is lost.`,
`The key to performance is elegance, not battalions of special cases.`,
`Better train people and risk they leave - than do nothing and risk they stay.`,
`If something is worth doing once, it's worth building a tool to do it.`
];


const Button = ({onClickHandler, text}) => {
    return (
        <button onClick={onClickHandler}>
            {text}
        </button>
    );
}

const App = (props) => {
    const [selected, setSelected] = useState(0);

    return (
        <div>
            <p>{props.anecdotes[selected]}</p>
            <p><Button text="next anecdote" onClickHandler={()=> setSelected(Math.floor(anecdotes.length * Math.random()))}/></p>
        </div>
    );
};



ReactDOM.render(
    <App anecdotes={anecdotes} />,
    document.getElementById('root')
);