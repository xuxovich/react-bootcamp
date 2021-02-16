import './App.css';
import { useState } from 'react'

const Contador = ({ number }) => {
  console.log('render Contador')
  return <h1>El contador es {number}</h1>
}

const Button = ({text, handleClick}) => {
  return (
    <button onClick={handleClick}>
      {text}
    </button>
  )
}


const App = (props) => {
  const [state, setState] = useState(0)

  const handleClick = () => {
    setState(state + 1)
  }
  const handleClickReset = () => {
    setState(0)
  }

  const isEven = state % 2 === 0
  const mensajePar = isEven ? 'Es par' : 'Es impar'

  return (
    <div>
      <Contador number={state}/>
      <h2>Probando</h2>
      <p>{mensajePar}</p>
      <Button 
        text='Incrementar' 
        handleClick={handleClick}
      />
      <Button 
        text='Reset' 
        handleClick={handleClickReset}
      />
    </div>
  )
}

export default App;
