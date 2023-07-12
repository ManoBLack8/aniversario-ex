import React from 'react';
import './App.css';
import Presente from './Presente';
import Confetti from 'react-confetti';


function App() {


  return (
    <div className="App">
      <header className="App-header">
      <Confetti
            width={window.innerWidth}
            height={window.innerHeight}
            numberOfPieces={100}
          />
          <h1>Feliz aniversario amaislindasauro</h1>
        <Presente />
        <p>clique no presente acima </p>
      </header>
    </div>
  );
}

export default App;
