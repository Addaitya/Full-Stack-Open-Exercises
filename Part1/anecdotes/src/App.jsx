/* eslint-disable react/prop-types */
import { useState } from 'react'

const ShowAnecdote = ({anecdote, vote}) => {
  return(
    <div>
      <p>{anecdote}</p>
      <p>has {vote} votes</p>
    </div>
  )
}

const HighestVoteAnecdote = ({anecdotes, votes}) => {
    const maxVote = Math.max(...votes)
    const index = votes.indexOf(maxVote)

    return (
      <ShowAnecdote anecdote={anecdotes[index]} vote={votes[index]} />
    )
  
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0))

  const getRandomAnecdote = () => {
    return () => {
      const index = parseInt(Math.random() * anecdotes.length)
      setSelected(index)
    }
  }

  const incrementVote = () => {
    return () => {
      const newVotes = [...votes]
      newVotes[selected]++;
      setVotes(newVotes)
    }
  }
  
  return (
    <div>
      <h1>Anecdote of the day</h1>
      <ShowAnecdote anecdote={anecdotes[selected]} vote={votes[selected]} />
      <button onClick={incrementVote()}>Vote</button>
      <button onClick={getRandomAnecdote()}>Next anecdote</button>
      <h1>Anecdote with most Votes</h1>
      <HighestVoteAnecdote anecdotes={anecdotes} votes={votes} />
    </div>
  )
}

export default App;
