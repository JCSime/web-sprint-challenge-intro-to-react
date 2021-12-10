import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

import Character from './components/Character';

const App = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(()=>{
    axios.get('https://swapi.dev/api/people')
    .then(res => {
      setCharacters(res.data);
    })
    .catch(err => {
      console.log('Character error');
    })
  }, [])

  return (
    <div className="App">
      {characters.map(char => {
        return <Character key={char.name} data={char} />
      })
    }
    </div>
  );
}

export default App;
