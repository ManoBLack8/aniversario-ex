import React from 'react';
import './App.css';
import Card from './Card';
import barzinho from './barzinho.jpeg';
import dorock from './dorock.jpeg';
import carnaval from './carnaval.jpeg';
import trioternura from './trio ternura.jpeg';
import video from './video.mp4';

const Cards = () => {
  
  return (
    <div className='CARDSBACK'>
      <h1>Você merece receber 4 parabéns diferentes</h1>
      <Card nome='Amiga' id={1} foto={barzinho} />
      <Card nome='Do Rock 🤘' id={2} foto={dorock} />
      <Card nome='Carnavalesco' id={3} foto={carnaval} />
      <Card nome='Trio parada dura' id={4} foto={trioternura} />
      <Card nome='Como é ter uma amigo tão legal quanto eu?' id={5} foto={video} />
    </div>
  );
};

export default Cards;
