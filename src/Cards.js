import React from 'react';
import './App.css';
import Card from './Card';
import ex from './ex.jpg';
import bussines from './bussinesgirl.jpg';
import mae from './mae.jpg';
const Cards = () => {
  
  return (
    <div className='CARDSBACK'>
      <h1>Por isso você vai receber 3 parabéns diferentes</h1>
      <Card nome='EX namorada' id={1} foto={ex} />
      <Card nome='Empreendedora' id={2} foto={bussines} />
      <Card nome='Mãe' id={3} foto={mae} />
    </div>
  );
};

export default Cards;
