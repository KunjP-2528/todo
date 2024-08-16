import React, { useState } from 'react';

import './Cards.css'; 
import Card1 from './Card1';
import Card2 from './Card2';
 
const Cards = () => {
  const [isFlipped, setIsFlipped] = useState(false);
 
  const handleClick = () => {
    setIsFlipped(prev => !prev);
    
    
  };
  const Reset = () =>{
    setIsFlipped(false)
  }
 
  return (
<div className="flip-container" >
<div className={`flipper ${isFlipped ? 'flipped' : ''}`}>
<Card1 onstart={handleClick}/>
<Card2 reset ={Reset}/>
</div>
</div>
  );
};
 
export default Cards;