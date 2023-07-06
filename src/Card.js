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
      {id === 1 && <div className='card-text'><p>Parabéns Juliana! Que o seu caminho seja iluminado. Todos sabemos o quanto você está se esforçando para colher frutos no futuro. Muito obrigado por me permitir fazer parte de 7,5% da sua vida, por me apoiar nos momentos difíceis e por elevar minha autoestima ao namorar uma pessoa tão bonita.</p></div>}
      {id === 3 && <div className='card-text'>Parabéns por ser uma excelente mãe! Sua dedicação em sempre oferecer o melhor para seu filho é admirável. A maturidade que você demonstrou ao assumir essa responsabilidade tão cedo é um verdadeiro testemunho do seu poder e força como mulher. Nada pode se comparar à determinação e amor que você investe na vida do seu filho. Sua capacidade de ser uma mãe presente e comprometida é um exemplo inspirador para todos ao seu redor. Continue brilhando como essa mulher incrível que você é!</div>}
      {id === 2 && <div className='card-text'>Parabéns por ser uma empreendedora de sucesso tão jovem! Posso imaginar que não seja fácil enfrentar os desafios de ser uma empreendedora tão jovem, e muitas vezes as pessoas não levam a sério suas ambições e ideias. No entanto, você conquistou a todos com sua simpatia e energia positiva. Sua determinação e vontade de plantar as sementes do sucesso desde cedo certamente renderão frutos no futuro. Estou torcendo por ainda mais sucesso em sua jornada empreendedora. Continue brilhando e alcançando grandes realizações!</div>}
    </div>
  );

  
  
  
  
};

export default Card;
