import React from 'react';
import './App.css';
import Card from './Card';
import ex from './amalia2.jpeg';
import bussines from './amalia1.jpeg';
const Cards = () => {
  
  return (
    <div className='CARDSBACK'>
      <h1>Por isso você vai receber 2 parabéns diferentes</h1>
      <Card nome='Chefa' id={1} foto={ex} />
      <Card nome='Amiga' id={2} foto={bussines} />
    </div>
  );
};

export default Cards;
