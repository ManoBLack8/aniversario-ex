import React, { useState } from 'react';
import './App.css';
import Cards from './Cards';

const Interior = () => {
  const [mostrarCards, setMostrarCards] = useState(true);

  const handleProximo = () => {
    setMostrarCards(false);
  };
  if (mostrarCards){
    return (
      <div>
          <div>
            <h1>
              Eu estava pensando, como dar um parabéns a uma pessoa que merece não só
              palmas como todo o Tocantins?
            </h1>
            <button className='btn' onClick={handleProximo}>Próximo</button>
          </div>
      </div>
    );
  }else{
    return (
      <Cards />
    )
  }
  
};

export default Interior;
