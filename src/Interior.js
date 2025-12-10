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
              Não sou artista e sim desenvolvedor, então segue aqui meu Parabéns na minha forma de arte.
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
