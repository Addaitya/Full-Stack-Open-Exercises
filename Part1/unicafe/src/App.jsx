/* eslint-disable react/prop-types */
import { useState } from 'react'

const Button = ({handleClick, text}) =>{
  return(
    <>
      <button onClick={handleClick}>{text}</button>
    </>
  )
}

const Statistics = ({good, neutral, bad}) =>{
  if(good + bad + neutral === 0){
    return(
      <div>
        No feedback given yet.
      </div>
    )
  }

  const total = good + neutral + bad;
  const average = (good - bad) / total;
  const positive = good / total * 100;

  return(
    <div>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>All: {total}</p>
      <p>Average: {average}</p>
      <p>Positive: {positive} %</p>
    </div>
  )
}

function App() {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const increment = (rating, setRating) =>{
    return () =>  setRating(rating + 1) 
  }

  return (
  <div>
    <h1>give feedback</h1>
    <Button handleClick={increment(good, setGood)} text={'Good'} />
    <Button handleClick={increment(neutral, setNeutral)} text={'Neutral'} />
    <Button handleClick={increment(bad, setBad)} text={'Bad'}/>
    <h1>Stats</h1>
    <Statistics good={good} neutral={neutral} bad= {bad} />
  </div>
  )
}

export default App
