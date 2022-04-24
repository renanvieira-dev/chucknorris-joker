import React, { useEffect, useState } from 'react'
import './App.css';
import api from './services/api';
import Atualizar from './components/refresh';

function App() {

  const [ state, setState ] = useState({
    joke: ''
  })

  useEffect(() => {
    api
      .get("http://api.icndb.com/jokes/random")
      .then((response) => {
        // console.log(response.data.value);
        setState({
          ...state,
          joke: response.data.value
        });
      })
      .catch(() => {
        console.log('deu errado!!');
      })
  }, []);

  return (
    <div className='container'>
      <div className='division-content'>
        <h2>Buscador de piadas aleatórias do Chuck Norris</h2>
        <div className="division-2-column">
          <div className="flex">
            <img src="./chuck-norris.png" title="Foto do Chuck Norris" />
          </div>
          <div className="joker">
            <h2>Resultado logo em baixo:</h2>
            <div className="result-joker">
            <p>ID joker: {state.joke.id}</p>
            <p>{state.joke.joke}</p>
            </div>
            <Atualizar />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App