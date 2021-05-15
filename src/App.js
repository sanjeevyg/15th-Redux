import './App.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GET_CHARACTERS } from './Redux/Types';



function App() {
  const dispatch = useDispatch()

  const characters = useSelector(state => state.characters)

  useEffect(getCharacters, [])

  const showCharacters = () => {return characters.map( 
    character => <h1> {character.name} </h1>
  )
  }

  function getCharacters() {
    fetch('https://rickandmortyapi.com/api/character/?page=7')
      .then(response => response.json())
      .then(({results}) => dispatch({
        type: GET_CHARACTERS,
        characters: results
      }))
  }

  return (
    <div className="App">
      {showCharacters()}
    </div>
  );
  }

export default App;
