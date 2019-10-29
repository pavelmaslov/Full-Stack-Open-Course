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

const Statistic = ({text, value, persent}) => {
    return (
        <tr>
            <td>
                {text}
            </td>
            <td>
                {value} {persent === true ? '%' : ''}
            </td> 
        </tr>
    );
}

const Statistics = ({scores}) => {
    const good = scores.good;
    const neutral = scores.neutral;
    const bad = scores.bad;

    if (good === 0 && neutral === 0 && bad === 0) {
        return (
            <table>
                <tbody>
                    <Statistic text="No feedback given"/>
                </tbody>
            </table>
        );
    }else {
        return (
            <div>
                <Header text="statistics"/>
                <table>
                    <tbody>
                    <Statistic text="good" value={good}/>
                    <Statistic text="neutral" value={neutral}/>
                    <Statistic text="bad" value={bad}/>
                    <Statistic text="all" value={good + neutral + bad}/>
                    <Statistic text="average" value={(good - bad) / (good + neutral + bad)}/>
                    <Statistic text="positive" value={good / (good + neutral + bad)} persent={true}/>
                    </tbody>
                </table>
            </div>
            
        );
    }

}

const App = () => {
    // save clicks of each button to own state
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);
    const scores = {
        good,
        neutral,
        bad
    };

    const addScore = (newVal, setFunc) => {
        return () => setFunc(newVal);
    };

    return (
    <div>
        <Header text="give feedback"/>
        <Button onClickHandler={addScore(good + 1, setGood)} text="good"/>
        <Button onClickHandler={addScore(neutral + 1, setNeutral)} text="neutral"/>
        <Button onClickHandler={addScore(bad + 1, setBad)} text="bad"/>
        <Statistics scores={scores}/>
    </div>
    )
}

ReactDOM.render(<App />, 
    document.getElementById('root')
)