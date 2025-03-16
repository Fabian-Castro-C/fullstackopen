import { useState } from "react"

function StatisticLine({ text, value }) {
  return (
    <tr>
      <td><strong>{text}:</strong></td>
      <td>{value}</td>
    </tr> 
  )
}

function Statistics( {children, isFeedbackGiven} ) {
  if (isFeedbackGiven)
    return (
      <>
        <h2>
          statistics
        </h2>
        <div>
          <table>
            <tbody>
              {children}
            </tbody>
          </table>
        </div>
      </>
    )
  return (
    <>
      <h2>
        statistics
      </h2>
      <p>No feedback given</p>
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
  const average = ((good - bad) / all).toFixed(1)
  const positiveValue = ((good / all) * 100).toFixed(1)
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
        <Statistics isFeedbackGiven={all}>
          <StatisticLine text="good" value={good} />
          <StatisticLine text="neutral" value={neutral} />
          <StatisticLine text="bad" value={bad} />
          <StatisticLine text="all" value={all} />
          <StatisticLine text="average" value={average} />
          <StatisticLine text="positive" value={positivePercentage} />
        </Statistics>
      </div>
    </>
  )
}

export default App
