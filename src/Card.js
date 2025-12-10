import React, { useState } from 'react';
import './App.css';

const Card = (props) => {
  const [id, setID] = useState(false);
  const handleClick = () => {
    setID(props.id);
  };


  return (
    <div className='CardBACK' onClick={handleClick}>
        <img className="card-photo" src={props.foto} alt="Card" />
      <div className="card-name">{props.nome}</div>
      {id === 1 && <div className='card-text'><p>Parabéns por ser uma excelente amiga, foi sem dúvida um dos melhores achados de dezembro/2023. Muito obrigado por ser a influência que me tornou um nerd da MPB. Apesar dos pesares kkkkk, te guardo em meu coração para sempre.</p></div>}
      {id === 2 && <div className='card-text'>É O ROCK, É NOIX</div>}
      {id === 3 && <div className='card-text'>Aqui o título não tem nada a ver, apenas admiro você como artista e saiba que sempre vou te apoiar em tudo. Apesar de ser sempre a pessoa mais pé no chão, admiro você como amiga, filha, irmã e mãe do rolê.</div>}
      {id === 4 && <div className='card-text'>Com certeza esse trio aconteceu com várias jogadas de dados aleatórios do universo e com certeza deu um general de boca (referência de bozó). Quem diria que a viagem que nos uniu foi a que nos desuniu kkkkkk.</div>}
    </div>
  );
};

export default Card;