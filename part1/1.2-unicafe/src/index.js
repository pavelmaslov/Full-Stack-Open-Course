import React, {useState} from 'react';
import ReactDOM from 'react-dom';

const Header = ({text}) => {
    return (
        <h1>
            {text}
        </h1>
    );
}

const Button = ({onClickHandler, text}) => {
    return (
        <button onClick={onClickHandler}>
            {text}
        </button>
    );
}

const Display = ({text, value, persent}) => {
    return (
        <div>
            {text} {value} {persent === true ? '%' : ''}
        </div>
    );
}

const App = () => {
    // save clicks of each button to own state
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);

    const addScore = (newVal, setFunc) => {
        return () => setFunc(newVal);
    };

    return (
    <div>
        <Header text="give feedback"/>
        <Button onClickHandler={addScore(good + 1, setGood)} text="good"/>
        <Button onClickHandler={addScore(neutral + 1, setNeutral)} text="neutral"/>
        <Button onClickHandler={addScore(bad + 1, setBad)} text="bad"/>
        <Header text="statistics"/>
        <Display text="good" value={good}/>
        <Display text="neutral" value={neutral}/>
        <Display text="bad" value={bad}/>
        <Display text="all" value={good + neutral + bad}/>
        <Display text="average" value={(good - bad) / (good + neutral + bad)}/>
        <Display text="positive" value={good / (good + neutral + bad)} persent={true}/>
    </div>
    )
}

ReactDOM.render(<App />, 
    document.getElementById('root')
)