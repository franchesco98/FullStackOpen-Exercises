import React, { useState } from 'react'
import { createRoot } from 'react-dom/client';

const Button = ({ state, handleClick }) => {
  return (
    <>
      <button onClick={handleClick}>{state}</button>
    </>
  )
}

const StatisticLine = ({ text, value }) => {
  return (
    <tr>
      <td>
        {text}
      </td>
      <td>
        {value}
      </td>
    </tr>
  )
}

const Statistics = ({ states }) => {
  const all = () => {
    const result = states.good + states.neutral + states.bad;
    return isNaN(result) ? 0 : result;
  }

  const average = () => {
    const result = (states.good - states.bad) / (states.good + states.neutral + states.bad);
    return isNaN(result) ? 0 : result;
  }

  const positive = () => {
    const result = (states.good / (states.good + states.neutral + states.bad)) * 100;
    return isNaN(result) ? 0 : result;
  }

  if(states.good === 0 && 
    states.neutral === 0 
    && states.bad === 0)
    return (
      <>
        <p>No feedback given</p>
      </>
    )

  return (
    <>
      <h1>statistics</h1>
      <table>
        <StatisticLine text="good" value={states.good} />
        <StatisticLine text="neutral" value={states.neutral} />
        <StatisticLine text="bad" value={states.bad} />
        <StatisticLine text="all" value={all()} />
        <StatisticLine text="average" value={average()}/>
        <StatisticLine text="positive" value={positive() + " %"}/>
      </table>
    </>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [ states, setStates ] = useState({
    good: 0,
    neutral: 0,
    bad: 0
  });

  const increaseState = (feedback) => {
    const statesOptions = {
      good: () => setStates({
        ...states,
        good: states.good + 1
      }),
      neutral: () => setStates({
        ...states,
        neutral: states.neutral + 1
      }),
      bad: () => setStates({
        ...states,
        bad: states.bad + 1
      }),
    };

    statesOptions[feedback]();
  }

  return (
    <>
      <div>
        <h1>give feedback</h1>
        <Button state="good" handleClick={() => increaseState('good')} />
        <Button state="neutral" handleClick={() => increaseState('neutral')} />
        <Button state="bad" handleClick={() => increaseState('bad')} />
      </div>
      <div>
        <Statistics states={states} />
      </div>
    </>
  )
}

createRoot(document.getElementById('root'))
  .render(<App />);