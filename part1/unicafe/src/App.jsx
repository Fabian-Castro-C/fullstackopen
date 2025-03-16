import { useState } from "react"

function Stat({ text, value }) {
  return (
    <p><strong>{text}:</strong> {value}</p>
  )
}

function Statistics( {children} ) {
  return (
    <>
      <h2>
        statistics
      </h2>
      {children}
    </>
  )
}

function Button({ handleClick, text }) {
  return (
    <>
      <button onClick={handleClick}>{text}</button>
    </>
  )
}

function Feedback( { children } ) {
  return (
    <>
      <h2>
        give feedback
      </h2>
      {children}
    </>
  )
}

function App() {
  const [ good, setGood ] = useState(0)
  const [ neutral, setNeutral ] = useState(0)
  const [ bad, setBad ] = useState(0)

  const incrementGood = () => setGood(good + 1)
  const incrementNeutral = () => setNeutral(neutral + 1)
  const incrementBad = () => setBad(bad + 1)

  // More stats
  const all = good + neutral + bad
  const average = all === 0 ? 0 : (good - bad) / all
  const positiveValue = all === 0 ? 0 : (good / all) * 100
  const positivePercentage = String(positiveValue) + " %" 

  return (
    <>
      <h1>Unicafe</h1>
      <div>
        <Feedback>
          <Button handleClick={incrementGood} text="good" />
          <Button handleClick={incrementNeutral} text="neutral" />
          <Button handleClick={incrementBad} text="bad" />
        </Feedback>
        <Statistics>
          <Stat text="good" value={good} />
          <Stat text="neutral" value={neutral} />
          <Stat text="bad" value={bad} />
          <Stat text="all" value={all} />
          <Stat text="average" value={average} />
          <Stat text="positive" value={positivePercentage} />
        </Statistics>
      </div>
    </>
  )
}

export default App
