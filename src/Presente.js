import React, { useState } from 'react';
import './App.css';
import Interior from './Interior';

const Presente = () => {
  const [aberto, setAberto] = useState(false);

  const handleClick = () => {
    setAberto(true);
  };

  return (
    <div className={`presente ${aberto ? 'aberto' : ''}`} onClick={handleClick}>
      <div className="fita"></div>
      {aberto && (
        <div className="aberto">
          <div className="conteudo">
            <Interior />
          </div>
        </div>
      )}
    </div>
  );
};

export default Presente;
