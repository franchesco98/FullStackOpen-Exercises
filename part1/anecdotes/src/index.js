import React, { useState } from 'react'
import { createRoot } from 'react-dom/client'

const App = ({ anecdotes }) => {
  const [selected, setSelected] = useState(0);
  const [points, setPoints] = useState(new Array(6).fill(0));
  const [mostVoted, setMostVoted] = useState(0);

  const nextAnecdote = () => setSelected(Math.floor(Math.random() * anecdotes.length));

  const voteAnecdote = () => {
    const currentPoints = [...points];
    currentPoints[selected]++;
    setPoints(currentPoints);
    setMostVoted(getMostVotedAnecdote(currentPoints));
  }

  const getMostVotedAnecdote = (points) => points.indexOf(Math.max(...points));

  return (
    <>
      <div>
        <h1>Anecdote of the day</h1>
        {anecdotes[selected]}
        <br />
        has {points[selected]} votes
        <br />
        <button onClick={() => voteAnecdote()}>vote</button>
        <button onClick={() => nextAnecdote()}>next anecdote</button>
      </div>
      <div>
        <h1>Anecdote with most votes</h1>
        {anecdotes[mostVoted]}
        <br />
        has {points[mostVoted]} votes
      </div>
    </>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

createRoot(document.getElementById('root'))
  .render(<App anecdotes={anecdotes} />);