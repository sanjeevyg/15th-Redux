import './App.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { get_characters, increase, decrease } from './Redux/Actions';



function App() {
  const dispatch = useDispatch()

  const characters = useSelector(state => state.characters)
  const counter = useSelector(state => state.count)

  useEffect(getCharacters, [])

  const showCharacters = () => {return characters.map( 
    character => 
    <div><h1> { character.name } </h1>
         <img src={ character.image }/>
    <div>{ counter }</div>
    <button onClick={handleIncrease}> 👍 </button> 
    <button onClick={handleDecrease}> 👎 </button>
    </div>
  )
  }

  function getCharacters() {
    fetch('https://rickandmortyapi.com/api/character/?page=7')
      .then(response => response.json())
      .then(({results}) => dispatch(get_characters(results)))
  }

  const handleIncrease = () => {
    dispatch(increase())
  }

  const handleDecrease = () => {
    dispatch(decrease())
  }

  return (
    <div className="App">
      {showCharacters()}
      
      
    </div>
  );
  }

export default App;
