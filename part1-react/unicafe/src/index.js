import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Statistics = ({good, neutral, bad, resultados}) => {
  let promedio = resultados.length === 0 
    ? 0 
    : (resultados.reduce((acum, valor) => acum + valor ,0) / resultados.length) * 10

  let positivos = resultados.length === 0
    ? 0
    : (resultados.filter(r => r === 1).length / resultados.length) * 100 

  if (resultados.length !== 0) {
    return (
      <div>
        <h2>Estadísticas</h2>
        <p>Bien: {good}</p>
        <p>Normal: {neutral}</p>
        <p>Malo: {bad}</p>
        <p>Total: {resultados.length}</p>
        <p>Promedio: {promedio}</p>
        <p>Positivos: {positivos} %</p>
      </div>
    )
  }
  else {
    return (
      <div>
        <h2>Estadísticas</h2>
        <p>Sin estadísticas</p>
      </div>
    )
  }
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [resultados, setResultados] = useState([])

  const handleClickGood = () => {
    setGood(good + 1)
    setResultados(resultados.concat(1))
  }
  const handleClickNeutral = () => {
    setNeutral(neutral + 1)
    setResultados(resultados.concat(0))
  }
  const handleClickBad = () => {
    setBad(bad + 1)
    setResultados(resultados.concat(-1))
  }

  return (
    <div>
      <h2>DANOS TU OPINIÓN</h2>
      <button onClick={handleClickGood}>Bien</button>
      <button onClick={handleClickNeutral}>Normal</button>
      <button onClick={handleClickBad}>Malo</button>
      <Statistics good={good} neutral={neutral} bad={bad} resultados={resultados}/>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)