import { useState } from "react"

function Stat({ text, value }) {
  return (
    <li><strong>{text}:</strong> {value}</li>
  )
}

function Statistics( {children} ) {
  return (
    <>
      <h2>
        statistics
      </h2>
      <ul>
        {children}
      </ul>
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

  const handlerFactory = ( state, setState ) => {
    const newState = state + 1
    const handler = () => setState(newState)
    return handler
  }

  return (
    <>
      <h1>Unicafe</h1>
      <div>
        <Feedback>
          <Button handleClick={handlerFactory(good, setGood)} text="good" />
          <Button handleClick={handlerFactory(neutral, setNeutral)} text="neutral" />
          <Button handleClick={handlerFactory(bad, setBad)} text="bad" />
        </Feedback>
        <Statistics>
          <Stat text="good" value={good} />
          <Stat text="neutral" value={neutral} />
          <Stat text="bad" value={bad} />
        </Statistics>
      </div>
    </>
  )
}

export default App
