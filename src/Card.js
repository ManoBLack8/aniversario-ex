import React, {useState} from 'react';
import './App.css';

const Card = (props) => {
  const [id, setID] = useState(false);
  const handleClick = () => {
    setID(props.id);
  };
  return (
    <div className='CardBACK' onClick={handleClick}>
      <img className="card-photo" src={props.foto} alt="Card"></img>
      <div className="card-name">{props.nome}</div>
      {id === 1 && <div className='card-text'><p>Parabéns por ser uma exelente chefa, valorizo muito uma otima gestão, ainda mais uma gestão que proucura uma conversa para saber o contexto da vida de um funcionario e vamoes esperar a futura governadora do estado kakakakkak</p></div>}
      {id === 2 && <div className='card-text'> Parabéns por aperentar ser uma boa amiga, não temos muita amizade mas está sendo construida...</div>}
    </div>
  );

  
  
  
  
};

export default Card;
