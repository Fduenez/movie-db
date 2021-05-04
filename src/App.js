import logo from './logo.svg';
import Toolbar from './componets/Toolbar/Toolbar';
import MovieGrid from './componets/MovieGrid/MovieGrid'
import React, {useState} from 'react';
import './App.css';

function App() {
  const [movie, setMovie] = useState('');
  
  return (
    <div className="App">
        <Toolbar movieHandler={setMovie}/>
        <MovieGrid movie={movie}/>
    </div>
  );
}

export default App;
